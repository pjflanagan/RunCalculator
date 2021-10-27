import { Distance } from 'models';
import React, { FC, useState } from 'react';

import * as Style from './style.module.scss';

type DistanceEntryComponentProps = {
  distance: number;
  setDistance: (d: number) => void;
  unit: 'm' | 'k';
  toggleUnit: () => void;
}

export const DistanceEntryComponent: FC<DistanceEntryComponentProps> = ({
  distance,
  setDistance,
  unit,
  toggleUnit
}) => {

  const displayUnit = (unit === 'm') ? 'MILES' : 'KILOS';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDistance(parseFloat(e.target.value));
  }

  return (
    <table id="dist-table">
      <tr>
        <td id="dist-input-td">
          <input type="number" id="dist-num" onChange={handleChange} value={distance} />
        </td>
        {/* ontouchstart="event.preventDefault();toggleUnit();" */}
        <td id="dist-unit-td" onClick={toggleUnit}>{displayUnit}</td>
        <td className="gap"></td>
      </tr>
    </table>
  );
}
