<script lang="ts">
	import { Distance, Time } from '../models';
	import { Container } from '../elements';

	import HeaderComponent from './main/HeaderComponent.svelte';
	import DistanceComponent from './main/DistanceComponent.svelte';
	import TimeInputComponent from './main/TimeInputComponent.svelte';
	import SplitComponent from './main/SplitComponent.svelte';
	import TimeOutputComponent from './main/TimeOutputComponent.svelte';

	const MAX_TIME_IN = 9 * 60 * 60 + 59 * 60 + 59;

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

	const setRace = (event: Distance.Event) => {
		distanceData.race = event;
	};

	const toggleUnit = () => {
		distanceData.unit =
			{
				m: 'k' as Distance.Unit,
				k: 'm' as Distance.Unit
			}[distanceData.unit] || 'm';
	};

	// time
	let timeIn = 0;
	let paceMode = false;

	const addTime = (deltaSeconds: number) => {
		let newTime = timeIn + deltaSeconds;
		if (newTime > MAX_TIME_IN) {
			return;
		} else if (newTime < 0) {
			return;
		}
		timeIn = newTime;
	};

	// split
	let split = Distance.getEvent('MILE');

	const selectSplit = (name: string) => {
		split = Distance.getSplit(name as Distance.EventName);
	};

	$: timeOut = Time.calcTime({
		split,
		timeIn,
		paceMode,
		...distanceData
	});
</script>

<!-- HTML -->
<Container>
	<HeaderComponent />
	<DistanceComponent
		{...distanceData}
		toggleDistanceMode={() => (distanceData.distanceMode = !distanceData.distanceMode)}
		{toggleUnit}
		{setRace}
	/>
	<TimeInputComponent {addTime} {timeIn} {paceMode} togglePaceMode={() => (paceMode = !paceMode)} />
	<SplitComponent {split} {selectSplit} />
	<TimeOutputComponent {timeOut} />
	<!-- {/* <AdComponent /> */} -->
</Container>
