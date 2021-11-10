<script lang="ts">
	import type { Distance } from '../../../models';

	export let event: Distance.Event;
	export let onClick: null | (() => void) = null;
	export let amimationDirection: 'left' | 'right' = 'left';

	const slide = (_node: Node, { transitionDirection }: { transitionDirection: 'in' | 'out' }) => {
		let dir = amimationDirection === 'left' ? 1 : -1;
		dir *= transitionDirection === 'in' ? 1 : -1;
		return {
			duration: 240,
			css: (t: number) => `transform: translateX(${(-150 + t * 150) * dir}%)`
		};
	};
</script>

<div class="event" on:click={onClick}>
	{#key event}
		<div
			class="event-name"
			out:slide|local={{ transitionDirection: 'out' }}
			in:slide={{ transitionDirection: 'in' }}
		>
			{event.name}
		</div>
	{/key}
</div>

<style lang="scss">
	@import '../../../main.scss';

	.event {
		position: relative;
		margin: 0 auto;
		height: 100%;
		width: 80%;
		overflow: hidden;
		top: 50%;
		transform: translateY(-50%);
		text-align: center;

		.event-name {
			position: absolute;
			height: 24px;
			width: 80px;
			left: 50%;
			top: 50%;
			margin: -12px 0 0 -40px;
		}
	}
</style>
