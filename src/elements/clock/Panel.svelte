<!-- TODO: this should just be a Panel, which can be a number -->
<script lang="ts">
	import classNames from 'classnames';

	export let onClick: () => void = null;

	const className = classNames('panel', {
		hover: !!onClick
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
	}
</style>
