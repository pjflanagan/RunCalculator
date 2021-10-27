import React, { FC, useState } from 'react';

// import { Header } from 'elements';

import * as Style from './style.module.scss';

export const HeaderComponent: FC = () => {
  return (
    <div className={Style.header}>
      <a href="/about">
        {'RUN CALCULATOR'}
      </a>
    </div>
  );
};
