<script lang="ts">
	import { Distance } from '../../../models';

	export let race: Distance.Event;
	export let setRace: (event: Distance.Event) => void;

	$: [e1, e2, e3, e4, e5] = Distance.makeDisplayEvents(race);
</script>

<div class="event-picker">
	<div class="event-holder">
		<div class="event end" on:click={() => setRace(e1)}>{e1.name}</div>
	</div>
	<div class="event-holder">
		<div class="event mid" on:click={() => setRace(e2)}>{e2.name}</div>
	</div>
	<div class="event-holder">
		<div class="event selected" on:click={() => setRace(e3)}>{e3.name}</div>
	</div>
	<div class="event-holder">
		<div class="event mid" on:click={() => setRace(e4)}>{e4.name}</div>
	</div>
	<div class="event-holder">
		<div class="event end" on:click={() => setRace(e5)}>{e5.name}</div>
	</div>
</div>

<style lang="scss">
	@import '../../../main.scss';

	.event-picker {
		display: flex;

		.event-holder {
			width: 20%;

			.event {
				text-align: center;

				&.selected {
					background: $black;
					color: #fff;
				}
				&.mid {
					color: $black;
				}
				&.end {
					color: #1c1c1c99;
				}
			}
		}
	}
</style>
