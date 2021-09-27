import React from 'react';
import {
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper
} from '@chakra-ui/react';
import { TCurrencyInput, TType } from '../types';

const format = (type: TType, value: string, isReversed: boolean) => {
	if (+value === 0 || value.startsWith('+') || value.startsWith('-')) {
		return value;
	}

	if (!isReversed) {
		return (type === 'from' ? `-${value}` : `+${value}`);
	}

	return (type === 'from' ? `+${value}` : `-${value}`);
};

const getColor = (type: TType, isReversed: boolean) => {
	if (!isReversed) {
		return (type === 'from' ? 'red.500' : 'green.500');
	}

	return (type === 'from' ? 'green.500' : 'red.500');
	
};

const CurrencyInput = ({ type, value, isInvalid, isReversed, onChange }: TCurrencyInput): JSX.Element => (
	<NumberInput
		aria-label={type}
		value={format(type, value, isReversed)}
		precision={2}
		clampValueOnBlur={false}
		variant='flushed'
		size='lg'
		focusBorderColor='cyan.400'
		errorBorderColor='red.500'
		isInvalid={isInvalid}
		onChange={onChange}
	>
		<NumberInputField color={getColor(type, isReversed)} />
		<NumberInputStepper >
			<NumberIncrementStepper border='none'/>
			<NumberDecrementStepper border='none'/>
		</NumberInputStepper>
	</NumberInput>
);

export default CurrencyInput;
