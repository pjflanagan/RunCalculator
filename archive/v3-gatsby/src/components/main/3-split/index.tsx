import { Distance } from 'models';
import React, { FC, useState } from 'react';

import * as Style from './style.module.scss';

type SplitComponentProps = {
  splitName: string;
  setSplitName: (n: string) => void;
}

export const SplitComponent: FC<SplitComponentProps> = ({
  splitName,
  setSplitName,
}) => {

  const onSelect = (selectedSplitName: string) => {
    setSplitName(selectedSplitName);
  }

  return (
    <div className="item light" id="split-item">
      <table>
        <tr>
          <td className="title">{'SPLIT'}</td>
          <td className="divider"><div className="bar"></div></td>
          <td>
            <table id="split-table">
              <tr>
                {/* ontouchstart */}
                {/* TODO: displayed split className */}
                <td id="split0" onClick={() => onSelect(Distance.SPLITS[0].name)}>{Distance.SPLITS[0].name}</td>
                <td id="split1" onClick={() => onSelect(Distance.SPLITS[1].name)}>{Distance.SPLITS[1].name}</td>
                <td id="split2" onClick={() => onSelect(Distance.SPLITS[2].name)}>{Distance.SPLITS[2].name}</td>
                <td id="split3" onClick={() => onSelect(Distance.SPLITS[3].name)}>{Distance.SPLITS[3].name}</td>
                <td id="split4" onClick={() => onSelect(Distance.SPLITS[4].name)}>{Distance.SPLITS[4].name}</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

