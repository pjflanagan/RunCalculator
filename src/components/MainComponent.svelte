<script lang="ts">
	import { Distance, Time } from '../models';
	import { Container } from '../elements';

	import HeaderComponent from './main/HeaderComponent.svelte';
	import DistanceComponent from './main/DistanceComponent.svelte';
	import TimeInputComponent from './main/TimeInputComponent.svelte';
	import SplitComponent from './main/SplitComponent.svelte';
	import TimeOutputComponent from './main/TimeOutputComponent.svelte';

	// if (process.browser) {
	//   const myCookieValue = getCookie("myCookie");
	// }

	// distance
	let race: Distance.Event = Distance.getEvent('5K');
	let distanceMode: boolean = false;
	let distance: number = 0;
	let unit: Distance.Unit = 'm';

	// time
	let timeIn = 0;
	let paceMode = false;

	// split
	let split = Distance.getEvent('MILE');

	$: timeOut = Time.calcTime({
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
	<TimeOutputComponent {timeOut} />
	<!-- {/* <AdComponent /> */} -->
</Container>
