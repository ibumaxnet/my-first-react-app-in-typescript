import React from 'react';
// import Counter from './Counter';
import CounterWithReducer from './CounterWithReducer';

interface AppProps {
	message?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
	return (
		<div>React Starter Kit in TypeScript<br />
			{ message }
			<CounterWithReducer />
		</div>
	);
};

App.defaultProps = {
	message: 'Hello DefauleProps',
}

export default App;
