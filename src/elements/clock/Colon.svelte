<script lang="ts">
	import Panel from './Panel.svelte';
</script>

<Panel>
	<div class="colon-holder">
		<div class="colon">:</div>
	</div>
</Panel>

<style lang="scss">
	.colon-holder {
		height: 100%;
		width: 100%;

		.colon {
			position: relative;
			top: 50%;
			margin-top: -20px;
			height: 40px;
			line-height: 40px;
			font-size: 42px;
			color: #fffd;
		}
	}
</style>
