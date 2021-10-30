<div class="clock">
	<slot />
</div>

<style lang="scss">
	@import '../../main.scss';

	.clock {
		display: flex;
		width: 100%;
		height: 100%;
		background: $black;
		color: #fff;
		font-family: $digitalFontFamily;
	}
</style>
