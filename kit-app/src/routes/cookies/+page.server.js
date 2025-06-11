export function load({ cookies }) {
	cookies.set('Set-Cookie', 'in headers', {
		path: '/',
		httpOnly: true, //default
		secure: true, //default
		sameSite: 'lax' //default
	});

	return {
		message: cookies.get('Set-Cookie') ? 'Cookies have been set' : 'Cookies have NOT been set'
	};
}
