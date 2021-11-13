<script lang="ts">
	import classNames from 'classnames';

	export let onClick: () => void = null;

	const className = classNames('label', {
		hoverable: !!onClick
	});
</script>

<div class="label-holder">
	<div class={className} on:click={onClick}>
		<slot />
	</div>
</div>

<style lang="scss">
	.label-holder {
		width: 100%;
		height: 30px;

		.label {
			font-size: 24px;
			padding: 0 12px;

			&.hoverable {
				cursor: pointer;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}

	@media (min-width: 580px) {
		.label-holder {
			width: 20%;
			height: 100%;
			.label {
				position: relative;
				top: 50%;
				transform: translateY(-50%);
				text-align: center;
				font-size: 32px;
				line-height: 60px;
			}
		}
	}
</style>
