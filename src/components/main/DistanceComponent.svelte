<script lang="ts">
	import { Row, RowDivider, RowLabel, RowWidgetHolder } from '../../elements/index';
	import type { Distance } from '../../models';

	import DistanceEntryComponent from './distance/DistanceEntryComponent.svelte';
	import EventEntryComponent from './distance/EventEntryComponent.svelte';

	export let race: Distance.Event;
	export let distance: number;
	export let distanceMode: boolean;
	export let unit: Distance.Unit;

	$: labelDisplay = distanceMode ? 'DISTANCE' : 'EVENT';
</script>

<Row>
	<RowLabel onClick={() => (distanceMode = !distanceMode)}>
		{labelDisplay}
	</RowLabel>
	<RowDivider />
	<RowWidgetHolder>
		{#if distanceMode}
			<DistanceEntryComponent bind:unit bind:distance />
		{:else}
			<EventEntryComponent bind:race />
		{/if}
	</RowWidgetHolder>
</Row>
