import React, { useState, useEffect } from 'react';
import { 
	Button, 
	Flex, 
	Heading, 
	VStack 
} from '@chakra-ui/react';
import CurrencyInput from './components/CurrencyInput';
import CurrencySelect from './components/CurrencySelect';

import { TResponse, TRates, TAccounts, TCurrency, TType } from './types';
import { API_KEY, BASE, SYMBOLS } from './constants';

const parse = (value: string) => value.replace(/^-+/u, '');

const App = (): JSX.Element => {
	const [rates, setRates] = useState<TRates>({ USD: 1, EUR: 0, GBP: 0 });
	const [accounts, setAccounts] = useState<TAccounts>({ USD: '100', EUR: '200', GBP: '0' });
	const [from, setFrom] = useState<TCurrency>(BASE);
	const [to, setTo] = useState<TCurrency>('EUR');
	const [fromVal, setFromVal] = useState<string>('1');
	const [toVal, setToVal] = useState<string>('0');
	const [isReversed, setReversed] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	const getTypedKeys = Object.keys as <T extends Record<string, unknown>>(obj: T) => Array<keyof T>;
	const accountsKeys = getTypedKeys(accounts);

	const fetchRates = () => {
		fetch(`https://openexchangerates.org/api/latest.json?app_id=${API_KEY}&base=${BASE.toLowerCase()}`)
			.then(raw => raw.json())
			.then((data: TResponse) => {
				setRates({
					[data.base]: 1,
					EUR: data.rates.EUR,
					GBP: data.rates.GBP
				});
				setToVal(String(data.rates.EUR.toFixed(2)));
			})
			.catch(err => console.error(err));
	};

	useEffect(() => {
		// const interval = setInterval(fetchRates, 10000);

		// return () => clearInterval(interval);

		fetchRates();
	}, []);

	const handleSelect = (type: TType) => (e: React.SyntheticEvent) => {
		const target = e.target as HTMLSelectElement;
		const value = target.value as TCurrency;

		if (type === 'from') {
			if (value === to) {
				setTo(from);
			}
			setFrom(value);
			setToVal(String((+fromVal * (rates[to] / rates[value])).toFixed(2)));

		} else {
			if (value === from) {
				setFrom(to);
			}
			setTo(value);
			setToVal(String((+fromVal * (rates[value] / rates[from])).toFixed(2)));
		}
	};

	const handleChange = (type: TType) => (strValue: string) => {
		const value = parse(strValue);
		const [, decimals] = value.split('.');

		if (decimals && decimals.length > 2) {
			return;
		}

		if (type === 'from') {
			setFromVal(value);
			setToVal(String((+value * (rates[to] / rates[from])).toFixed(2)));
		} else {
			setToVal(value);
			setFromVal(String((+value * (rates[from] / rates[to])).toFixed(2)));
		}
	};

	const handleClick = () => {
		const fromValNum = !isReversed ? -Number(fromVal) : Number(fromVal);
		const toValNum = !isReversed ? Number(toVal) : -Number(toVal);

		setAccounts({ 
			...accounts, 
			[from]: +accounts[from] + fromValNum, 
			[to]: +accounts[to] + toValNum 
		});
	};

	const handleReverse = () => setReversed(!isReversed);

	const renderBlock = (type: TType) => {
		const key = type === 'from' ? from : to;
		const inputVal = type === 'from' ? fromVal : toVal;

		return <Flex>
			<div data-testid={`account-${type}`}>
				Balance: {SYMBOLS[key]}{accounts[key]}
			</div>
			<CurrencySelect
				type={type}
				value={key}
				currencies={accountsKeys}
				onChange={handleSelect(type)}
			/>
			<CurrencyInput
				type={type}
				value={inputVal}
				max={+accounts[key]}
				onChange={handleChange(type)}
			/>
		</Flex>;
	};

	console.log(rates);

	return <VStack align='center' spacing={2}>
		<Heading as='h1'>Sell {from}</Heading>
		<span data-testid='rate'>{SYMBOLS[from]}1 = {SYMBOLS[to]}{(rates[to] / rates[from])}</span>

		{renderBlock('from')}
		{renderBlock('to')}

		<Button aria-label='reverse' onClick={handleReverse}>{!isReversed ? '⬇️' : '⬆️'}</Button>

		<Button
			aria-label='buy/sell'
			onClick={handleClick}
		>
			{!isReversed ? `Sell ${from} for ${to}` : `Buy ${from} with ${to}`}
		</Button>
	</VStack>;
};

export default App;
