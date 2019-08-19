import React from 'react';

const Header = (props) => {

  const gameInfo = {
    version: '0.1c',
    title: 'Idle Tournament',
    description: '',
  }

  return (
    <div className="header">
      <h3>{gameInfo.version} -|- {gameInfo.title} -|- Settings</h3>
      {/* {props.children} */}
    </div>
  );
}

export default Header;