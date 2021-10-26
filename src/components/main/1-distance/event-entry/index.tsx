import { Distance } from 'models';
import React, { FC, useState } from 'react';

import * as Style from './style.module.scss';

type EventEntryComponentProps = {
  raceName: string;
  setRaceName: (n: string) => void;
}

export const EventEntryComponent: FC<EventEntryComponentProps> = ({
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
