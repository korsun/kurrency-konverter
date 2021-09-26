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
	if (+value === 0) {
		return value;
	}

	return (type === 'from' ? `-${value}` : `+${value}`);
};

const CurrencyInput = ({ type, value, max, onChange }: TCurrencyInput): JSX.Element => (
	<NumberInput
		aria-label={type}
		value={format(type, value)}
		min={0}
		max={max}
		precision={2}
		clampValueOnBlur={false}
		keepWithinRange={false}
		onChange={onChange}
	>
		<NumberInputField />
		<NumberInputStepper>
			<NumberIncrementStepper />
			<NumberDecrementStepper />
		</NumberInputStepper>
	</NumberInput>
);

export default CurrencyInput;
