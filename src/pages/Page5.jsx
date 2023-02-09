import React, { useEffect, useState } from 'react';

/*
React Hooks

React hooks are functions which deal with state.
They can have their own state, and you can then use these functions to help with your app.

useState is used for setting state
useEffect listens to changes in state
useCallback/useMemo are used for performance optimization (and are state-dependent)

You can also create your own custom hooks!
*/

// This is just a dummy function. Imagine it's getting from the database!
const getUsers = () => [
	{ name: 'Fred', age: 22 },
	{ name: 'Bill', age: 33 },
	{ name: 'Julie', age: 25 },
];

// This is our custom users hook. It has its own state!
// When it is called, useEffect will retrieve users from the database and set it in our local state.
// The users are then returned so we can use them!
const useUsers = () => {
	const [users, setUsers] = useState([]); // Initially we have no users ([]), but we will add them later!

    // When this function (useUsers) is initially run, we fetch users from the db!
	useEffect(() => {
		const usersResp = getUsers();
		setUsers(usersResp);
	}, []);

    // Lastly our function returns the list of users, even when the users state changes!
	return users;
};

// This is our component:
const Page5 = () => {
	const users = useUsers(); // our custom hook returns a list of users!

	return (
		<div>
			<ul>
                {/* We iterate over each user and return its name and age! */}
				{users.map(user => (
                    // We have to add a unique "key" prop for every item in the list, so React knows if it changed.
					<li key={user.name}>
						<p>Name: {user.name}</p>
						<p>Age: {user.age}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Page5;
