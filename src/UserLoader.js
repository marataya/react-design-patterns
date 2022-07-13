import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UserLoader = ({ userId, children }) => {
	const [isLoading, setLoading] = useState(false);
	const [user, setUser] = useState(null);

	useEffect(() => {
		setLoading(true);

		const controller = new AbortController();
		(async () => {
			const response = await axios.get(`/users/${userId}`, { signal: controller.signal });
			setUser(response.data);
			setLoading(false);
		})();
		return () => {
			controller.abort();
		};
	}, [userId]);

	return (
		isLoading ?
			<p> Loading...</p > : (
			<>
				{React.Children.map(children, child => {
					if (React.isValidElement(child)) {
						return React.cloneElement(child, { user });
					}

					return child;
				})}
			</>)

	)
}