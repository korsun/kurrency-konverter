import React from 'react';
import { BASE } from './constants';

export type TCurrency = 'USD' | 'EUR' | 'GBP'

export type TType = 'from' | 'to'

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
	max: number,
	onChange: (_: string, value: number) => void
}

export type TCurrencySelect = {
	type: TType,
	value: string,
	currencies: TCurrency[],
	onChange: (e: React.SyntheticEvent) => void
}
