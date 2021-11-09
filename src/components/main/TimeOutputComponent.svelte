<script lang="ts">
	import { Row, Clock, Colon, Number, Decimal, Unit } from '../../elements';
	import { Time } from '../../models';

	export let timeOut: number;

	const large = true;

	$: [h1, m10, m1, s10, s1, d] = Time.makeDisplayTime(timeOut);
	$: error = h1 >= 10;
</script>

<Row height={24}>
	<Clock>
		{#if h1 > 0 && !error}
			<Number num={h1} {large} {error} />
			<Unit unit="h" {large} />
			<Colon {large} />
		{/if}
		<Number num={m10} {large} {error} />
		<Number num={m1} {large} {error} />
		<Unit unit="m" {large} />
		<Colon {large} />
		<Number num={s10} {large} {error} />
		<Number num={s1} {large} {error} />
		<Unit unit="s" {large} />
		<Decimal dec={d} {error} />
	</Clock>
</Row>
