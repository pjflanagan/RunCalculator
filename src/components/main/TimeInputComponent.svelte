<script lang="ts">
	import {
		Row,
		RowDivider,
		RowLabel,
		RowWidgetHolder,
		Clock,
		Number,
		Colon
	} from '../../elements/index';
	import { Time } from '../../models';

	export let timeIn: number;
	export let paceMode: boolean;
	export let togglePaceMode: () => void;
	export let addTime: (seconds: number) => void;

	$: [h1, m10, m1, s10, s1] = Time.makeDisplayTime(timeIn);
	$: labelDisplay = paceMode ? 'PACE' : 'TIME';
</script>

<Row>
	<RowLabel onClick={togglePaceMode}>{labelDisplay}</RowLabel>
	<RowDivider />
	<RowWidgetHolder>
		<div class="arrows-holder">
			<!-- <tr class="arrows">
          <td on:click={() => addTime(3600)}><span class="glyphicon glyphicon-chevron-up" /></td>
          <td />
          <td on:click={() => addTime(600)}><span class="glyphicon glyphicon-chevron-up" /></td>
          <td on:click={() => addTime(60)}><span class="glyphicon glyphicon-chevron-up" /></td>
          <td />
          <td on:click={() => addTime(10)}><span class="glyphicon glyphicon-chevron-up" /></td>
          <td on:click={() => addTime(1)}><span class="glyphicon glyphicon-chevron-up" /></td>
        </tr> -->
		</div>
		<div class="clock-holder">
			<Clock>
				<Number num={h1} onClick={() => addTime(3600)} />
				<Colon />
				<Number num={m10} onClick={() => addTime(600)} />
				<Number num={m1} onClick={() => addTime(60)} />
				<Colon />
				<Number num={s10} onClick={() => addTime(10)} />
				<Number num={s1} onClick={() => addTime(1)} />
			</Clock>
		</div>
		<div class="arrows-holder">
			<!-- <tr class="arrows" id="bottom-arrows">
          <td on:click={() => addTime(-3600)}><span class="glyphicon glyphicon-chevron-down" /></td>
          <td />
          <td on:click={() => addTime(-600)}><span class="glyphicon glyphicon-chevron-down" /></td>
          <td on:click={() => addTime(-60)}><span class="glyphicon glyphicon-chevron-down" /></td>
          <td />
          <td on:click={() => addTime(-10)}><span class="glyphicon glyphicon-chevron-down" /></td>
          <td on:click={() => addTime(-1)}><span class="glyphicon glyphicon-chevron-down" /></td>
        </tr> -->
		</div>
	</RowWidgetHolder>
</Row>

<style lang="scss">
	.arrows-holder {
		height: 20px;
	}
	.clock-holder {
		height: calc(100% - 40px);
	}
</style>
