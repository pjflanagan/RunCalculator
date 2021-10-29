<script lang="ts">
	import { afterUpdate } from 'svelte';
	import { Time } from '../../models';
	import Panel from './Panel.svelte';

	export let dec: string;

	let displayDecimal = '000';

	const animateDecimalChange = (count: number) => {
		if (count === 0) {
			displayDecimal = dec;
			return;
		}
		displayDecimal = Time.makeDecimalString(Math.random());
		console.log(displayDecimal);
		setTimeout(() => animateDecimalChange(count - 1), 40);
	};

	afterUpdate(() => {
		if (dec !== displayDecimal) {
			const changeCount = Math.floor(Math.random() * 10) + 5;
			animateDecimalChange(changeCount);
		}
	});
</script>

<Panel>
	<div class="decimal">
		.{displayDecimal}
	</div>
</Panel>

<style lang="scss">
	.decimal {
		font-size: 12px;
	}
</style>
