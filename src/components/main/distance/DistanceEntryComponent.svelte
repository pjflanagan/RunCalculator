<script lang="ts">
	import type { Distance } from '../../../models';

	export let distance: number;
	export let unit: Distance.Unit;

	export let toggleUnit: () => void;
</script>

<div>
	<div class="input-holder">
		<input type="number" bind:value={distance} />
	</div>
	<div class="unit-holder">
		<div class="unit" on:click={toggleUnit}>{unit}</div>
	</div>
</div>
