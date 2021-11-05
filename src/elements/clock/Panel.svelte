<!-- TODO: this should just be a Panel, which can be a number -->
<script lang="ts">
	import classNames from 'classnames';

	export let type: 'number' | 'colon' | 'unit' = 'number';
	export let onClick: () => void = null;

	const className = classNames('panel', {
		hover: !!onClick,
		unit: type === 'unit'
	});
</script>

<div class={className} on:click={onClick}>
	<slot />
</div>

<style lang="scss">
	.panel {
		width: 16.666%;
		text-align: center;
		font-size: 2em;

		&.hover {
			cursor: pointer;
		}

		&.unit {
			position: relative;
			width: 0;
			overflow: visible;
			transform: translateX(-15px);
		}
	}
</style>
