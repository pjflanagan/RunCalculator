import { Distance } from './distance';

export namespace Time {
	type calcTimeArgs = {
		timeIn: number;
		race: Distance.Event;
		distance: number;
		distanceMode: boolean;
		split: Distance.Event;
		paceMode: boolean;
		unit: Distance.Unit;
	};

	export const calcTime = ({
		timeIn,
		race,
		distance: distanceIn,
		distanceMode,
		split,
		paceMode,
		unit
	}: calcTimeArgs): number => {
		let factor = 0;
		let distance = 0;

		const splitDistance = split.distance;
		const raceDistance = race.distance;

		if (!distanceMode) {
			factor = !paceMode ? splitDistance / raceDistance : raceDistance / splitDistance;
		} else {
			distance = unit === 'k' ? distanceIn * 1000 : Distance.convertMilesToMeters(distanceIn);
			factor = !paceMode ? splitDistance / distance : distance / splitDistance;
		}

		if (factor > 1 && !paceMode) {
			return 0;
		}

		return timeIn * factor;
	};

	export type DisplayTime = [number, number, number, number, number, string];

	export const makeDecimalString = (dec: number): string => {
		const decimalMultiplied = Math.round(dec * 1000);
		const decString = `000${decimalMultiplied}`;
		return decString.substr(decString.length - 3);
	};

	export const makeDisplayTime = (time: number): DisplayTime => {
		const h1 = Math.floor(time / 60 / 60);
		const m10 = Math.floor(((time / 60) % 60) / 10);
		const m1 = Math.floor(((time / 60) % 60) % 10);
		const s10 = Math.floor((time % 60) / 10);
		const s1 = Math.floor((time % 60) % 10);
		const d = makeDecimalString(((time % 60) % 10) % 1);
		return [h1, m10, m1, s10, s1, d];
	};

	// TODO: this might go unused
	type DisplayTimeIn = [number, number, number, number, number];
	export const makeTimeFromDisplayTime = (displayTime: DisplayTimeIn) => {
		let [h1, m10, m1, s10, s1] = displayTime;

		h1 = h1 * 60 * 60;
		m10 = m10 * 60 * 10;
		m1 = m1 * 60;
		s10 = s10 * 10;

		return h1 + m1 + m10 + s10 + s1;
	};
}
