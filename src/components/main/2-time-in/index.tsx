import React, { FC, useState } from 'react';

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
  const [h1, m10, m1, s10, s1] = makeDisplayTime(timeIn);

  const addTime = (deltaSeconds) => {
    setTimeIn(timeIn + deltaSeconds);
  }

  return (
    <div className="item light" id="time-item">
      <table>
        <tr>
          {/* ontouchstart="event.preventDefault();togglePaceMode();" */}
          <td className="title hover" id="item-2-title" onClick={togglePaceMode}>{labelDisplay}</td>
          <td className="divider"><div className="bar"></div></td>
          <td>
            <table className="hover" id="time-table">
              <tr className="arrows">
                <td id="up1" onClick="selectTime(+1,'h1');" ontouchstart="event.preventDefault();selectTime(+1,'h1');"><span className="glyphicon glyphicon-chevron-up"></span></td>
                <td></td>
                <td id="up2" onClick="selectTime(+1,'m10');" ontouchstart="event.preventDefault();selectTime(+1,'m10');"><span className="glyphicon glyphicon-chevron-up"></span></td>
                <td id="up3" onClick="selectTime(+1,'m1');" ontouchstart="event.preventDefault();selectTime(+1,'m1');"><span className="glyphicon glyphicon-chevron-up"></span></td>
                <td></td>
                <td id="up4" onClick="selectTime(+1,'s10');" ontouchstart="event.preventDefault();selectTime(+1,'s10');"><span className="glyphicon glyphicon-chevron-up"></span></td>
                <td id="up5" onClick="selectTime(+1,'s1');" ontouchstart="event.preventDefault();selectTime(+1,'s1');"><span className="glyphicon glyphicon-chevron-up"></span></td>
              </tr>
              <tr className="clock" id="time-clock">
                <td onClick="selectTime(+1,'h1');" id="h1" ontouchstart="event.preventDefault();selectTime(+1,'h1');">0</td>
                <td>:</td>
                <td onClick="selectTime(+1,'m10');" id="m10" ontouchstart="event.preventDefault();selectTime(+1,'m10');">0</td>
                <td onClick="selectTime(+1,'m1');" id="m1" ontouchstart="event.preventDefault();selectTime(+1,'m1');">0</td>
                <td>:</td>
                <td onClick="selectTime(+1,'s10');" id="s10" ontouchstart="event.preventDefault();selectTime(+1,'s10');">0</td>
                <td onClick="selectTime(+1,'s1');" id="s1" ontouchstart="event.preventDefault();selectTime(+1,'s1');">0</td>
              </tr>
              <tr className="arrows" id="bottom-arrows">
                <td id="down1" onClick="selectTime(-1,'h1');" ontouchstart="event.preventDefault();selectTime(-1,'h1');"><span className="glyphicon glyphicon-chevron-down"></span></td>
                <td></td>
                <td id="down2" onClick="selectTime(-1,'m10');" ontouchstart="event.preventDefault();selectTime(-1,'m10');"><span className="glyphicon glyphicon-chevron-down"></span></td>
                <td id="down3" onClick="selectTime(-1,'m1');" ontouchstart="event.preventDefault();selectTime(-1,'m1');"><span className="glyphicon glyphicon-chevron-down"></span></td>
                <td></td>
                <td id="down4" onClick="selectTime(-1,'s10');" ontouchstart="event.preventDefault();selectTime(-1,'s10');"><span className="glyphicon glyphicon-chevron-down"></span></td>
                <td id="down5" onClick="selectTime(-1,'s1');" ontouchstart="event.preventDefault();selectTime(-1,'s1');"><span className="glyphicon glyphicon-chevron-down"></span></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

