<script lang="ts">
	import { Time } from '../../models';
	import Panel from './Panel.svelte';

	export let dec: string;

	const cycle = (node: Node, {}) => {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;
		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		return {
			duration: 240,
			tick: (t: number) => {
				if (t === 1) {
					node.textContent = text;
					return;
				}
				const displayDec = `.${Time.makeDecimalString(Math.random())}`;
				node.textContent = displayDec;
			}
		};
	};
</script>

<Panel>
	{#key dec}
		<div class="decimal" in:cycle>
			{`.${dec}`}
		</div>
	{/key}
</Panel>

<style lang="scss">
	.decimal {
		position: relative;
		top: 50%;
		transform: translateY(-100%);
		font-size: 26px;
	}
</style>
