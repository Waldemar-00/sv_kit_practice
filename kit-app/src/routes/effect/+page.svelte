<script>
    import '../../styles.css'
    let count = $state(0)
    let ms = $state(200)
    $effect(() => {
        const interval = setInterval(() => count++, ms)
        return () => clearInterval(interval)
    })
</script>
<div class="wrapper">
    <button onclick={() => ms /= 2} class=border>
        /2
    </button>
    <h2>{count}</h2>
    <button onclick={() => ms *= 2} class=border>
       *2
    </button>
</div>
<style>
    .border{
        border: 2px solid green;
        padding: 1.5rem;
        border-radius: 50%;
    }
    h2 {
        color: orangered
    }
</style>