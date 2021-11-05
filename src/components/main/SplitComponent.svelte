<script lang="ts">
	import { Row, RowDivider, RowLabel, RowWidgetHolder } from '../../elements/index';
	import { Distance } from '../../models';
	import Split from './split/Split.svelte';

	export let split: Distance.Event;
	export let selectSplit: (name: string) => void;

	$: splitBackerMarginLeft = Distance.getSplitIndex(split);
</script>

<Row>
	<RowLabel>SPLIT</RowLabel>
	<RowDivider />
	<RowWidgetHolder>
		<div class="split-picker">
			{#each Distance.SPLITS as splitOption}
				<Split {split} {selectSplit} splitName={splitOption.name} />
			{/each}
			<div class="split-backer" style={`left: ${25 * splitBackerMarginLeft}%`} />
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

		.split-backer {
			position: fixed;
			height: 42px;
			width: 25%;
			top: 50%;
			transform: translateY(-50%);
			background: $black;
			z-index: 1;
			transition: left 0.2s;
		}
	}
</style>
