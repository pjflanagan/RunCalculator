<script lang="ts">
	import classNames from 'classnames';
	import Panel from './Panel.svelte';

	export let unit: string;
	export let large: boolean = false;

	const className = classNames('unit', { large });
</script>

<Panel type="unit">
	<div class="unit-holder">
		<div class={className}>{unit}</div>
	</div>
</Panel>

<style lang="scss">
	@import '../../main.scss';

	.unit-holder {
		height: 100%;
		width: 100%;

		.unit {
			position: relative;
			top: 50%;
			transform: translateY(8%);
			font-size: 12px;
			font-family: $bebasFontFamily;
			color: #fff8;

			&.large {
				font-size: 18px;
				transform: translateY(16%);
			}
		}
	}
</style>
