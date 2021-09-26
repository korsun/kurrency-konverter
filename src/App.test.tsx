import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('normal work', () => {
	it('fetches rates and puts them into the state');
	it('renders elements with their values');
	it('switches the accounts and displays it on the page');
	it('converts currency on input change');
	it('trades currencies between the accounts');
	it('switches [from] and [to] fields on arrow click');
});

describe('crash tests', () => {
	it('validates the input');
	it('shows "exceeds balance" when amount to trade is higher then availability');
	it('handles onfetch error');
});
