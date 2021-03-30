import React from 'react';

interface AppProps {
	message: string;
}

const App = ({ message }: {message: string}) => {
	return <div>React Starter Kit in TypeScript<br />{ message }</div>;
};

export default App;
