import React from 'react';
import { Select } from '@chakra-ui/react';
import { TCurrencySelect } from '../types';

const CurrencySelect = ({ type, value, currencies, onChange }: TCurrencySelect): JSX.Element => (
	<Select
		name={`select-${type}`}
		aria-label={`select-${type}`}
		value={value}
		onChange={onChange}
		width='auto'
		variant='flushed'
		size='lg'
		focusBorderColor='cyan.400'
		_hover={{ cursor: 'pointer' }}
	>
		{currencies.map(item => <option key={item} value={item}>{item}</option>)}
	</Select>
);

export default CurrencySelect;
