<script>
// @ts-nocheck

    import Input from './Input.svelte'
    let value = $state('SVELTE')
</script>
<h1>{value}</h1>
<Input bind:value={value}/>