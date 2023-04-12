import React, { FC } from 'react';
import { Navbar } from './Components/Navbar';
import { GameImage } from './Components/GameImage';


const App: FC = () => {

  return (
    <div>
      <Navbar/>
      <GameImage/>
    </div>
  );
}

export default App;
