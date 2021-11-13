<div class="widget-holder">
	<slot />
</div>

<style>
	.widget-holder {
		width: 100%;
		height: calc(100% - 34px);
	}

	@media (min-width: 580px) {
		.widget-holder {
			width: calc(80% - 18px);
			height: 100%;
		}
	}
</style>
