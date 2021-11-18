import { Distance } from './distance';
import { Error } from './error';

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
  }: calcTimeArgs): [number, Error.ErrorMessage] => {

    const { distance: splitDistance } = split;
    const { distance: raceDistance } = race;

    let factor = 0;
    if (distanceMode) {
      // distance mode
      const distanceMeters = Distance.convertUnitToMeters(distanceIn, unit);
      // error check
      if (distanceMeters < splitDistance) {
        return [0, Error.DISTANCE_SHORTER_THAN_SPLIT];
      }
      factor = !paceMode ? splitDistance / distanceMeters : distanceMeters / splitDistance;

    } else {
      // event mode error check
      if (raceDistance < split.distance) {
        return [0, Error.DISTANCE_SHORTER_THAN_SPLIT];
      }
      factor = !paceMode ? splitDistance / raceDistance : raceDistance / splitDistance;
    }

    if (factor > 1 && !paceMode) {
      return [0, Error.DISTANCE_SHORTER_THAN_SPLIT];
    }

    return [timeIn * factor, Error.NO_ERROR];
  };

  export type DisplayTime = [number, number, number, number, number, number, string, Error.ErrorMessage];

  export const makeDecimalString = (dec: number): string => {
    const decimalMultiplied = Math.round(dec * 1000);
    const decString = `000${decimalMultiplied}`;
    return decString.substr(decString.length - 3);
  };

  export const makeDisplayTime = (time: number): DisplayTime => {
    const hours = time / 60 / 60;
    const h10 = Math.floor(hours / 10);

    if (h10 >= 10) {
      return [0, 0, 0, 0, 0, 0, '000', Error.TIME_IS_TOO_LONG];
    }

    const h1 = Math.floor(hours % 10);

    const minutes = time / 60 % 60;
    const m10 = Math.floor((minutes / 10));
    const m1 = Math.floor((minutes % 10));

    const seconds = time % 60;
    const s10 = Math.floor(seconds / 10);
    const s1 = Math.floor(seconds % 10);

    const d = makeDecimalString((seconds % 10) % 1);

    return [h10, h1, m10, m1, s10, s1, d, Error.NO_ERROR];
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
