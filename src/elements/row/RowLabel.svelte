<script lang="ts">
	export let onClick: () => void = null;
</script>

<div class="label-holder">
	<div class="label" on:click={onClick}>
		<slot />
	</div>
</div>

<style lang="scss">
	.label-holder {
		width: 20%;
		height: 100%;

		.label {
			text-align: center;
		}
	}
</style>
