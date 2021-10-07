import React, { FC, useState } from 'react';
import { useQueryParam, StringParam } from "use-query-params";

import { } from 'models';
import { } from 'elements';

import * as Style from './style.module.scss';

const MainComponent: FC = () => {

  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  const [raceIndex, setRaceIndex] = useState<number>(7);
  const [splitIndex, setSplitIndex] = useState<number>(4);
  const [paceMode, setPaceMode] = useState<boolean>(false);
  const [distanceMode, setDisanceMode] = useState<boolean>(false);
  const [unit, setUnit] = useState<'m' | 'k'>('m');



  return (
    <main className={Style.app}>

    </main>
  )
}


export { MainComponent }
