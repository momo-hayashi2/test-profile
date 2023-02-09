import React, { useEffect, useState } from 'react';

// Component Lifecycle with useEffect

/*

useEffect allows you listen to state changes, and run a function when it does.

Originally, React had separate "lifecycle" methods:

componentDidMount
The component was rendered to the DOM

componentDidUpdate
The component was updated

componentWillUnmount
The component will be removed from the DOM

useEffect covers all three.

*/

const Page3 = () => {
	const [counter, setCounter] = useState(0);

	const increment = () => setCounter(counter + 1);
	const decrement = () => setCounter(counter - 1);

    // This useEffect has an empty dependency array, so it only gets run at the beginning.
    useEffect(() => {
        alert("I am running just one time!");
    }, []); // <== We leave the dependency array empty, indicating this should only be run once (at the start)

    // Whenever counter changes, useEffect listens, and console logs the counter.
    useEffect(() => {
        console.log(counter);
    }, [counter]); // <== we pass counter here so useEffect listens for changes on counter.

	return (
		<div style={{ flexDirection: 'row' }}>
			<h1>Counter value: {counter}</h1>
			<button onClick={decrement}>decrement</button>
			<button onClick={increment}>increment</button>
		</div>
	);
};

export default Page3;
