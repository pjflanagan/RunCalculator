
import { convertMilesToMeters } from './unit';

export const EVENT_NAMES = ["800", "1200", "1600",
  "MILE", "3K", "2MI", "3MI",
  "5K", "6K", "8K", "5MI",
  "10K", "10MI", "HALF", "MARA"];

export const EVENT_DISTANCES = [800, 1200, 1600,
  convertMilesToMeters(1), 3000, convertMilesToMeters(2), convertMilesToMeters(3),
  5000, 6000, 8000, convertMilesToMeters(5),
  10000, convertMilesToMeters(10), convertMilesToMeters(13.1), convertMilesToMeters(26.2)];

export const SPLIT_DISTANCES = [200, 400, 800, 1000, convertMilesToMeters(1)];
