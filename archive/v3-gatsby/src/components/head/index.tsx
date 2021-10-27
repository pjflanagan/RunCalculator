import React, { FC } from 'react';
import { Helmet } from "react-helmet";

const TITLE = 'Run Calculator';
const DESCRIPTION = 'A running pace calculator designed for runners who want to know their splits for events from the 800 up through the marathon. Just enter in the event you are running, the time you want, and the split you want to see, and the calculator will display your pace.';
const ROOT = "https://runcalculator.flanny.app";
const IMG = `${ROOT}/img/social/social.png`;
const IMG_TW = `${ROOT}/img/social/social-tw.png`;

const AUTHOR = "Peter James Flanagan";
const HANDLE = "@peterjflan";

export const HeadComponent: FC = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />

      <title>{TITLE}</title>

      {/* Social */}
      <meta name="description" content={DESCRIPTION} />
      <meta name="author" content={AUTHOR} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={IMG} />
      <meta property="og:url" content={ROOT} />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:image:secure_url" content={IMG} />

      {/* Twitter */}
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={HANDLE} />
      <meta name="twitter:creator" content={HANDLE} />
      <meta name="twitter:image" content={IMG_TW} />

    </Helmet>
  );
}
