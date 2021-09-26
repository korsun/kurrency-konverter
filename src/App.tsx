import React, { useState, useEffect } from 'react';
import './App.css';

const API_KEY = 'df6831b373d143a6ba70c3b88c270bad';
const BASE = 'USD'; // USD only in free plan

type TResponse = {
	base: typeof BASE,
	rates: {
		EUR: number,
		GBP: number
	}
}

type TRates = {
	USD: 1,
	EUR: number,
	GBP: number
}

type TAccounts = {
	USD: number,
	EUR: number,
	GBP: number
}

type TCurrency = 'USD' | 'EUR' | 'GBP'

type TType = 'from' | 'to'

const App = (): JSX.Element => {
	const [rates, setRates] = useState<TRates>({ USD: 1, EUR: 0, GBP: 0 });
	const [accounts, setAccounts] = useState<TAccounts>({ USD: 100, EUR: 200, GBP: 0 });
	const [from, setFrom] = useState<TCurrency>(BASE);
	const [to, setTo] = useState<TCurrency>('EUR');
	const [fromVal, setFromVal] = useState<number>(accounts[from]);
	const [toVal, setToVal] = useState<number>(accounts[to]);
	const [error, setError] = useState<string>('');

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

		if (target.value === 'USD' || target.value === 'EUR' || target.value === 'GBP') {
			if (type === 'from') {
				setFrom(target.value);
				setFromVal(accounts[target.value]);
			} else {
				setTo(target.value);
				setToVal(accounts[target.value]);
			}
		}
	};

	const handleChange = (type: TType) => (e: React.SyntheticEvent) => {
		const target = e.target as HTMLInputElement;
		const value = Number(target.value);

		if (type === 'from') {
			setFromVal(value);
			setToVal(value * rates[to]);
		} else {
			setToVal(value);
			setFromVal(value * rates[from]);
		}
	};

	const handleClick = () => {
		setAccounts({ ...accounts, [from]: accounts[from] - fromVal, [to]: accounts[to] + toVal });
	};

	console.log(rates);

	return <div>
		<h1>Sell {from}</h1>
		<span data-testid='rate'>1 {from} = {rates[to]} {to}</span>
		<div>
			<select name='select-from' aria-label='select-from' value={from} onChange={handleSelect('from')}>
				<option value='USD'>USD</option>
				<option value='EUR'>EUR</option>
				<option value='GBP'>GBP</option>
			</select>
			<input 
				type='number'
				aria-label='from'
				value={fromVal}
				onChange={handleChange('from')}
			/>
			<span data-testid='account-from'>{accounts[from]} {from}</span>
		</div>
		<div>
			<select name='select-to' aria-label='select-to' value={to} onChange={handleSelect('to')}>
				<option value='USD'>USD</option>
				<option value='EUR'>EUR</option>
				<option value='GBP'>GBP</option>
			</select>
			<input
				type='number'
				aria-label='to'
				value={toVal}
				onChange={handleChange('to')}
			/>
			<span data-testid='account-to'>{accounts[to]} {to}</span>
		</div>
		<button onClick={handleClick}>Sell</button>
	</div>;
};

export default App;
