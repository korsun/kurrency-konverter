import React from 'react';
import { BASE } from './constants';

export type TCurrency = 'USD' | 'EUR' | 'GBP'

export type TType = 'from' | 'to'

export type TSymbol = '$' | '€' | '£'

export type TResponse = {
	base: typeof BASE,
	rates: {
		EUR: number,
		GBP: number
	}
}

export type TRates = Record<TCurrency, number>

export type TAccounts = Record<TCurrency, string>

export type TCurrencyInput = {
	type: TType,
	value: string,
	isInvalid: boolean,
	isReversed: boolean,
	onChange: (_: string, value: number) => void
}

export type TCurrencySelect = {
	type: TType,
	value: string,
	currencies: TCurrency[],
	onChange: (e: React.SyntheticEvent) => void
}

export type TBlock = {
	type: TType,
	account: string,
	symbol: TSymbol,
	handleChange: (type: TType) => (strValue: string) => void,
	handleSelect: (type: TType) => (e: React.SyntheticEvent) => void,
	isReversed: boolean,
	accountsKeys: TCurrency[],
	currency: TCurrency,
	inputVal: string,
	exceeds: boolean
}
