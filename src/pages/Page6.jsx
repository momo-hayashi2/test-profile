import React, { useState } from 'react';

/*
This page illustrates the differences between React and React Native.
Main diffs: 
- onPress / onClick
- Different names for elements
- Style is css, not inline
- onChange / onChangeText
*/
const Page6 = () => {
	const [value, setValue] = useState('World');

	const [color, setColor] = useState('pink');

	const handleClick = () => {
		if (color === 'pink') {
			setColor('cyan');
		} else {
			setColor('pink');
		}
	};

	return (
		<div style={{ backgroundColor: color }}>
			<button onClick={handleClick}>
				Toggle Color
			</button>

			<p>Hello, {value}!</p>

			<input
				value={value}
				onChange={e => setValue(e.target.value)}
				placeholder="Type your text here!"
			/>
		</div>
	);
};

export default Page6;
