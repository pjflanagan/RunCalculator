<script lang="ts">
	import { Distance } from '../../../models';
	import Event from './Event.svelte';

	export let race: Distance.Event;

	$: displayEvents = Distance.makeDisplayEvents(race);
</script>

<div class="event-picker">
	{#each displayEvents as event, i}
		<div class={`event-holder holder-${Math.abs(i)}`} on:click={() => (race = event)}>
			<Event {event} />
		</div>
	{/each}
</div>

<style lang="scss">
	@import '../../../main.scss';

	.event-picker {
		position: relative;
		display: flex;
		height: 42px;
		top: 50%;
		transform: translateY(-50%);

		.event-holder {
			height: 100%;
			cursor: pointer;
			font-size: 22px;
			overflow: hidden;

			&.holder-3 {
				width: 24%;
				background: $black;
				color: #fff;
				cursor: default;
			}
			&.holder-2,
			&.holder-4 {
				width: 16%;
				color: $black;
				font-size: 18px;
			}
			&.holder-1,
			&.holder-5 {
				width: 12%;
				color: $grey;
				font-size: 14px;
			}
			&.holder-0,
			&.holder-6 {
				width: 10%;
				color: $grey;
				font-size: 10px;
			}
		}
	}
</style>
