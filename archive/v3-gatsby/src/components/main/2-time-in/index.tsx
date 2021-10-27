import React, { FC, useState } from 'react';

import { Time } from 'models';

import * as Style from './style.module.scss';

type TimeInputComponentProps = {
  timeIn: number;
  setTimeIn: (t: number) => void;
  paceMode: boolean;
  togglePaceMode: () => void;
};

export const TimeInputComponent: FC<TimeInputComponentProps> = ({
  timeIn,
  setTimeIn,
  paceMode,
  togglePaceMode,
}) => {

  // TODO: setTimeIn from timeNumbers locally?

  const labelDisplay = paceMode ? 'PACE' : 'TIME';
  const [h1, m10, m1, s10, s1] = Time.makeDisplayTime(timeIn);

  const addTime = (deltaSeconds: number) => {
    setTimeIn(timeIn + deltaSeconds);
  }

  return (
    <div className="item light" id="time-item">
      <table>
        <tr>
          <td className="title hover" id="item-2-title" onClick={togglePaceMode}>{labelDisplay}</td>
          <td className="divider"><div className="bar"></div></td>
          <td>
            <table className="hover" id="time-table">
              <tr className="arrows">
                <td id="up1" onClick={() => addTime(3600)}><span className="glyphicon glyphicon-chevron-up"></span></td>
                <td></td>
                <td id="up2" onClick={() => addTime(600)}><span className="glyphicon glyphicon-chevron-up"></span></td>
                <td id="up3" onClick={() => addTime(60)}><span className="glyphicon glyphicon-chevron-up"></span></td>
                <td></td>
                <td id="up4" onClick={() => addTime(10)}><span className="glyphicon glyphicon-chevron-up"></span></td>
                <td id="up5" onClick={() => addTime(1)}><span className="glyphicon glyphicon-chevron-up"></span></td>
              </tr>
              <tr className="clock" id="time-clock">
                <td onClick={() => addTime(3600)}>{h1}</td>
                <td>:</td>
                <td onClick={() => addTime(600)}>{m10}</td>
                <td onClick={() => addTime(60)}>{m1}</td>
                <td>:</td>
                <td onClick={() => addTime(10)}>{s10}</td>
                <td onClick={() => addTime(1)}>{s1}</td>
              </tr>
              <tr className="arrows" id="bottom-arrows">
                <td id="down1" onClick={() => addTime(-3600)}><span className="glyphicon glyphicon-chevron-down"></span></td>
                <td></td>
                <td id="down2" onClick={() => addTime(-600)}><span className="glyphicon glyphicon-chevron-down"></span></td>
                <td id="down3" onClick={() => addTime(-60)}><span className="glyphicon glyphicon-chevron-down"></span></td>
                <td></td>
                <td id="down4" onClick={() => addTime(-10)}><span className="glyphicon glyphicon-chevron-down"></span></td>
                <td id="down5" onClick={() => addTime(-1)}><span className="glyphicon glyphicon-chevron-down"></span></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

