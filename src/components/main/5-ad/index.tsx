
import React, { FC, useState } from 'react';

import * as Style from './style.module.scss';

// TODO: there is probably a plugin or lib for this
export const AdComponent: FC = () => {
  return (
    <div className="item" id="ad">
      <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <ins className="adsbygoogle"
        style={{
          display: 'block'
        }}
        data-ad-client="ca-pub-8781416766784863"
        data-ad-slot="1512526032"
        data-ad-format="auto"></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({ });
      </script>
    </div>
  );
};



