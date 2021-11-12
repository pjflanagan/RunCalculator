<script lang="ts">
	import type { Distance } from '../../../models';

	export let event: Distance.Event;
	export let displayEvents: Distance.Event[];

	const EVENT_COUNT = displayEvents.length;
	const WIDTH = 100 * EVENT_COUNT;

	$: index = displayEvents.findIndex((e) => event.id === e.id);
	$: offset = (-100 * index) / EVENT_COUNT;
</script>

<div
	class="events-holder"
	style={`
    width: ${WIDTH}%;
    transform: translateX(${offset}%);
  `}
>
	{#each displayEvents as displayEvent}
		<div class="event">
			<div class="event-name">
				{displayEvent.name}
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	@import '../../../main.scss';

	.events-holder {
		height: 100%;
		text-align: center;
		display: flex;
		transition: transform 0.2s;

		.event {
			width: 100%;

			.event-name {
				position: relative;
				top: 50%;
				transform: translateY(-50%);
			}
		}
	}
</style>
