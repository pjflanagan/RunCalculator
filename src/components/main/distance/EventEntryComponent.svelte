<script lang="ts">
	import classNames from 'classnames';
	import { Loop, Distance } from '../../../models';
	import Event from './Event.svelte';

	export let race: Distance.Event;

	const DISPALY_EVENTS = [
		Distance.makeNoDistanceEvent(Distance.EventIDNone.NONE1),
		Distance.makeNoDistanceEvent(Distance.EventIDNone.NONE2),
		Distance.makeNoDistanceEvent(Distance.EventIDNone.NONE3),
		...Distance.EVENTS,
		Distance.makeNoDistanceEvent(Distance.EventIDNone.NONE4),
		Distance.makeNoDistanceEvent(Distance.EventIDNone.NONE5),
		Distance.makeNoDistanceEvent(Distance.EventIDNone.NONE6)
	];

	$: visibleEvents = Loop.getCenteredArray(
		DISPALY_EVENTS,
		DISPALY_EVENTS.findIndex((e) => e.id === race.id),
		7
	);

	const onClick = (event: Distance.Event) => {
		if (!Distance.isNoDistanceEvent(event)) {
			race = event;
		}
	};

	const getClassName = (event: Distance.Event, i: number) => {
		return classNames('event-holder', `holder-${Math.abs(i)}`, {
			hoverable: !Distance.isNoDistanceEvent(event)
		});
	};
</script>

<div class="event-picker">
	{#each visibleEvents as event, i}
		<div class={getClassName(event, i)} on:click={() => onClick(event)}>
			<Event {event} displayEvents={DISPALY_EVENTS} />
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
			font-size: 22px;
			overflow: hidden;

			&.hoverable {
				cursor: pointer;
			}

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
