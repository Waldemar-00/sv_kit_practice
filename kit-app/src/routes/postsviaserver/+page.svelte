<script>
    import '../../styles.css'
	import { goto } from '$app/navigation';
    import {page} from '$app/state'
    let value = $state()
    function getPost() {
        goto(page.url.href + '/' + value)
    }
</script>
<h1>Posts via server</h1>

<input type=text placeholder="Enter post ID" bind:value onchange={getPost}>
