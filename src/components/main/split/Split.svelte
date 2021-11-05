<script lang="ts">
	import type { Distance } from '../../../models';

	export let splitName: string;
	export let split: Distance.Event;
	export let selectSplit: (name: string) => void;

	$: isSelected = splitName === split.name;
</script>

<div class="split-holder">
	<div class="split" class:selected={isSelected} on:click={() => selectSplit(splitName)}>
		{splitName}
	</div>
</div>

<style lang="scss">
	@import '../../../main.scss';

	.split-holder {
		width: calc(25% - 12px);
		margin: 0 6px;
		z-index: 2;
		position: relative;

		.split {
			text-align: center;
			cursor: pointer;
			padding: 12px;
			transition: color 0.2s;

			&.selected {
				color: #fff;
				cursor: default;
			}
		}
	}
</style>
