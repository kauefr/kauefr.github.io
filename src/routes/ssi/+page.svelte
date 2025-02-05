<script lang="ts">
    import {gameState} from "./GameState.svelte"
    let currentImproving = $state("points");
    const ticksPerSecond = 60;
    $effect(() => {
        const timer = setInterval(()=>{
            const now = Date.now();
            let timeElapsed = now - gameState.lastUpdated;
            if (currentImproving == "points") {
                gameState.points += gameState.speed/((timeElapsed)/ticksPerSecond);
            } else {
                gameState.speed += gameState.speed * 0.1/((timeElapsed)/ticksPerSecond);
            }
            gameState.lastUpdated = now;
        }, 1000/ticksPerSecond);
        return () => {
            clearInterval(timer);
        }
    });

</script>
<p>Your points: {gameState.points.toFixed(2)}</p>
<p>Your speed: {gameState.speed.toFixed(2)}</p>
<input type="checkbox" onchange={() => {currentImproving = (currentImproving == "points" ? "speed" : "points")}}>
<style>
</style>
