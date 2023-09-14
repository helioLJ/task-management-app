import { redirect } from '@sveltejs/kit';

// @ts-nocheck
export const actions = {
	signin: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email')
		const password = data.get('password')

		const response = await fetch('http://localhost:3000/auth/signin', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		});

		if (response.ok) {
			const responseData = await response.json();
			const accessToken = responseData.access_token;
			cookies.set('jwt', accessToken)
		  } else {
			// Handle sign-in error
			const errorData = await response.json();
			console.error('Sign-in failed:', errorData.message);
		  }
	},

	signup: async ({ request, cookies }) => {
		const data = await request.formData();
		const name = data.get('name')
		const email = data.get('email')
		const password = data.get('password')

		const response = await fetch('http://localhost:3000/auth/signup', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name, email, password }),
		});

		if (response.ok) {
			const responseData = await response.json();
			const accessToken = responseData.access_token;
			cookies.set('jwt', accessToken)
			throw redirect(307, `/`);
		  } else {
			// Handle sign-in error
			const errorData = await response.json();
			console.error('Sign-up failed:', errorData.message);
		  }
	},
};