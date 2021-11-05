<main class="app">
	<div class="container">
		<slot />
	</div>
</main>

<style lang="scss">
	.app {
		width: 100%;
		height: 100%;
		top: 0px;
		position: fixed;

		.container {
			margin: 0 auto;
			height: 100%;
			width: 100%;
			max-width: 580px;
			max-height: 720px;
		}
	}
</style>
