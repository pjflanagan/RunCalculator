<script lang="ts">
	import Icon from 'svelte-awesome';
	import classNames from 'classnames';
	import { chevronUp, chevronDown } from 'svelte-awesome/icons';

	export let direction: 'UP' | 'DOWN' | 'NONE' = 'NONE';
	export let onClick: () => void = () => {};

	let interval;
	let timeout;

	const onMouseDown = () => {
		timeout = setTimeout(() => {
			interval = setInterval(() => {
				onClick();
			}, 80);
		}, 1000);
	};

	const onMouseUp = () => {
		clearInterval(interval);
		clearTimeout(timeout);
	};

	const className = classNames('arrow-holder', {
		arrow: direction !== 'NONE'
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
		<Icon data={chevronUp} />
	{:else if direction === 'DOWN'}
		<Icon data={chevronDown} />
	{/if}
</div>

<style lang="scss">
	.arrow-holder {
		width: 16.666%;
		text-align: center;

		&.arrow {
			cursor: pointer;
		}
	}
</style>
