import React, { FC, useState } from 'react';
// import { useQueryParam, StringParam } from "use-query-params";

import { Time } from 'models';
// import { } from 'elements';

import { HeaderComponent } from './0-header';
import { DistanceComponent } from './1-distance';
import { TimeInputComponent } from './2-time-in';
import { SplitComponent } from './3-split';
import { TimeOutputComponent } from './4-time-out';
import { AdComponent } from './5-ad';
import * as Style from './style.module.scss';

export const MainComponent: FC = () => {

  // distance
  const [raceName, setRaceName] = useState<string>('5K');
  const [distanceMode, setDisanceMode] = useState<boolean>(false);
  const [distance, setDistance] = useState<number>(0);
  const [unit, setUnit] = useState<'m' | 'k'>('m');

  // time
  const [timeIn, setTimeIn] = useState<number>(0);

  // split
  const [splitName, setSplitName] = useState<string>('MILE');
  const [paceMode, setPaceMode] = useState<boolean>(false);

  // TODO: load data from url params
  // TODO: store cookies based on input

  const toggleUnit = () => {
    switch (unit) {
      case 'm':
        setUnit('k');
        break;
      case 'k':
      default:
        setUnit('m');
    };
  };

  const timeOut = Time.calcTime({
    timeIn,
    raceName,
    distance,
    distanceMode,
    splitName,
    paceMode,
    unit
  });

  return (
    <main className={Style.app}>
      <div className="container">
        <HeaderComponent />
        <DistanceComponent
          raceName={raceName}
          setRaceName={(n: string) => setRaceName(n)}
          distance={distance}
          setDistance={(d: number) => setDistance(d)}
          distanceMode={distanceMode}
          toggleDistanceMode={() => setDisanceMode(!distanceMode)}
          unit={unit}
          toggleUnit={toggleUnit}
        />
        <TimeInputComponent
          timeIn={timeIn}
          setTimeIn={(t: number) => setTimeIn(t)}
          paceMode={paceMode}
          togglePaceMode={() => setPaceMode(!paceMode)}
        />
        <SplitComponent
          splitName={splitName}
          setSplitName={(n: string) => setSplitName(n)}
        />
        <TimeOutputComponent
          timeOut={timeOut}
        />
        <AdComponent />
      </div>
    </main>
  )
}
