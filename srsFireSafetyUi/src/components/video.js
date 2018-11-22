import "../../node_modules/video-react/dist/video-react.css";
import React from 'react';
import { Player } from 'video-react';

export default (props) => {
  return (
    <Player
      playsInline
      poster="./exhibition/1.jpg"
      src="./videos/1.mp4"
      width="640px"
      height="360px"
    />
  );
};