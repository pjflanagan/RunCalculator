import { Distance } from 'models';
import React, { FC, useState } from 'react';

import * as Style from './style.module.scss';

type EventEntryComponentProps = {
  raceName: string;
  setRaceName: (n: string) => void;
}

const EventEntryComponent: FC<EventEntryComponentProps> = ({
  raceName,
  setRaceName
}) => {

  const [e1, e2, e3, e4, e5] = Distance.makeDisplayEvents(raceName);

  return (
    <table>
      <tr>
        <td className="end hover" onClick={() => setRaceName(e1.name)}>{e1}</td>
        <td className="mid hover" onClick={() => setRaceName(e2.name)}>{e2}</td>
        <td className="selected-split">{e3}</td>
        <td className="mid hover" onClick={() => setRaceName(e4.name)}>{e4}</td>
        <td className="end hover" onClick={() => setRaceName(e5.name)}>{e5}</td>
      </tr>
    </table>
  );
}

type DistanceEntryComponentProps = {
  distance: number;
  setDistance: (d: number) => void;
  unit: 'm' | 'k';
  toggleUnit: () => void;
}

const DistanceEntryComponent: FC<DistanceEntryComponentProps> = ({
  unit,
  toggleUnit
}) => {

  const displayUnit = (unit === 'm') ? 'MILES' : 'KILOS';

  return (
    <table id="dist-table">
      <tr>
        <td id="dist-input-td">
          <input type="number" id="dist-num" onKeyDown="input();" value="00.00" />
        </td>
        {/* ontouchstart="event.preventDefault();toggleUnit();" */}
        <td id="dist-unit-td" onClick={toggleUnit}>{displayUnit}</td>
        <td className="gap"></td>
      </tr>
    </table>

  );
}

type DistanceComponentProps = {
  raceName: string;
  setRaceName: (n: string) => void;
  distance: number;
  setDistance: (d: number) => void;
  distanceMode: boolean;
  toggleDistanceMode: () => void;
  unit: 'm' | 'k';
  toggleUnit: () => void;
}

export const DistanceComponent: FC<DistanceComponentProps> = ({
  raceName,
  setRaceName,
  distance,
  setDistance,
  distanceMode,
  toggleDistanceMode,
  unit,
  toggleUnit,
}) => {

  const labelDisplay = distanceMode ? 'DIST' : 'EVENT';

  const [e1, e2, e3, e4, e5] = Distance.makeDisplayEvents(raceName);

  return (
    // ontouchstart
    //  ontouchstart="touchStart(event,'event');" ontouchend="touchEnd(event);" ontouchmove="touchMove(event);" ontouchcancel="touchCancel(event);"
    // TODO: elements for distance mode
    <div className="item light">
      <table>
        <tr>
          <td className="title hover" onClick={toggleDistanceMode}>{labelDisplay}</td>
          <td className="divider"><div className="bar"></div></td>
          <td >
            {
              distanceMode
                ? <DistanceEntryComponent />
                : <EventEntryComponent />
            }
          </td>
        </tr>
      </table>
    </div>
  );
};
