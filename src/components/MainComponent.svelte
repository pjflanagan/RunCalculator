<script lang="ts">
	import { Distance, Time } from '../models';

	import HeaderComponent from './main/HeaderComponent.svelte';
	import DistanceComponent from './main/DistanceComponent.svelte';
	import TimeOutputComponent from './main/TimeOutputComponent.svelte';

	// distance
	type distanceDataType = {
		race: Distance.Event;
		distanceMode: boolean;
		distance: number;
		unit: Distance.Unit;
	};
	let distanceData: distanceDataType = {
		race: Distance.getEvent('5K'),
		distanceMode: false,
		distance: 0,
		unit: 'm'
	};

	// time
	let timeIn = 0;

	// split
	let split = Distance.getEvent('MILE');
	let paceMode = false;

	const toggleUnit = () => {
		distanceData.unit =
			{
				m: 'k' as Distance.Unit,
				k: 'm' as Distance.Unit
			}[distanceData.unit] || 'm';
	};

	const timeOut = Time.calcTime({
		split,
		timeIn,
		paceMode,
		...distanceData
	});
</script>

<!-- HTML -->
<main class="app">
	<div class="container">
		<HeaderComponent />
		<DistanceComponent
			{...distanceData}
			toggleDistanceMode={() => (distanceData.distanceMode = !distanceData.distanceMode)}
			{toggleUnit}
		/>
		<!-- <TimeInputComponent
      timeIn={timeIn}
      paceMode={paceMode}
      togglePaceMode={paceMode = !paceMode}
    />
    <SplitComponent
      splitName={splitName}
    /> -->
		<TimeOutputComponent {timeOut} />
		<!-- {/* <AdComponent /> */} -->
	</div>
</main>
