import { useState } from 'react';

const DemoGuy = () => {
	const [color, setColor] = useState('pink');
	const [name, setName] = useState('Hayato');

	const changeColor = () => {
		if (color === 'pink') {
			setColor('purple');
		} else {
			setColor('pink');
		}
	};

	return (
		<div style={{ backgroundColor: color }}>
			<button onClick={changeColor}>Toggle Color</button>

			<h1>{name} smells!</h1>

			{color === 'pink' && (
				<input
					type="text"
					onChange={e => {
						setName(e.target.value);
					}}
                    value={name}
				/>
			)}
		</div>
	);
};

export default DemoGuy;
