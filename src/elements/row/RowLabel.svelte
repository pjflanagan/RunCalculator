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
			position: relative;
			text-align: center;
			top: 50%;
			transform: translateY(-50%);
			font-size: 32px;
			line-height: 60px;
		}
	}
</style>
