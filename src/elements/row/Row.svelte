<script lang="ts">
	export let height = 20;
</script>

<div class="row" style={`height: calc(${height}% - 8px)`}>
	<slot />
</div>

<style lang="css">
	.row {
		width: 100%;
		display: flex;
		margin: 8px 0;
	}
</style>
