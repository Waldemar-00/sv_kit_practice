export class Counter {
	#count = $state(117);

	get count() {
		console.log(this.#count);
		return this.#count;
	}
	set count(c) {
		this.#count = c;
		console.log(this.#count);
	}
	increment() {
		this.#count++;
	}
}
