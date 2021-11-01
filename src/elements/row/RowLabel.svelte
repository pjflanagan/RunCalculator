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
			margin-top: -30px;
			height: 60px;
			font-size: 35px;
			line-height: 60px;
		}
	}
</style>
