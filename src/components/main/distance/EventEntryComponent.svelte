<script lang="ts">
	import { Distance } from '../../../models';

	export let race: Distance.Event;

	$: [e1, e2, e3, e4, e5] = Distance.makeDisplayEvents(race);

	const setRaceName = (event: Distance.Event) => {
		race = event;
	};
</script>

<table>
	<tr>
		<td class="end hover" on:click={() => setRaceName(e1)}>{e1.name}</td>
		<td class="mid hover" on:click={() => setRaceName(e2)}>{e2.name}</td>
		<td class="selected-split">{e3.name}</td>
		<td class="mid hover" on:click={() => setRaceName(e4)}>{e4.name}</td>
		<td class="end hover" on:click={() => setRaceName(e5)}>{e5.name}</td>
	</tr>
</table>
