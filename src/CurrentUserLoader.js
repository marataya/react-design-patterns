import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CurrentUserLoader = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const controller = new AbortController();
		(async () => {
			const response = await axios.get('/current-user', {signal: controller.signal});
			setUser(response.data);
			return () => {
				controller.abort();
			};
		})();
	}, []);

	return user ? (
		<>
		{React.Children.map(children, child => {
			if (React.isValidElement(child)) {
				return React.cloneElement(child, { user });
			}

			return child;
		})}
		</>
	) : <p>Loading...</p>
}