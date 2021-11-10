<script lang="ts">
	import Icon from 'svelte-awesome';
	import classNames from 'classnames';
	import { chevronUp, chevronDown } from 'svelte-awesome/icons';

	export let direction: 'UP' | 'DOWN' | 'NONE' = 'NONE';
	export let onClick: null | (() => void) = null;

	let interval: NodeJS.Timeout;
	let timeout: NodeJS.Timeout;

	const onMouseDown = () => {
		timeout = setTimeout(() => {
			interval = setInterval(() => {
				onClick();
			}, 80);
		}, 600);
	};

	const onMouseUp = () => {
		clearInterval(interval);
		clearTimeout(timeout);
	};

	const className = classNames('arrow-holder', {
		hoverable: !!onClick
	});
</script>

<div
	class={className}
	on:click={onClick}
	on:mousedown={onMouseDown}
	on:mouseup={onMouseUp}
	on:mouseout={onMouseUp}
	on:blur={onMouseUp}
>
	{#if direction === 'UP'}
		<div class="icon up">
			<Icon data={chevronUp} />
		</div>
	{:else if direction === 'DOWN'}
		<div class="icon down">
			<Icon data={chevronDown} />
		</div>
	{/if}
</div>

<style lang="scss">
	@import '../../main.scss';

	.arrow-holder {
		width: 16.666%;
		text-align: center;
		color: $grey;
		transition: color 0.2s;

		.icon {
			height: 100%;
			position: relative;
			transition: transform 0.2s;
		}

		&.hoverable {
			cursor: pointer;
		}

		&:hover {
			color: $black;

			.icon {
				&.up {
					transform: translateY(-4px);
				}
				&.down {
					transform: translateY(4px);
				}
			}
		}
	}
</style>
