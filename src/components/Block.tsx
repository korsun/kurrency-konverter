import React from 'react';
import {
	Box,
	Flex
} from '@chakra-ui/react';
import CurrencyInput from './CurrencyInput';
import CurrencySelect from './CurrencySelect';
import { TBlock } from '../types';

const Block = ({
	type, 
	account, 
	symbol, 
	handleChange, 
	handleSelect, 
	isReversed, 
	accountsKeys,
	currency,
	inputVal,
	exceeds
}: TBlock): JSX.Element => (
	<Box>
		{type === 'from' && <Box
			data-testid={`account-${type}`}
			color={exceeds ? 'red.500' : 'gray.500'}
			alignSelf='center'
		>
			Balance: {symbol}{account}
		</Box>}
		<Flex>
			<CurrencySelect
				type={type}
				value={currency}
				currencies={accountsKeys}
				onChange={handleSelect(type)}
			/>
			<CurrencyInput
				type={type}
				value={inputVal}
				isInvalid={exceeds}
				isReversed={isReversed}
				onChange={handleChange(type)}
			/>
		</Flex>
		{type === 'to' && <Box
			data-testid={`account-${type}`}
			color={exceeds ? 'red.500' : 'gray.500'}
			alignSelf='center'
		>
			Balance: {symbol}{account}
		</Box>}
	</Box>
);

export default Block;
