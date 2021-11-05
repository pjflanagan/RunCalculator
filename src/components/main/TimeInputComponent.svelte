<script lang="ts">
	import Icon from 'svelte-awesome';
	import { chevronUp, chevronDown } from 'svelte-awesome/icons';
	import {
		Row,
		RowDivider,
		RowLabel,
		RowWidgetHolder,
		Clock,
		Number,
		Colon,
		Arrow,
		Unit
	} from '../../elements';
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
			<Arrow direction="UP" onClick={() => addTime(3600)} />
			<Arrow />
			<Arrow direction="UP" onClick={() => addTime(600)} />
			<Arrow direction="UP" onClick={() => addTime(60)} />
			<Arrow />
			<Arrow direction="UP" onClick={() => addTime(10)} />
			<Arrow direction="UP" onClick={() => addTime(1)} />
		</div>
		<div class="clock-holder">
			<Clock>
				<Number num={h1} onClick={() => addTime(3600)} />
				<Unit unit="h" />
				<Colon />
				<Number num={m10} onClick={() => addTime(600)} />
				<Number num={m1} onClick={() => addTime(60)} />
				<Unit unit="m" />
				<Colon />
				<Number num={s10} onClick={() => addTime(10)} />
				<Number num={s1} onClick={() => addTime(1)} />
				<Unit unit="s" />
			</Clock>
		</div>
		<div class="arrows-holder">
			<Arrow direction="DOWN" onClick={() => addTime(-3600)} />
			<Arrow />
			<Arrow direction="DOWN" onClick={() => addTime(-600)} />
			<Arrow direction="DOWN" onClick={() => addTime(-60)} />
			<Arrow />
			<Arrow direction="DOWN" onClick={() => addTime(-10)} />
			<Arrow direction="DOWN" onClick={() => addTime(-1)} />
		</div>
	</RowWidgetHolder>
</Row>

<style lang="scss">
	.arrows-holder {
		display: flex;
		height: 26px;
		line-height: 32px;
	}
	.clock-holder {
		height: calc(100% - 52px);
	}
</style>
