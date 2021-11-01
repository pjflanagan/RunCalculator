<script lang="ts">
	import Panel from './Panel.svelte';

	export let num: number;
	export let onClick: () => void = null;

	const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	let translateY: number = 0;

	$: translateY = -10 * num;
</script>

<Panel {onClick}>
	<div class="number-column-holder">
		<div class="number-column" style={`transform:translateY(${translateY}%)`}>
			{#each NUMBERS as number}
				<div class="number-holder">
					<div class="number">
						{number}
					</div>
				</div>
			{/each}
		</div>
	</div>
</Panel>

<style lang="scss">
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
					margin-top: -20px;
					height: 40px;
					line-height: 40px;
					font-size: 42px;
				}
			}
		}
	}
</style>
