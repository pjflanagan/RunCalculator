<script lang="ts">
	import { Row, RowDivider, RowLabel, RowWidgetHolder } from '../../elements/index';
	import { Distance } from '../../models';

	export let split: Distance.Event;

	$: splitIndex = Distance.getSplitIndex(split);
	$: leftSplit = Distance.getSplitAtIndex(splitIndex - 1);
	$: rightSplit = Distance.getSplitAtIndex(splitIndex + 1);

	const onKeyDown = (e: KeyboardEvent) => {
		switch (e.code) {
			case 'ArrowLeft':
			case 'ArrowDown':
				if (!Distance.isNoDistanceEvent(leftSplit)) {
					split = leftSplit;
				}
				break;
			case 'ArrowRight':
			case 'ArrowUp':
				if (!Distance.isNoDistanceEvent(rightSplit)) {
					split = rightSplit;
				}
				break;
			default:
				return;
		}
	};
</script>

<Row className="widget">
	<RowLabel>SPLIT</RowLabel>
	<RowDivider />
	<RowWidgetHolder>
		<div class="split-picker">
			{#each Distance.SPLITS as splitOption}
				<div class="split-holder">
					<div
						class="split"
						class:selected={split.id === splitOption.id}
						on:click={() => (split = splitOption)}
					>
						{splitOption.name}
					</div>
				</div>
			{/each}
			<div
				class="split-backer"
				style={`left: ${20 * splitIndex}%`}
				tabindex={0}
				on:keydown={onKeyDown}
			/>
		</div>
	</RowWidgetHolder>
</Row>

<style lang="scss">
	@import '../../main.scss';

	$splitPickerHeight: 42px;

	.split-picker {
		position: relative;
		display: flex;
		top: 50%;
		transform: translateY(-50%);
		height: $splitPickerHeight;

		.split-holder {
			width: 20%;
			margin: 0;
			z-index: 2;
			position: relative;

			.split {
				text-align: center;
				cursor: pointer;
				line-height: $splitPickerHeight;
				transition: color 0.2s, font-size 0.2s;
				color: $grey;
				font-size: 18px;

				&:hover {
					color: $black;
				}

				&.selected {
					color: $white;
					cursor: default;
					font-size: 22px;
					// font-size: 28px;

					&:hover {
						color: $white;
					}
				}
			}
		}

		.split-backer {
			position: fixed;
			height: 100%;
			width: 20%;
			top: 50%;
			transform: translateY(-50%);
			background: $black;
			z-index: 1;
			transition: left 0.2s;

			&:focus {
				outline: 4px solid #000;
				background: #000;
				box-shadow: 0px 6px 12px #000a;
			}
		}
	}
</style>
