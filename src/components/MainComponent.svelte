<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';

	import { Distance, Time, Error, URL } from '../models';
	import { Container } from '../elements';

	import HeaderComponent from './main/HeaderComponent.svelte';
	import DistanceComponent from './main/DistanceComponent.svelte';
	import TimeInputComponent from './main/TimeInputComponent.svelte';
	import SplitComponent from './main/SplitComponent.svelte';
	import TimeOutputComponent from './main/TimeOutputComponent.svelte';

	const url = new URL();

	// if (process.browser) {
	//   const myCookieValue = getCookie("myCookie");
	// }

	// distance
	let race: Distance.Event = Distance.getEvent(Distance.EventName.K5);
	let distanceMode: boolean = false;
	let distance: number = 0;
	let unit: Distance.Unit = 'm';

	// time
	let timeIn: number = 0;
	let paceMode: boolean = false;

	// split
	let split: Distance.Event = Distance.getEvent(Distance.EventName.MILE);

	onMount(() => {
		url.loadParams(window.location.search);

		race = url.getParamOrDefault('race', race);
		distanceMode = url.getParamOrDefault('distanceMode', distanceMode);
		distance = url.getParamOrDefault('distance', distance);
		unit = url.getParamOrDefault('unit', unit);
		timeIn = url.getParamOrDefault('timeIn', timeIn);
		paceMode = url.getParamOrDefault('paceMode', paceMode);
		split = url.getParamOrDefault('split', split);
	});

	afterUpdate(() => {
		const urlParamString = url.setParams({
			split: split.id,
			timeIn,
			paceMode,
			race: race.id,
			distanceMode,
			distance,
			unit
		});
		window.history.replaceState(null, null, urlParamString);
	});

	$: [timeOut, timeOutError] = Time.calcTime({
		split,
		timeIn,
		paceMode,
		race,
		distanceMode,
		distance,
		unit
	});
</script>

<!-- HTML -->
<Container>
	<HeaderComponent />
	<DistanceComponent bind:race bind:distanceMode bind:unit bind:distance />
	<TimeInputComponent bind:timeIn bind:paceMode />
	<SplitComponent bind:split />
	<TimeOutputComponent {timeOut} inputError={Error.hasError(timeOutError)} />
	<!-- {/* <AdComponent /> */} -->
</Container>
