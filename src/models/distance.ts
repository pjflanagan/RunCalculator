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

  export enum EventIDNone {
    NONE1 = 'NONE1',
    NONE2 = 'NONE2',
    NONE3 = 'NONE3',
    NONE4 = 'NONE4',
    NONE5 = 'NONE5',
    NONE6 = 'NONE6',
  };

  type EventID = EventName | EventIDNone;

  export type Event = {
    id: EventID;
    name: EventName;
    distance: number;
  };

  export const makeNoDistanceEvent = (id: EventID): Event => {
    return {
      id,
      name: EventName.NONE,
      distance: 0,
    }
  }

  const NO_DISTANCE_EVENT: Event = makeNoDistanceEvent(EventName.NONE);

  export const isNoDistanceEvent = (event: Event) => {
    return event.name === EventName.NONE;
  }

  export const EVENTS: Event[] = [
    {
      id: EventName.M800,
      name: EventName.M800,
      distance: 800
    },
    {
      id: EventName.M1200,
      name: EventName.M1200,
      distance: 1200
    },
    {
      id: EventName.M1500,
      name: EventName.M1500,
      distance: 1500
    },
    {
      id: EventName.M1600,
      name: EventName.M1600,
      distance: 1600
    },
    {
      id: EventName.MILE,
      name: EventName.MILE,
      distance: convertMilesToMeters(1)
    },
    {
      id: EventName.K3,
      name: EventName.K3,
      distance: 3 * K
    },
    {
      id: EventName.MI2,
      name: EventName.MI2,
      distance: convertMilesToMeters(2)
    },
    {
      id: EventName.MI3,
      name: EventName.MI3,
      distance: convertMilesToMeters(3)
    },
    {
      id: EventName.K5,
      name: EventName.K5,
      distance: 5 * K
    },
    {
      id: EventName.K6,
      name: EventName.K6,
      distance: 6 * K
    },
    {
      id: EventName.K8,
      name: EventName.K8,
      distance: 8 * K
    },
    {
      id: EventName.MI5,
      name: EventName.MI5,
      distance: convertMilesToMeters(5)
    },
    {
      id: EventName.K10,
      name: EventName.K10,
      distance: 10 * K
    },
    {
      id: EventName.MI10,
      name: EventName.MI10,
      distance: convertMilesToMeters(10)
    },
    {
      id: EventName.HALF,
      name: EventName.HALF,
      distance: convertMilesToMeters(13.1)
    },
    {
      id: EventName.MARATHON,
      name: EventName.MARATHON,
      distance: convertMilesToMeters(26.2)
    }
  ];

  export const SPLITS: Event[] = [
    {
      id: EventName.M200,
      name: EventName.M200,
      distance: 200
    },
    {
      id: EventName.M400,
      name: EventName.M400,
      distance: 400
    },
    {
      id: EventName.M800,
      name: EventName.M800,
      distance: 800
    },
    {
      id: EventName.K1,
      name: EventName.K1,
      distance: 1000
    },
    {
      id: EventName.MILE,
      name: EventName.MILE,
      distance: convertMilesToMeters(1)
    }
  ];

  const get = (name: EventName, list: Event[]): Event => {
    return list.find((e) => e.name === name) || NO_DISTANCE_EVENT;
  };

  export const getEvent = (name: EventName): Event => get(name, EVENTS);
  export const getSplit = (name: EventName): Event => get(name, SPLITS);

  export const getSplitIndex = (e: Event): number => {
    return SPLITS.findIndex((split) => e.name === split.name);
  };

  export const getSplitAtIndex = (i: number): Event => {
    return Loop.get(SPLITS, i);
  }

  export const getEventIndex = (e: Event): number => {
    return EVENTS.findIndex((event) => e.name === event.name);
  };
}
