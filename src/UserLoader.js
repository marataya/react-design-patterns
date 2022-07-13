import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UserLoader = ({ userId, children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		setUser(null);
		const controller = new AbortController();
		(async () => {
			const response = await axios.get(`/users/${userId}`, {signal: controller.signal});
			setUser(response.data);
			return () => {
				controller.abort();
			};
		})();
	}, [userId]);

	return (
		<>
		{React.Children.map(children, child => {
			if (React.isValidElement(child)) {
				return React.cloneElement(child, { user });
			}

			return child;
		})}
		</>
	)
}