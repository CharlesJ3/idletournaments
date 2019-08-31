import React from 'react';
import Header from '../src/Components/Header';
import Settings from '../src/Components/Settings';
import Options from '../src/Components/Options';
import AllToons from '../src/Components/AllToons';

function App() {
  return (
    <div id="app">

      {/* Top Settings, Options, etc */}
      <Header>
        <Settings />
      </Header>
      <Options />

      {/* Combat */}
      <AllToons>

      </AllToons>
      {/* Loot */}

    </div>
  );
}

export default App;
