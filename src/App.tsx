import React from 'react';
import Counter from './Counter';

interface AppProps {
	message?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
	return (
		<div>React Starter Kit in TypeScript<br />
			{ message }
			<Counter />
		</div>
	);
};

App.defaultProps = {
	message: 'Hello DefauleProps',
}

export default App;
