<script lang="ts">
	import type { Distance } from '../../../models';

	export let distance: number;
	export let unit: Distance.Unit;

	export let toggleUnit: () => void;

	$: displayUnit = unit === 'm' ? 'MILES' : 'KILOMETERS';
</script>

<div class="distance-entry-component">
	<div class="input-holder">
		<input type="number" bind:value={distance} />
	</div>
	<div class="unit-holder">
		<div class="unit" on:click={toggleUnit}>{displayUnit}</div>
	</div>
</div>

<style lang="scss">
	@import '../../../main.scss';

	$distanceEntryHeight: 42px;

	.distance-entry-component {
		position: relative;
		display: flex;
		top: 50%;
		transform: translateY(-50%);
		height: $distanceEntryHeight;

		.input-holder {
			width: 74%;

			input {
				height: 100%;
				width: 100%;
				text-align: right;
			}
		}

		.unit-holder {
			width: 26%;
			background: $black;
			color: #fff;
			text-align: center;
			line-height: $distanceEntryHeight;
			font-size: 22px;
		}
	}
</style>
