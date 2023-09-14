export async function load({ cookies }) {
	const jwt = cookies.get('jwt');
	let user;

	if (jwt) {
		const response = await fetch('http://localhost:3000/users/me', {
			method: 'GET',
			headers: {
				'Authorization': 'Bearer ' + jwt,
			},
		});
		
		user = await response.json();
	}

	return {
		jwt,
		user
	};
}

export const actions = {
	getme: async ({ }) => {
		
	},
};