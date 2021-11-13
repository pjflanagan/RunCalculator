<div class="divider-holder">
	<div class="divider" />
</div>

<style lang="scss">
	@import 'src/main.scss';

	.divider-holder {
		display: none;
		height: 0;
	}

	@media (min-width: 580px) {
		.divider-holder {
			display: inline;
			height: 100%;
			width: 18px;

			.divider {
				background: $black;
				position: relative;
				margin: 0 auto;
				top: 50%;
				transform: translateY(-50%);
				height: 56px;
				width: 5px;
			}
		}
	}
</style>
