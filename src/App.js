import React from 'react';
import Header from '../src/Components/Header';
import Settings from '../src/Components/Settings';
import Combat from '../src/Components/Combat';
import CombatLog from '../src/Components/CombatLog';
import Options from '../src/Components/Options';

function App() {
  return (
    <div id="app">

      {/* Top Settings, Options, etc */}
      <Header>
        <Settings />
      </Header>
      <Options />

      {/* Combat */}
      <Combat>
        <CombatLog />
      </Combat>

      {/* Loot */}

    </div>
  );
}

export default App;
