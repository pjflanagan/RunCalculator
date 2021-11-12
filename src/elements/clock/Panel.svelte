<script lang="ts">
	import classNames from 'classnames';

	export let type: 'number' | 'colon' | 'unit' = 'number';
	export let onClick: () => void = null;
	export let onKeyDown: (e: KeyboardEvent) => void = null;

	const className = classNames('panel', {
		hoverable: !!onClick,
		unit: type === 'unit'
	});

	const tabindex = onKeyDown ? 0 : null;
</script>

<div class={className} on:click={onClick} {tabindex} on:keydown={onKeyDown}>
	<slot />
</div>

<style lang="scss">
	.panel {
		width: 16.666%;
		text-align: center;
		font-size: 2em;
		outline: none;

		&:focus {
			outline: 4px solid #000;
			background: #000;
			box-shadow: 0px 6px 12px #000a;
		}

		&.hoverable {
			cursor: pointer;
		}

		&.unit {
			position: relative;
			width: 0;
			overflow: visible;
			transform: translateX(-6px);
			pointer-events: none;
		}
	}

	@media (min-width: 580px) {
		.panel {
			&.unit {
				transform: translateX(-15px);
			}
		}
	}
</style>
