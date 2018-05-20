import "../../node_modules/video-react/dist/video-react.css";
import React from 'react';
import { Player } from 'video-react';
let images = require.context('../images', true);

export default (props) => {
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src="./videos/1.mp4"
    />
  );
};