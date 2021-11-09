<script lang="ts">
	import { Distance } from '../../../models';
	import Event from './Event.svelte';

	export let race: Distance.Event;
	export let setRace: (event: Distance.Event) => void;

	let amimationDirection: 'left' | 'right' = 'left';
	const onClick = (event: Distance.Event, side: 'left' | 'right') => {
		amimationDirection = side;
		setRace(event);
	};

	$: [e0, e1, e2, e3, e4, e5, e6] = Distance.makeDisplayEvents(race);
</script>

<div class="event-picker">
	<div class="event-holder holder-3">
		<Event onClick={() => onClick(e0, 'left')} event={e0} {amimationDirection} />
	</div>
	<div class="event-holder holder-2">
		<Event onClick={() => onClick(e1, 'left')} event={e1} {amimationDirection} />
	</div>
	<div class="event-holder holder-1">
		<Event onClick={() => onClick(e2, 'left')} event={e2} {amimationDirection} />
	</div>
	<div class="event-holder selected">
		<Event event={e3} {amimationDirection} />
	</div>
	<div class="event-holder holder-1">
		<Event onClick={() => onClick(e4, 'right')} event={e4} {amimationDirection} />
	</div>
	<div class="event-holder holder-2">
		<Event onClick={() => onClick(e5, 'right')} event={e5} {amimationDirection} />
	</div>
	<div class="event-holder holder-3">
		<Event onClick={() => onClick(e6, 'right')} event={e6} {amimationDirection} />
	</div>
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

			&.selected {
				width: 24%;
				background: $black;
				color: #fff;
				cursor: default;
			}
			&.holder-1 {
				width: 16%;
				color: $black;
				font-size: 18px;
			}
			&.holder-2 {
				width: 12%;
				color: $grey;
				font-size: 14px;
			}
			&.holder-3 {
				width: 10%;
				color: $grey;
				font-size: 10px;
			}
		}
	}
</style>
