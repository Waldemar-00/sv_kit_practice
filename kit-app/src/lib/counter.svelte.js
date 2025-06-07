export function createCounter(initial = 0) {
	let value = $state(initial);
	return {
		get value() {
			if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
				const cache = localStorage.getItem('count');
				if (cache) value = JSON.parse(cache);
			}
			return value;
		},
		set value(v) {
			value = v;
			if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
				localStorage.setItem('count', JSON.stringify(value));
			}
		}
	};
}
