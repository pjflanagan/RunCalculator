<script lang="ts">
	import { Row, RowDivider, RowLabel, RowWidgetHolder } from '../../elements/index';
	import type { Distance } from '../../models';
	import Split from './split/Split.svelte';

	export let split: Distance.Event;
	export let selectSplit: (name: string) => void;
</script>

<Row>
	<RowLabel>SPLIT</RowLabel>
	<RowDivider />
	<RowWidgetHolder>
		<div class="split-picker">
			<Split {split} {selectSplit} splitName={'200'} />
			<Split {split} {selectSplit} splitName={'400'} />
			<Split {split} {selectSplit} splitName={'800'} />
			<Split {split} {selectSplit} splitName={'MILE'} />
		</div>
	</RowWidgetHolder>
</Row>

<style lang="scss">
	@import '../../main.scss';

	.split-picker {
		position: relative;
		display: flex;
		top: 50%;
		transform: translateY(-50%);
		height: 42px;
	}
</style>
