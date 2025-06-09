<script>
	import {page} from '$app/state';
    import {goto} from '$app/navigation'
    let {data} = $props()
     function gotoPosts() {
        goto(page.url.origin + '/' + 'posts')
    }
</script>
<h1>Post ID: {data.post.id} </h1>
<button onclick={gotoPosts}>Return</button>