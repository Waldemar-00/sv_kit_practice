export let reactiveNumber = $state({
	number: 100,
	increment() {
		this.number++;
	}
});
