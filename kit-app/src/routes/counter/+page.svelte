<script>
    import '../../styles.css'
    import {createCounter} from '$lib/counter.svelte.js'
    const counter = createCounter()
</script>

<h1>{counter.value}</h1>

<button onclick={() => counter.value++}>increase value</button>
<button onclick={() => counter.value--}>decrease value</button>