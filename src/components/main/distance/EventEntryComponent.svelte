<script lang="ts">
	import { Distance } from '../../../models';

	export let race: Distance.Event;
	export let setRace: (event: Distance.Event) => void;

	$: [e0, e1, e2, e3, e4, e5, e6] = Distance.makeDisplayEvents(race);
</script>

<!-- 
TODO: display 9 events, with 4 hidden
make them slide into place when they change
 -->

<div class="event-picker">
	<div class="event-holder holder-3">
		<div class="event" on:click={() => setRace(e0)}>{e0.name}</div>
	</div>
	<div class="event-holder holder-2">
		<div class="event" on:click={() => setRace(e1)}>{e1.name}</div>
	</div>
	<div class="event-holder holder-1">
		<div class="event" on:click={() => setRace(e2)}>{e2.name}</div>
	</div>
	<div class="event-holder selected">
		<div class="event">{e3.name}</div>
	</div>
	<div class="event-holder holder-1">
		<div class="event" on:click={() => setRace(e4)}>{e4.name}</div>
	</div>
	<div class="event-holder holder-2">
		<div class="event" on:click={() => setRace(e5)}>{e5.name}</div>
	</div>
	<div class="event-holder holder-3">
		<div class="event" on:click={() => setRace(e6)}>{e6.name}</div>
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

			.event {
				position: relative;
				top: 50%;
				transform: translateY(-50%);
				text-align: center;
			}
		}
	}
</style>
