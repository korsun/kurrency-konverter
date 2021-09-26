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
	const [fromVal, setFromVal] = useState<string>(accounts[from]);
	const [toVal, setToVal] = useState<string>(accounts[to]);
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

		// avoids smth like USD -> USD trades
		const nextCurrency = accountsKeys[accountsKeys.indexOf(value) + 1] || 'USD';

		if (type === 'from') {
			setFrom(value);
			setFromVal(accounts[value]);
			setTo(nextCurrency);
		} else {
			setTo(value);
			setToVal(accounts[value]);
			setFrom(nextCurrency);
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
			setToVal(String((+value * rates[to]).toFixed(2)));
		} else {
			setToVal(value);
			setFromVal(String((+value * rates[from]).toFixed(2)));
		}
	};

	const handleClick = () => {
		setAccounts({ 
			...accounts, 
			[from]: +accounts[from] - +fromVal, 
			[to]: +accounts[to] + +toVal 
		});
	};

	console.log(rates);

	return <VStack align='center' spacing={2}>
		<Heading as='h1'>Sell {from}</Heading>
		<span data-testid='rate'>{SYMBOLS[from]}1 = {SYMBOLS[to]}{rates[to]}</span>

		<Flex>
			<div data-testid='account-from'>Balance: {SYMBOLS[from]}{accounts[from]}</div>
			<CurrencySelect
				type='from'
				value={from}
				currencies={accountsKeys}
				onChange={handleSelect('from')}
			/>
			<CurrencyInput 
				type='from'
				value={fromVal}
				max={+accounts[from]}
				onChange={handleChange('from')}
			/>
		</Flex>

		<Flex>
			<div data-testid='account-to'>Balance: {SYMBOLS[to]}{accounts[to]}</div>
			<CurrencySelect
				type='to'
				value={to}
				currencies={accountsKeys}
				onChange={handleSelect('to')}
			/>
			<CurrencyInput
				type='to'
				value={toVal}
				max={+accounts[to]}
				onChange={handleChange('to')}
			/>
		</Flex>

		<Button onClick={handleClick}>Sell</Button>
	</VStack>;
};

export default App;
