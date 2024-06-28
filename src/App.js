// App.js
import React, { useState } from 'react';
import ChannelList from './Components/ChannelList';
import Player from './Components/Player';
import "./App.css";
const App = () => {
  const [currentUrl, setCurrentUrl] = useState('');

  const handlePlay = (url) => {
    setCurrentUrl(url);
  };

  return (
    <div className='App'>
         <div className="app">
        <p>Welcome</p>
      </div>
      <div className='player'>
        <div className='mainPlayer'>
        {currentUrl && <Player url={currentUrl} />}
        </div>

      </div>
      <div className='container'>
      <div class="row">
      <ChannelList onPlay={handlePlay} />
      </div>
      </div>
    </div>
  );
};

export default App;
