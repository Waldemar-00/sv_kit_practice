<script>
    import '../../styles.css'
    let total = 200
    let spent = $state(0)

    let left = {
        get rest() {
            return total - spent
        },
        set rest(s) {
            spent = s
        }
    }
</script>

<div class=wrapper>
    <h1>Derived without side effects</h1>
    <label title="spent line">
         spent <input type="range" max={total} bind:value={spent}>
    </label>

    <hr>
    <label title="total line">
         total <input type="range" max={total} bind:value={left.rest}>
    </label>
</div>

<style>
 input {
    vertical-align: middle;
 }
</style>