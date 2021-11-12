<script lang="ts">
	import { Row, RowDivider, RowLabel, RowWidgetHolder } from '../../elements/index';
	import { Distance } from '../../models';

	export let split: Distance.Event;

	$: splitBackerMarginLeft = Distance.getSplitIndex(split);

	const onKeyDown = (e: KeyboardEvent, splitOption: Distance.Event) => {
		switch (e.code) {
			case 'Enter':
				split = splitOption;
				break;
			default:
				return;
		}
	};
</script>

<Row>
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
						tabindex={0}
						on:keydown={(e) => onKeyDown(e, splitOption)}
					>
						{splitOption.name}
					</div>
				</div>
			{/each}
			<div class="split-backer" style={`left: ${20 * splitBackerMarginLeft}%`} />
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
		}
	}
</style>
