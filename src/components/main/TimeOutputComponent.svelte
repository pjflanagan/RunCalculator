<script lang="ts">
	import { Row, Clock, Colon, Number, Decimal } from '../../elements';
	import { Time } from '../../models';

	// TODO: const MAX_TIME_OUT = 9 * 60 * 60 + 59 * 60 + 59;

	export let timeOut: number;

	$: [h1, m10, m1, s10, s1, d] = Time.makeDisplayTime(timeOut);

	const large = true;
</script>

<Row height={24}>
	<Clock>
		{#if h1 !== 0}
			<Number num={h1} {large} />
			<Colon {large} />
		{/if}
		<Number num={m10} {large} />
		<Number num={m1} {large} />
		<Colon {large} />
		<Number num={s10} {large} />
		<Number num={s1} {large} />
		<Decimal dec={d} />
	</Clock>
</Row>
