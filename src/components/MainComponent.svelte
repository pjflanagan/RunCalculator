<script lang="ts">
	import { Distance, Time } from '../models';

	import HeaderComponent from './main/HeaderComponent.svelte';
	import DistanceComponent from './main/DistanceComponent.svelte';
	import TimeInputComponent from './main/TimeInputComponent.svelte';
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
	let paceMode = false;

	// split
	let split = Distance.getEvent('MILE');

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
		<TimeInputComponent {timeIn} {paceMode} togglePaceMode={() => (paceMode = !paceMode)} />
		<!-- <SplitComponent
      splitName={splitName}
    /> -->
		<TimeOutputComponent {timeOut} />
		<!-- {/* <AdComponent /> */} -->
	</div>
</main>

<style lang="scss">
	.app {
		width: 100%;
		height: 100%;
		.container {
			margin: 0 auto;
			height: 100%;
			width: 80%;
		}
	}
</style>
