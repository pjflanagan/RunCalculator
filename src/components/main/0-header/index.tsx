import React, { FC, useState } from 'react';

import { Header } from 'elements';

import * as Style from './style.module.scss';

export const HeaderComponent: FC = () => {
  return (
    <Header>
      <a href="//runcalculator.flanny.app/about">
        {'RUN CALCULATOR'}
      </a>
    </Header>
  );
};

