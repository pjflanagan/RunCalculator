<script lang="ts">
	import { Distance } from '../../../models';

	export let event: Distance.Event;

	const EVENT_COUNT = Distance.EVENTS.length;

	$: offset = Distance.getEventIndex(event);
</script>

<div
	class="events-holder"
	style={`
    width: ${100 * EVENT_COUNT}%;
    transform: translateX(${(-100 * offset) / EVENT_COUNT}%);
  `}
>
	{#each Distance.EVENTS as displayEvent}
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
