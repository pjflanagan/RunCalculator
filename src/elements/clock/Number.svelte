<script lang="ts">
	import Panel from './Panel.svelte';

	export let num: number;
	export let onClick: () => void = null;

	// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	// $: {
	// 	// TODO: animate number changes here
	// }
</script>

<Panel {onClick}>
	{num}
</Panel>
