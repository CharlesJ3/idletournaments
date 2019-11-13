import React from 'react';

const Header = (props) => {

  const gameInfo = {
    version: '0.1a',
    title: 'Idle Tournament',
    description: '',
  }

  return (
    <div className="header">
      <h3>
        {gameInfo.version}
        <span className="titleFun">        |-|-|-|-|-|-|-|</span>
        {gameInfo.title}
        <span className="titleFun">|-|-|-|-|-|</span>
        Settings
      </h3>
      {props.children}
    </div>
  );
}

export default Header;