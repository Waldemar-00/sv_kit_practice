<script>
    import '../../styles.css'
    import {createCounter} from '$lib/counter.svelte.js'
    import {reactiveNumber } from '$lib/simplecounter.svelte'
    const counter = createCounter()
</script>

<h1>{counter.value}</h1>

<button onclick={() => counter.value++}>increase value</button>
<button onclick={() => counter.value--}>decrease value</button>

<button onclick={() => reactiveNumber.increment()}>Reactive number ++</button>
<h2>{reactiveNumber.number}</h2>