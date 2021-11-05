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
			<div class="arrow-holder arrow" on:click={() => addTime(3600)}><Icon data={chevronUp} /></div>
			<div class="arrow-holder" />
			<div class="arrow-holder arrow" on:click={() => addTime(600)}><Icon data={chevronUp} /></div>
			<div class="arrow-holder arrow" on:click={() => addTime(60)}><Icon data={chevronUp} /></div>
			<div class="arrow-holder" />
			<div class="arrow-holder arrow" on:click={() => addTime(10)}><Icon data={chevronUp} /></div>
			<div class="arrow-holder arrow" on:click={() => addTime(1)}><Icon data={chevronUp} /></div>
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
			<div class="arrow-holder arrow" on:click={() => addTime(-3600)}>
				<Icon data={chevronDown} />
			</div>
			<div class="arrow-holder" />
			<div class="arrow-holder arrow" on:click={() => addTime(-600)}>
				<Icon data={chevronDown} />
			</div>
			<div class="arrow-holder arrow" on:click={() => addTime(-60)}>
				<Icon data={chevronDown} />
			</div>
			<div class="arrow-holder" />
			<div class="arrow-holder arrow" on:click={() => addTime(-10)}>
				<Icon data={chevronDown} />
			</div>
			<div class="arrow-holder arrow" on:click={() => addTime(-1)}><Icon data={chevronDown} /></div>
		</div>
	</RowWidgetHolder>
</Row>

<style lang="scss">
	.arrows-holder {
		display: flex;
		height: 26px;
		line-height: 32px;

		.arrow-holder {
			width: 16.666%;
			text-align: center;

			&.arrow {
				cursor: pointer;
			}
		}
	}
	.clock-holder {
		height: calc(100% - 52px);
	}
</style>
