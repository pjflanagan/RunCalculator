<script lang="ts">
	import type { Distance } from '../../../models';

	export let distance: number;
	export let unit: Distance.Unit;

	// TODO: autofocus on input

	const toggleUnit = () => {
		unit =
			{
				m: 'k' as Distance.Unit,
				k: 'm' as Distance.Unit
			}[unit] || 'm';
	};

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
			padding: 0 12px;
			border-bottom: 4px solid #1c1c1c;

			input {
				height: 100%;
				width: 100%;
				text-align: right;
				padding: 0;
				margin: 0;
				border: 0;
				font-size: 32px;
				outline: none;

				&:focus {
					outline: none;
				}
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
