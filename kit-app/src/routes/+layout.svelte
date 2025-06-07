<script>
	import { goto } from '$app/navigation';

    let {children} = $props()
    let selected = $state('')
    const anchors = [{id: crypto.randomUUID(), title:''}, {id: crypto.randomUUID(), title:'bindable'}, {id: crypto.randomUUID(), title:'coin'}, {id: crypto.randomUUID(), title:'counter'}, {id: crypto.randomUUID(), title:'derived'}, {id: crypto.randomUUID(), title:'effect'}, {id: crypto.randomUUID(), title:'temperature'}]
    $effect(() => {
        goto(selected)
    })
    const sel = {
        get sel() {
            return selected ? selected : '/'
        },
        set sel(s) {
            selected = s
        }
    }
</script>
<select bind:value={sel.sel}>
{#each anchors as anchor (anchor.id)}
    <option value={`/${anchor.title}`} selected={anchor.title ? false : true}>{anchor.title ? anchor.title.toLocaleUpperCase() : 'HOME'}</option>
{/each}
</select>
{@render children()}