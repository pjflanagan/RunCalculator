<script lang="ts">
	import { Row, Clock, Panel, Number, Decimal } from '../../elements';
	import { Time } from '../../models';

	export let timeOut: number;

	$: {
		console.log(timeOut);
	}

	$: [h1, m10, m1, s10, s1, d] = Time.makeDisplayTime(timeOut);
</script>

<Row>
	<Clock>
		{#if h1 !== 0}
			<Number num={h1} />
			<Panel>:</Panel>
		{/if}
		<Number num={m10} />
		<Number num={m1} />
		<Panel>:</Panel>
		<Number num={s10} />
		<Number num={s1} />
		<Decimal dec={d} />
	</Clock>
</Row>

<style lang="scss">
</style>
