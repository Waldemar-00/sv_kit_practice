<script>
   import '../../styles.css'
   // @ts-ignore
   class Coin {
      side = $state()
      // @ts-ignore
      history = $state([])
      constructor() {
         this.flip = this.flip.bind(this)
      }
      flip() {
         this.side = Math.random() < 0.5 ? 'HEAD' : 'TAIL'
         this.history.push(this.side)
      }

   }
const coin = new Coin()
</script>
<h1>Coin side: {coin.side}</h1>
<h2>Coin history: {coin.history}</h2>
<button onclick={coin.flip}>
   flip me
</button>