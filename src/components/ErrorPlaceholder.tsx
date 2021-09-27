import React from 'react';
import {
	Box,
	Heading,
	Text
} from '@chakra-ui/react';

const ErrorPlaceholder = (): JSX.Element => (
	<Box align='center' padding={8} data-testid='error-placeholder'>
		<Heading as='h1' size='lg' marginBottom={1} color='red.500'>:(</Heading>
		<Text>An error occured while loading currency rates.</Text>
		<Text>Trying one more time in several seconds...</Text>
	</Box>
);

export default ErrorPlaceholder;
