import React, { useState, useEffect } from 'react';
import { 
	Box,
	Button, 
	Heading, 
	IconButton,
	VStack 
} from '@chakra-ui/react';

import Block from './components/Block';
import ArrowIcon from './components/ArrowIcon';
import ErrorPlaceholder from './components/ErrorPlaceholder';

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
	const [hasError, setError] = useState<boolean>(false);

	const getTypedKeys = Object.keys as <T extends Record<string, unknown>>(obj: T) => Array<keyof T>;
	const accountsKeys = getTypedKeys(accounts);
	const fromExceedsBalance = !isReversed && +fromVal > +accounts[from];
	const toExceedsBalance = isReversed && +toVal > +accounts[to];

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
				setError(false);
			})
			.catch(() => {
				setError(true);
			});
	};

	useEffect(() => {
		const interval = setInterval(fetchRates, 10000);
		fetchRates();

		return () => clearInterval(interval);
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
		const [, decimals, multiple] = value.split('.'); // disallow multiple dots

		if ((decimals && decimals.length > 2) || 
		typeof multiple === 'string' || 
		value.startsWith('.') || 
		value.startsWith('0') ||
		value.endsWith('+') ||
		value.endsWith('-')) {
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
			[from]: (+accounts[from] + fromValNum).toFixed(2), 
			[to]: (+accounts[to] + toValNum).toFixed(2)
		});
	};

	const handleReverse = () => setReversed(!isReversed);

	console.log(rates);

	if (hasError) {
		return <ErrorPlaceholder />;
	}

	return <VStack align='center' padding={8} spacing={6}>
		<Box>
			<Heading as='h1' size='lg' marginBottom={1}>Sell {from}</Heading>
			<Box data-testid='rate' color='gray.500'>
				{SYMBOLS[from]}1 = {SYMBOLS[to]}{(rates[to] / rates[from]).toFixed(6)}
			</Box>
		</Box>

		<Box position='relative'>
			<Block 
				type='from'
				account={accounts[from]}
				symbol={SYMBOLS[from]}
				handleChange={handleChange}
				handleSelect={handleSelect}
				isReversed={isReversed}
				accountsKeys={accountsKeys}
				currency={from}
				inputVal={fromVal}
				exceeds={fromExceedsBalance}
			/>
			
			<Block
				type='to'
				account={accounts[to]}
				symbol={SYMBOLS[to]}
				handleChange={handleChange}
				handleSelect={handleSelect}
				isReversed={isReversed}
				accountsKeys={accountsKeys}
				currency={to}
				inputVal={toVal}
				exceeds={toExceedsBalance}
			/>

			<IconButton
				icon={<ArrowIcon
					color='cyan.400'
				/>}
				aria-label='reverse'
				onClick={handleReverse}
				variant='ghost'
				size='lg'
				transform={`rotate(${isReversed ? -45 : 145}deg)`}
				isRound
				_hover={{ bg: 'cyan.100' }}
				_active={{ bg: 'cyan.100' }}
				_focus={{ bg: 'cyan.100' }}
				position='absolute'
				top={'calc(50% - 24px)'}
				right='75px'
			/>
		</Box>

		<Button
			aria-label='buy/sell'
			onClick={handleClick}
			disabled={fromExceedsBalance || toExceedsBalance}
			colorScheme='cyan'
			color='white'
			size='lg'
			width='200px'
		>
			{!isReversed ? `Sell ${from} for ${to}` : `Buy ${from} with ${to}`}
		</Button>
	</VStack>;
};

export default App;
