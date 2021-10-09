import React, { FC } from 'react';
import classNames from 'classnames';

import * as Style from './style.module.scss';

export const Container: FC = ({
  children
}) => {
  return (
    <div className={Style.container}>
      {children}
    </div>
  );
}

export const Row: FC = ({
  children
}) => {
  const className = classNames(Style.containerRow);
  return (
    <div className={className}>
      {children}
    </div>
  );
}