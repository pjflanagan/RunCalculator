<script lang="ts">
	import { Distance } from '../../../models';

	export let race: Distance.Event;
	export let setRace: (event: Distance.Event) => void;

	$: [e1, e2, e3, e4, e5] = Distance.makeDisplayEvents(race);
</script>

<!-- 
TODO: display 9 events, with 4 hidden
make them slide into place when they change
 -->

<div class="event-picker">
	<div class="event-holder end">
		<div class="event" on:click={() => setRace(e1)}>{e1.name}</div>
	</div>
	<div class="event-holder mid">
		<div class="event" on:click={() => setRace(e2)}>{e2.name}</div>
	</div>
	<div class="event-holder selected">
		<div class="event">{e3.name}</div>
	</div>
	<div class="event-holder mid">
		<div class="event" on:click={() => setRace(e4)}>{e4.name}</div>
	</div>
	<div class="event-holder end">
		<div class="event" on:click={() => setRace(e5)}>{e5.name}</div>
	</div>
</div>

<style lang="scss">
	@import '../../../main.scss';

	.event-picker {
		position: relative;
		display: flex;
		top: 50%;
		transform: translateY(-50%);
		height: 42px;

		.event-holder {
			width: 20%;
			height: 100%;
			cursor: pointer;
			font-size: 22px;

			&.selected {
				background: $black;
				color: #fff;
				cursor: default;
			}
			&.mid {
				color: $black;
				font-size: 18px;
			}
			&.end {
				color: #1c1c1c99;
				font-size: 14px;
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
