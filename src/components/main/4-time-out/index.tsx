
import React, { FC, useState } from 'react';

import { makeDisplayTime } from 'models';

import * as Style from './style.module.scss';

type TimeOutputComponentProps = {
  timeOut: number;
}

export const TimeOutputComponent: FC<TimeOutputComponentProps> = ({
  timeOut,
}) => {

  const [rm10, rm1, rs10, rs1, dec] = makeDisplayTime(timeOut);

  return (
    <div id="result-clock" className="clock light">
      <table className="clock">
        <tr className="clock">
          <td id="rm10">{rm10}</td>
          <td id="rm1">{rm1}</td>
          <td id="colon">{':'}</td>
          <td id="rs10">{rs10}</td>
          <td id="rs1">{rs1}</td>
          <td id="dec">{dec}</td>
        </tr>
      </table>
    </div>
  );
};
