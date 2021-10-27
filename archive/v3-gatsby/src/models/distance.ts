import { Loop } from "./util";

export namespace Distance {

  export const convertMilesToMeters = (miles: number): number => {
    return miles * 1609.344;
  }

  type Event = {
    name: string;
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
      distance: 3000,
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
      distance: 5000,
    },
    {
      name: '6K',
      distance: 6000,
    },
    {
      name: '8K',
      distance: 8000,
    },
    {
      name: '5MI',
      distance: convertMilesToMeters(5),
    },
    {
      name: '10K',
      distance: 1000,
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

  const get = (name: string, list: Event[]): Event => {
    return list.find(e => e.name === name) || noDistanceEvent;
  }

  export const getEvent = (name: string): Event => get(name, EVENTS);
  export const getSplit = (name: string): Event => get(name, SPLITS);

  export const makeDisplayEvents = (name: string) =>
    Loop.getCenteredArray(EVENTS, EVENTS.findIndex(e => e.name === name), 5);

}
