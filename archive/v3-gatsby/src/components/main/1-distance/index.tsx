import { Distance } from 'models';
import React, { FC, useState } from 'react';

import { DistanceEntryComponent } from './distance-entry';
import { EventEntryComponent } from './event-entry';

import * as Style from './style.module.scss';

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
                ? <DistanceEntryComponent
                  distance={distance}
                  setDistance={setDistance}
                  unit={unit}
                  toggleUnit={toggleUnit}
                />
                : <EventEntryComponent
                  raceName={raceName}
                  setRaceName={setRaceName}
                />
            }
          </td>
        </tr>
      </table>
    </div>
  );
};
