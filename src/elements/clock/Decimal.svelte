<script lang="ts">
	import classNames from 'classnames';
	import { Time } from '../../models';
	import Panel from './Panel.svelte';

	export let dec: string;
	export let error: boolean = false;

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
				const animationDisplayDec = `.${Time.makeDecimalString(Math.random())}`;
				node.textContent = animationDisplayDec;
			}
		};
	};

	$: className = classNames('decimal', { error });
</script>

<Panel type="number">
	{#key dec}
		<div class={className} in:cycle>
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

		&.error {
			color: #f00;
		}
	}
</style>
