<script>
    import '../../styles.css'
    class Temperature {
        #celsius = 0
        #fahrenheit = 0
        get celsius(){return this.#celsius}
        set celsius(c){
            this.#celsius = c
            this.#fahrenheit = c * 9/5 + 32
        }
        get fahrenheit() {
            return this.#fahrenheit
        }
        set fahrenheit(f) {
            this.#fahrenheit = f
            this.#celsius = (f - 32) * 5/9
        }
    }
    const temperature = new Temperature()
</script>
<div class="wrapper">
    Celsius: <input type="number" bind:value={temperature.celsius}>
    <hr>
    Fahrenheit: <input type="number" bind:value={temperature.fahrenheit}>
</div>