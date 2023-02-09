import React, { useState } from 'react';

/*
    useState returns an array with two things:
    1. The actual piece of state
    2. A function which is used to set the state.
*/

// State
const Page2 = () => {
	// 0 is the initial value of our state
	// counter is the state
	// setCounter is a function which changes counter
	const [counter, setCounter] = useState(0);

	// Increases our counter by one
	const increment = () => setCounter(counter + 1);

	// Decreases our counter by one
	const decrement = () => setCounter(counter - 1);

	return (
		<div style={{ flexDirection: 'row' }}>
			{/* We can put our state directly into JSX: */}
			<h1>Counter value: {counter}</h1>

			{/* Use functions in onClick, onChange, etc. */}
			<button onClick={decrement}>decrement</button>

			<button onClick={increment}>increment</button>
		</div>
	);
};

export default Page2;
