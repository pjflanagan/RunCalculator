<script lang="ts">
	import { Time } from '../../models';

	export let timeOut: number;

	$: [h1, m10, m1, s10, s1, d] = Time.makeDisplayTime(timeOut);
</script>

<div id="result-clock" class="clock light">
	<table class="clock">
		<tr class="clock">
			{#if h1 !== 0}
				<td id="h1">{h1}</td>
				<td id="colon">{':'}</td>
			{/if}
			<td id="m10">{m10}</td>
			<td id="m1">{m1}</td>
			<td id="colon">{':'}</td>
			<td id="s10">{s10}</td>
			<td id="s1">{s1}</td>
			<td id="dec">{d}</td>
		</tr>
	</table>
</div>
