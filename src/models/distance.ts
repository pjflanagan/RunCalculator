import { Loop } from './util';

export namespace Distance {
  const K = 1000;
  const MILES_TO_METERS_RATIO = 1609.344;

  // convert to meters
  const convertMilesToMeters = (distanceInMiles: number): number => {
    return distanceInMiles * MILES_TO_METERS_RATIO;
  };

  export const convertUnitToMeters = (distance: number, unit: Unit) => {
    return unit === 'k' ? distance * 1000 : convertMilesToMeters(distance);
  }

  // convert to given unit
  const convertMetersToMiles = (distanceInMeters: number): number => {
    return distanceInMeters / MILES_TO_METERS_RATIO;
  }

  export const convertMetersToUnit = (distanceInMeters: number, unit: Unit) => {
    return unit === 'k' ? distanceInMeters / 1000 : convertMetersToMiles(distanceInMeters);
  }

  // k is kilometers (in name alone, it is actually represented by meters)
  // m is miles
  export type Unit = 'm' | 'k';

  export enum EventName {
    NONE = '',
    M200 = '200',
    M400 = '400',
    M800 = '800',
    K1 = '1K',
    M1200 = '1200',
    M1500 = '1500',
    M1600 = '1600',
    MILE = 'MILE',
    K3 = '3K',
    MI2 = '2MI',
    MI3 = '3MI',
    K5 = '5K',
    K6 = '6K',
    K8 = '8K',
    MI5 = '5MI',
    K10 = '10K',
    MI10 = '10MI',
    HALF = 'HALF',
    MARATHON = 'MARATHON'
  };

  export type Event = {
    name: EventName;
    distance: number;
  };

  const noDistanceEvent: Event = {
    name: EventName.NONE,
    distance: 0
  };

  export const EVENTS: Event[] = [
    {
      name: EventName.M800,
      distance: 800
    },
    {
      name: EventName.M1200,
      distance: 1200
    },
    {
      name: EventName.M1500,
      distance: 1500
    },
    {
      name: EventName.M1600,
      distance: 1600
    },
    {
      name: EventName.MILE,
      distance: convertMilesToMeters(1)
    },
    {
      name: EventName.K3,
      distance: 3 * K
    },
    {
      name: EventName.MI2,
      distance: convertMilesToMeters(2)
    },
    {
      name: EventName.MI3,
      distance: convertMilesToMeters(3)
    },
    {
      name: EventName.K5,
      distance: 5 * K
    },
    {
      name: EventName.K6,
      distance: 6 * K
    },
    {
      name: EventName.K8,
      distance: 8 * K
    },
    {
      name: EventName.MI5,
      distance: convertMilesToMeters(5)
    },
    {
      name: EventName.K10,
      distance: 10 * K
    },
    {
      name: EventName.MI10,
      distance: convertMilesToMeters(10)
    },
    {
      name: EventName.HALF,
      distance: convertMilesToMeters(13.1)
    },
    {
      name: EventName.MARATHON,
      distance: convertMilesToMeters(26.2)
    }
  ];

  export const SPLITS: Event[] = [
    {
      name: EventName.M200,
      distance: 200
    },
    {
      name: EventName.M400,
      distance: 400
    },
    {
      name: EventName.M800,
      distance: 800
    },
    {
      name: EventName.K1,
      distance: 1000
    },
    {
      name: EventName.MILE,
      distance: convertMilesToMeters(1)
    }
  ];

  const get = (name: EventName, list: Event[]): Event => {
    return list.find((e) => e.name === name) || noDistanceEvent;
  };

  export const getEvent = (name: EventName): Event => get(name, EVENTS);
  export const getSplit = (name: EventName): Event => get(name, SPLITS);

  export const getSplitIndex = (event: Event): number => {
    return SPLITS.findIndex((split) => event.name === split.name);
  };

  export const getEventIndex = (event: Event): number => {
    return EVENTS.findIndex((split) => event.name === split.name);
  };
}
