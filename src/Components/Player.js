// HlsPlayer.js
import React from 'react';
import HlsPlayer from 'react-hls-player';

const Player = ({ url }) => {
  return (
    <HlsPlayer
      src={url}
      autoPlay={true}
      controls={true}
      width="50%"
      height="40%"
      preload='auto'
    />
  );
};

export default Player;
