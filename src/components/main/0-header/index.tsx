import React, { FC, useState } from 'react';

import * as Style from './style.module.scss';

export const HeaderComponent: FC = () => {
  return (
    <header>
      <a href="http://runcalculator.net/about">
        {'RUN CALCULATOR'}
      </a>
    </header>
  );
};

