import React, { useState } from 'react';

/*
event listeners are done in camelcase and can be done inline.
*/
const Page4 = () => {
    // This state will be used for our form input values
	const [value, setValue] = useState('');

    // This fn is passed to the form, which runs this when it's submitted.
	const handleSubmit = e => {
		e.preventDefault();
		console.log('You submitted!');
	};

	return (
		<div>
			<h3>Your text: {value}</h3>

            {/* onSubmit event listener calls our fn when we submit */}
			<form onSubmit={handleSubmit}>

                {/* onChange event listener */}
				<input type="text" onChange={e => setValue(e.target.value)} />

                {/* submit btn triggers the form's onSubmit */}
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Page4;
