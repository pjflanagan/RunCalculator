<div class="divider-holder">
	<div class="divider" />
</div>

<style lang="scss">
	@import 'src/main.scss';

	.divider-holder {
		height: 100%;
		width: 18px;

		.divider {
			position: relative;
			margin: 0 auto;
			top: 50%;
			transform: translateY(-50%);
			background: $black;
			height: 56px;
			width: 5px;
		}
	}
</style>
