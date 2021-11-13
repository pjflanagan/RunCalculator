<script lang="ts">
	export let className: 'header' | 'widget' | 'widget-clock' | 'time-out';
</script>

<div class={`row ${className}`}>
	<slot />
</div>

<style lang="scss">
	.row {
		width: 100%;
		display: flex;
		margin: 0;
		display: flex;
		flex-wrap: wrap;

		&.header {
			height: 12%;
		}

		&.widget {
			height: 16%;
		}

		&.widget-clock {
			height: 30%;
		}

		&.time-out {
			height: 26%;
		}
	}

	@media (min-width: 580px) {
		.row {
			&.header {
				height: 16%;
			}

			&.widget,
			&.widget-clock {
				height: 20%;
			}

			&.time-out {
				height: 24%;
			}
		}
	}
</style>
