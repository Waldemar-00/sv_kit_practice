<script>
    import '../../styles.css'
    import {createCounter} from '$lib/counter.svelte.js'
    import {reactiveNumber } from '$lib/simplecounter.svelte'
    import {Counter} from '$lib/classCounter.svelte'
    const counter = createCounter()
    const classCounter = new Counter()
</script>

<h1>{counter.value}</h1>

<button onclick={() => counter.value++}>increase value</button>
<button onclick={() => counter.value--}>decrease value</button>

<button onclick={() => reactiveNumber.increment()}>Reactive number ++</button>
<h2>{reactiveNumber.number}</h2>
<hr>

<h2>Counter from class: {classCounter.count}</h2>
<button onclick={() => classCounter.increment()}>Increment class counter++</button>