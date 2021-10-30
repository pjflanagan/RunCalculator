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
		width: 25%;

		.split {
			text-align: center;
			cursor: pointer;
			margin: 12px;
			padding: 12px;
			background: #fff;

			&.selected {
				color: #fff;
				background: $black;
			}
		}
	}
</style>
