import { TCurrency, TSymbol } from './types';

export const API_KEY = 'df6831b373d143a6ba70c3b88c270bad';
export const BASE = 'USD'; // USD only in free plan
export const SYMBOLS = {
	USD: '$',
	EUR: '€',
	GBP: '£'
} as Record<TCurrency, TSymbol>;
