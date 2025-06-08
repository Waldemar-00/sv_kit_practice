<script>
    import '../../../styles.css'
	import { goto } from '$app/navigation';
    import {page} from '$app/state'
    let postID = Number(page.params.id)
    let post = $state()
    // @ts-ignore
    async function getPost(id) {
        if (postID > 0 && postID < 100) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const p = await response.json()
            post = p
        } else post = 'The number of post must be between 1 and 99'
    }
    $effect(() => {
        getPost(postID)
    })
    function gotoPosts() {
        goto(page.url.origin + '/' + 'posts')
    }
</script>

<h1>POST VIA ID: {post?.id ? post.id : post}</h1>
<button onclick={gotoPosts}>Return</button>
