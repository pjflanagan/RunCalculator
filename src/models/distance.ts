import { Loop } from "./util";

export namespace Distance {

  const K = 1000;

  export const convertMilesToMeters = (miles: number): number => {
    return miles * 1609.344;
  }

  // k is kilometers (in name alone, it is actually represented by meters)
  // m is miles
  export type Unit = 'm' | 'k';

  export type EventName = ''
    | '200' | '400' | '1000'
    | '800' | '1200' | '1600'
    | 'MILE' | '3K' | '2MI'
    | '3MI' | '5K' | '6K'
    | '8K' | '5MI' | '10K'
    | '10MI' | 'HALF' | 'MARA';

  export type Event = {
    name: EventName;
    distance: number;
  };

  const noDistanceEvent: Event = {
    name: '',
    distance: 0
  }

  export const EVENTS: Event[] = [
    {
      name: '800',
      distance: 800,
    },
    {
      name: '1200',
      distance: 1200,
    },
    {
      name: '1600',
      distance: 1600,
    },
    {
      name: 'MILE',
      distance: convertMilesToMeters(1),
    },
    {
      name: '3K',
      distance: 3 * K,
    },
    {
      name: '2MI',
      distance: convertMilesToMeters(2),
    },
    {
      name: '3MI',
      distance: convertMilesToMeters(3),
    },
    {
      name: '5K',
      distance: 5 * K,
    },
    {
      name: '6K',
      distance: 6 * K,
    },
    {
      name: '8K',
      distance: 8 * K,
    },
    {
      name: '5MI',
      distance: convertMilesToMeters(5),
    },
    {
      name: '10K',
      distance: 10 * K,
    },
    {
      name: '10MI',
      distance: convertMilesToMeters(10),
    },
    {
      name: 'HALF',
      distance: convertMilesToMeters(13.1),
    },
    {
      name: 'MARA',
      distance: convertMilesToMeters(26.2),
    },
  ];

  export const SPLITS: Event[] = [
    {
      name: '200',
      distance: 200,
    },
    {
      name: '400',
      distance: 400,
    },
    {
      name: '800',
      distance: 800,
    },
    {
      name: '1000',
      distance: 1000,
    },
    {
      name: 'MILE',
      distance: convertMilesToMeters(1),
    },
  ];

  const get = (name: EventName, list: Event[]): Event => {
    return list.find(e => e.name === name) || noDistanceEvent;
  }

  export const getEvent = (name: EventName): Event => get(name, EVENTS);
  export const getSplit = (name: EventName): Event => get(name, SPLITS);

  export const getSplitIndex = (event: Event): number => {
    return SPLITS.findIndex(split => event.name === split.name);
  }

  export const makeDisplayEvents = (event: Event) =>
    Loop.getCenteredArray(EVENTS, EVENTS.findIndex(e => e.name === event.name), 5);

}
