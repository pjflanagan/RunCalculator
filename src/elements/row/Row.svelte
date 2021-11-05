<script lang="ts">
	export let height = 20;
</script>

<div class="row" style={`height: ${height}%`}>
	<slot />
</div>

<style lang="scss">
	.row {
		width: 100%;
		display: flex;
		margin: 0;
	}
</style>
