<script lang="ts">
	import classNames from 'classnames';
	import Panel from './Panel.svelte';

	export let num: number;
	export let large: boolean = false;
	export let addTime: (deltaSeconds: number) => void = null;
	export let deltaSeconds: number = 0;
	export let error: boolean = false;

	const NUMBERS = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

	let translateY: number = 0;

	$: translateY = -10 * (9 - num);
	$: className = classNames('number', { large, error });

	const onClick = () => addTime(deltaSeconds);

	const onKeyDown = (e: KeyboardEvent) => {
		switch (e.code) {
			case 'ArrowUp':
				addTime(deltaSeconds);
				break;
			case 'ArrowDown':
				addTime(-1 * deltaSeconds);
				break;
			default:
				return;
		}
	};
</script>

<Panel {onClick} type="number" {onKeyDown}>
	<div class="number-column-holder">
		<div class="number-column" style={`transform:translateY(${translateY}%)`}>
			{#each NUMBERS as number}
				<div class="number-holder">
					<div class={className}>
						{#if error}
							0
						{:else}
							{number}
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</Panel>

<style lang="scss">
	@import '../../main.scss';

	.number-column-holder {
		overflow: hidden;
		height: 100%;
		width: 100%;

		.number-column {
			height: 1000%;
			display: flex;
			flex-wrap: wrap;
			transition: transform 0.2s;

			.number-holder {
				height: 10%;
				width: 100%;

				.number {
					position: relative;
					top: 50%;
					transform: translateY(-50%);
					font-family: $digitalFontFamily;
					font-size: 42px;

					&.large {
						font-size: 70px;
					}

					&.error {
						color: #f00;
					}
				}
			}
		}
	}
</style>
