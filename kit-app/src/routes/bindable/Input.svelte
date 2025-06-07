<script>
    import '../../styles.css'
    let {value = $bindable()} = $props()
    let upper = $derived(value.toUpperCase())
    // let uppercase = {
    //     get value() {
    //         return value.toUpperCase()
    //     },
    //     set value(v) {
    //         value = v.toUpperCase()
    //     }
    // }
</script>

<input type="text" placeholder="SVELTE" bind:value={value}>
<h2>{upper}</h2>