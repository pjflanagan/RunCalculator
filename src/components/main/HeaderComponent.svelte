<script lang="ts">
	import { Row } from '../../elements/index';
</script>

<Row className="header">
	<div class="header-holder">
		<div class="header">Run Calculator</div>
	</div>
</Row>

<style lang="scss">
	.header-holder {
		height: 100%;
		width: 100%;

		.header {
			position: relative;
			top: 50%;
			width: 100%;
			transform: translateY(-50%);
			font-size: 3.6em;
			text-align: center;
			width: 100%;
		}
	}

	@media (min-width: 580px) {
		.header-holder {
			.header {
				font-size: 6.9em;
				margin-top: 12px;
			}
		}
	}
</style>
