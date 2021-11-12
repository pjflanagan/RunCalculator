<script lang="ts">
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

	const MAX_TIME_IN = 9 * 60 * 60 + 59 * 60 + 59;

	const addTime = (deltaSeconds: number) => {
		let newTime = timeIn + deltaSeconds;
		if (newTime > MAX_TIME_IN) {
			return;
		} else if (newTime < 0) {
			return;
		}
		timeIn = newTime;
	};

	$: [h1, m10, m1, s10, s1] = Time.makeDisplayTime(timeIn);
	$: labelDisplay = paceMode ? 'PACE' : 'TIME';
</script>

<Row>
	<RowLabel onClick={() => (paceMode = !paceMode)}>{labelDisplay}</RowLabel>
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
				<Number num={h1} {addTime} deltaSeconds={3600} />
				<Unit unit="h" />
				<Colon />
				<Number num={m10} {addTime} deltaSeconds={600} />
				<Number num={m1} {addTime} deltaSeconds={60} />
				<Unit unit="m" />
				<Colon />
				<Number num={s10} {addTime} deltaSeconds={10} />
				<Number num={s1} {addTime} deltaSeconds={1} />
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
