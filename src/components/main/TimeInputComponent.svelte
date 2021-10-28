<script lang="ts">
	import { Row, RowDivider, RowLabel, RowWidgetHolder } from '../../elements/index';
	import { Time } from '../../models';

	export let timeIn: number;
	export let paceMode: boolean;
	export let togglePaceMode: () => void;

	$: [h1, m10, m1, s10, s1, d] = Time.makeDisplayTime(timeIn);
	$: labelDisplay = paceMode ? 'PACE' : 'TIME';

	const addTime = (deltaSeconds: number) => {
		timeIn = timeIn + deltaSeconds;
	};
</script>

<Row>
	<RowLabel onClick={togglePaceMode}>{labelDisplay}</RowLabel>
	<RowDivider />
	<RowWidgetHolder>
		<table class="hover" id="time-table">
			<tr class="arrows">
				<td on:click={() => addTime(3600)}><span class="glyphicon glyphicon-chevron-up" /></td>
				<td />
				<td on:click={() => addTime(600)}><span class="glyphicon glyphicon-chevron-up" /></td>
				<td on:click={() => addTime(60)}><span class="glyphicon glyphicon-chevron-up" /></td>
				<td />
				<td on:click={() => addTime(10)}><span class="glyphicon glyphicon-chevron-up" /></td>
				<td on:click={() => addTime(1)}><span class="glyphicon glyphicon-chevron-up" /></td>
			</tr>
			<tr class="clock">
				<td on:click={() => addTime(3600)}>{h1}</td>
				<td>:</td>
				<td on:click={() => addTime(600)}>{m10}</td>
				<td on:click={() => addTime(60)}>{m1}</td>
				<td>:</td>
				<td on:click={() => addTime(10)}>{s10}</td>
				<td on:click={() => addTime(1)}>{s1}</td>
			</tr>
			<tr class="arrows" id="bottom-arrows">
				<td on:click={() => addTime(-3600)}><span class="glyphicon glyphicon-chevron-down" /></td>
				<td />
				<td on:click={() => addTime(-600)}><span class="glyphicon glyphicon-chevron-down" /></td>
				<td on:click={() => addTime(-60)}><span class="glyphicon glyphicon-chevron-down" /></td>
				<td />
				<td on:click={() => addTime(-10)}><span class="glyphicon glyphicon-chevron-down" /></td>
				<td on:click={() => addTime(-1)}><span class="glyphicon glyphicon-chevron-down" /></td>
			</tr>
		</table>
	</RowWidgetHolder>
</Row>
