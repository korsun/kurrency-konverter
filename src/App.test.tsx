import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

const mockedResponse = {
	base: 'USD',
	rates: {
		EUR: 0.85,
		GBP: 0.75
	}
};

const globalRef: any = global;

fdescribe('normal work', () => {
	beforeEach(() => {
		globalRef.fetch = jest.fn(() => Promise.resolve({
			json: () => Promise.resolve(mockedResponse)
		}));
		render(<App />);
	});

	afterEach(() => {
		globalRef.fetch.mockClear();
	});

	it('fetches rates, puts them into the state and displays correctly', () => {
		const rate = screen.getByTestId('rate');
		expect(rate).toHaveTextContent('1 USD = 0.85 EUR');
		const select = screen.getByLabelText('select-to');
		fireEvent.change(select, { target: { value: 'GBP' } });
		expect(rate).toHaveTextContent('1 USD = 0.75 GBP');
	});
	it('renders elements with their init values', () => {
		expect(screen.getByRole('heading')).toHaveTextContent('Sell USD');
		expect(screen.getByLabelText('select-from')).toHaveValue('USD');
		expect(screen.getByLabelText('select-to')).toHaveValue('EUR');
		expect(screen.getByLabelText('from')).toHaveValue(100);
		expect(screen.getByTestId('account-from')).toHaveTextContent('100 USD');
		expect(screen.getByLabelText('to')).toHaveValue(200);
		expect(screen.getByTestId('account-to')).toHaveTextContent('200 EUR');
	});
	it('switches the accounts on currency select', () => {
		expect(screen.getByTestId('account-from')).toHaveTextContent('100 USD');
		const selectFrom = screen.getByLabelText('select-from');
		fireEvent.change(selectFrom, { target: { value: 'EUR' } });
		expect(screen.getByTestId('account-from')).toHaveTextContent('200 EUR');

		expect(screen.getByTestId('account-to')).toHaveTextContent('200 EUR');
		const selectTo = screen.getByLabelText('select-to');
		fireEvent.change(selectTo, { target: { value: 'GBP' } });
		expect(screen.getByTestId('account-to')).toHaveTextContent('0 GBP');
	});
	test.todo('converts currency on input change');
	test.todo('trades currencies between the accounts');
	test.todo('switches [from] and [to] fields on arrow click');
});

describe('crash tests', () => {
	test.todo('validates the input');
	test.todo('shows "exceeds balance" when amount to trade is higher then availability');
	it('handles onfetch error', () => {
		globalRef.fetch = jest.fn(() => Promise.reject(new Error('err')));
		render(<App />);


	});
});
