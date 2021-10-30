<script lang="ts">
	import type { Distance } from '../../../models';

	export let distance: number;
	export let unit: Distance.Unit;

	export let toggleUnit: () => void;

	$: displayUnit = unit === 'm' ? 'MILES' : 'KILOMETERS';
</script>

<div>
	<div class="input-holder">
		<input type="number" bind:value={distance} />
	</div>
	<div class="unit-holder">
		<div class="unit" on:click={toggleUnit}>{displayUnit}</div>
	</div>
</div>
