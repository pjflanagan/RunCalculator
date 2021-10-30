<script lang="ts">
	import { Row, RowDivider, RowLabel, RowWidgetHolder } from '../../elements/index';
	import type { Distance } from '../../models';

	import DistanceEntryComponent from './distance/DistanceEntryComponent.svelte';
	import EventEntryComponent from './distance/EventEntryComponent.svelte';

	export let race: Distance.Event;
	export let distance: number;
	export let distanceMode: boolean;
	export let unit: Distance.Unit;

	export let toggleDistanceMode: () => void;
	export let toggleUnit: () => void;
	export let setRace: (event: Distance.Event) => void;

	$: labelDisplay = distanceMode ? 'DISTANCE' : 'EVENT';
</script>

<Row>
	<RowLabel onClick={toggleDistanceMode}>
		{labelDisplay}
	</RowLabel>
	<RowDivider />
	<RowWidgetHolder>
		{#if distanceMode}
			<DistanceEntryComponent {distance} {unit} {toggleUnit} />
		{:else}
			<EventEntryComponent {setRace} {race} />
		{/if}
	</RowWidgetHolder>
</Row>
