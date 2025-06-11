export function load({ setHeaders }) {
	console.log('I am here!!!');
	setHeaders({
		'content-type': 'text/plain'
	});
}
