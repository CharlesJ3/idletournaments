import React from 'react';

const PlayerTeam = (props) => {

  return (
    <div className="playerTeam">
      <div className="player" id="player1">
       {'Level '}  {props.allyLevels.one} 
       &nbsp;{props.allyClass.one}
      </div>
      <div className="player" id="player2">
      {'Level '}  {props.allyLevels.two} 
       &nbsp;{props.allyClass.two} 
      </div>
      <div className="player" id="player3">
      {'Level '}  {props.allyLevels.thr} 
       &nbsp;{props.allyClass.thr} 
      </div>
      <div className="player" id="player4">
      {'Level '}  {props.allyLevels.fou} 
       &nbsp;{props.allyClass.fou} 
      </div>
      <div className="player" id="player5">
      {'Level '}  {props.allyLevels.fiv} 
       &nbsp;{props.allyClass.fiv} 
      </div>
      <div className="player" id="player6">
      {'Level '}  {props.allyLevels.six} 
       &nbsp;{props.allyClass.six} 
      </div>
      {props.children}
    </div>
  );
}

export default PlayerTeam;