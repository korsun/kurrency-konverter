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
		expect(rate).toHaveTextContent('$1 = €0.85');
		const select = screen.getByLabelText('select-to');

		fireEvent.change(select, { target: { value: 'GBP' } });
		expect(rate).toHaveTextContent('$1 = £0.75');
	});

	it('renders elements with their init values', () => {
		expect(screen.getByRole('heading')).toHaveTextContent('Sell USD');
		expect(screen.getByLabelText('select-from')).toHaveValue('USD');
		expect(screen.getByLabelText('select-to')).toHaveValue('EUR');
		expect(screen.getByLabelText('from')).toHaveValue('-1');
		expect(screen.getByTestId('account-from')).toHaveTextContent('Balance: $100');
		expect(screen.getByLabelText('to')).toHaveValue('+0.85');
		expect(screen.getByTestId('account-to')).toHaveTextContent('Balance: €200');
	});

	it('switches the accounts on currency select', () => {
		expect(screen.getByTestId('account-from')).toHaveTextContent('Balance: $100');
		const selectFrom = screen.getByLabelText('select-from');

		fireEvent.change(selectFrom, { target: { value: 'EUR' } });
		expect(screen.getByTestId('account-from')).toHaveTextContent('Balance: €200');

		expect(screen.getByTestId('account-to')).toHaveTextContent('Balance: $100');
		const selectTo = screen.getByLabelText('select-to');

		fireEvent.change(selectTo, { target: { value: 'GBP' } });
		expect(screen.getByTestId('account-to')).toHaveTextContent('Balance: £0');
	});

	it('converts currency on input change', () => {
		const inputFrom = screen.getByLabelText('from');
		const inputTo = screen.getByLabelText('to');
		const selectFrom = screen.getByLabelText('select-from');
		const selectTo = screen.getByLabelText('select-to');

		fireEvent.change(inputFrom, { target: { value: '10' } });

		expect(inputFrom).toHaveValue('-10');
		expect(inputTo).toHaveValue('+8.50');

		fireEvent.change(inputTo, { target: { value: '10' } });

		expect(inputFrom).toHaveValue('-11.76');
		expect(inputTo).toHaveValue('+10');

		fireEvent.change(selectTo, { target: { value: 'GBP' } });
		expect(inputFrom).toHaveValue('-11.76');
		expect(inputTo).toHaveValue('+8.82');

		fireEvent.change(selectFrom, { target: { value: 'EUR' } });
		expect(inputFrom).toHaveValue('-11.76');
		expect(inputTo).toHaveValue('+10.38');
	});

	it('if selected currency on change is the same that in another field, they switch', () => {
		const selectFrom = screen.getByLabelText('select-from');
		fireEvent.change(selectFrom, { target: { value: 'EUR' } });
		expect(screen.getByLabelText('select-to')).toHaveValue('USD');
	});

	it('switches buy/sell direction on arrow click and correctly trades between the accounts', () => {
		const reverseButton = screen.getByLabelText('reverse');
		const buyButton = screen.getByLabelText('buy/sell');

		expect(reverseButton).toHaveTextContent('⬇️');
		expect(buyButton).toHaveTextContent('Sell USD for EUR');
		expect(screen.getByTestId('account-from')).toHaveTextContent('Balance: $100');

		fireEvent.click(buyButton);
		expect(screen.getByTestId('account-from')).toHaveTextContent('Balance: $99');
		expect(screen.getByTestId('account-to')).toHaveTextContent('Balance: €200.85');
		
		fireEvent.click(reverseButton);

		expect(reverseButton).toHaveTextContent('⬆️');
		expect(buyButton).toHaveTextContent('Buy USD with EUR');

		fireEvent.click(buyButton);
		expect(screen.getByTestId('account-from')).toHaveTextContent('Balance: $100');
		expect(screen.getByTestId('account-to')).toHaveTextContent('Balance: €200');
	});
});

describe('crash tests', () => {
	test.todo('validates the input');
	test.todo('shows "exceeds balance" when amount to trade is higher then availability');
	it('handles onfetch error', () => {
		globalRef.fetch = jest.fn(() => Promise.reject(new Error('err')));
		render(<App />);


	});
});
