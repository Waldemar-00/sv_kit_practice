export const load = async ({ fetch }) => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
	const posts = await response.json();
	return {
		posts
	};
};
