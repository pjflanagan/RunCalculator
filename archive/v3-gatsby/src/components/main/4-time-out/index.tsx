
import React, { FC, useState } from 'react';

import { Time } from 'models';

import * as Style from './style.module.scss';

type TimeOutputComponentProps = {
  timeOut: number;
}

export const TimeOutputComponent: FC<TimeOutputComponentProps> = ({
  timeOut,
}) => {

  const [h1, m10, m1, s10, s1, d] = Time.makeDisplayTime(timeOut);

  return (
    <div id="result-clock" className="clock light">
      <table className="clock">
        <tr className="clock">
          <td id="rm10">{m10}</td>
          <td id="rm1">{m1}</td>
          <td id="colon">{':'}</td>
          <td id="rs10">{s10}</td>
          <td id="rs1">{s1}</td>
          <td id="dec">{d}</td>
        </tr>
      </table>
    </div>
  );
};
