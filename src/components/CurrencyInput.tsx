import React from 'react';
import {
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper
} from '@chakra-ui/react';
import { TCurrencyInput, TType } from '../types';

const format = (type: TType, value: string) => {
	if (+value === 0 || value.startsWith('+') || value.startsWith('-')) {
		return value;
	}

	return (type === 'from' ? `-${value}` : `+${value}`);
};

const CurrencyInput = ({ type, value, max, onChange }: TCurrencyInput): JSX.Element => (
	<NumberInput
		aria-label={type}
		value={format(type, value)}
		precision={2}
		clampValueOnBlur={false}
		variant='flushed'
		size='lg'
		focusBorderColor='cyan.400'
		onChange={onChange}
	>
		<NumberInputField />
		<NumberInputStepper>
			<NumberIncrementStepper border='none'/>
			<NumberDecrementStepper border='none'/>
		</NumberInputStepper>
	</NumberInput>
);

export default CurrencyInput;
