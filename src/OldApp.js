import React from 'react';
import Title from './components/Title';
import HoraCerta from './components/HoraCerta';
import Alerts from './components/Alerts';

function App() {
  return (
    <div className="App">
      <Title color="red" backgroundColor="black">Olá mundo</Title>      
      <Title color="blue" backgroundColor="green">Olá mundo</Title>      
      <HoraCerta />
      <Alerts />
    </div>
  );
}

export default App;
