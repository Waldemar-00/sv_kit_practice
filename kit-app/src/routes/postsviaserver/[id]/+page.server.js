// import { error } from '@sveltejs/kit';
export const load = async ({ url, fetch }) => {
	const id = Number(url.pathname.slice(-2));
	let post;
	if (id > 0 && id < 100) {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
		const p = await response.json();
		post = p;
	} else {
		post = 'The number of post must be between 1 and 99';
	}

	return {
		post
	};
};
