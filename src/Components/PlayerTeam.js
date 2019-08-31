import React from 'react';


const PlayerTeam = (props) => {

  return (
    <div className="allCombatDisplayText">
      <div className="playerTeam">

        {/* Ally One - Name and Stats */}
        <div className={props.allyActive[0] ? 'player' : 'playerInactive player'} id="player1">
          {'Level '}  {props.allyLevels[0]} 
          &nbsp;{props.allyClass[0]}
        </div>
        <div className={props.allyActive[1] ? 'player' : 'playerInactive player'} id="player2">
          {'Level '}  {props.allyLevels[1]} 
          &nbsp;{props.allyClass[1]} 
        </div>
        <div className={props.allyActive[2] ? 'player' : 'playerInactive player'} id="player3">
          {'Level '}  {props.allyLevels[2]} 
          &nbsp;{props.allyClass[2]} 
        </div>
        <div className={props.allyActive[3] ? 'player' : 'playerInactive player'} id="player4">
          {'Level '}  {props.allyLevels[3]} 
          &nbsp;{props.allyClass[3]}
        </div>
        <div className={props.allyActive[4] ? 'player' : 'playerInactive player'} id="player5">
          {'Level '}  {props.allyLevels[4]} 
          &nbsp;{props.allyClass[4]} 
        </div>
        <div className={props.allyActive[5] ? 'player' : 'playerInactive player'} id="player6">
          {'Level '}  {props.allyLevels[5]} 
         &nbsp;{props.allyClass[5]} 
        </div>
      </div>
      <div className="enemyTeam">
        <div className={props.enemyActive[0] ? 'enemy' : 'enemyInactive enemy'} id="enemy1">
          {'Level '}  {props.enemyLevels[0]} 
          &nbsp;{props.enemyClass[0]}
        </div>
        <div className={props.enemyActive[1] ? 'enemy' : 'enemyInactive enemy'} id="enemy2">
          {'Level '}  {props.enemyLevels[1]} 
          &nbsp;{props.enemyClass[1]} 
        </div>
        <div className={props.enemyActive[2] ? 'enemy' : 'enemyInactive enemy'} id="enemy3">
          {'Level '}  {props.enemyLevels[2]} 
          &nbsp;{props.enemyClass[2]} 
        </div>
        <div className={props.enemyActive[3] ? 'enemy' : 'enemyInactive enemy'} id="enemy4">
          {'Level '}  {props.enemyLevels[3]} 
          &nbsp;{props.enemyClass[3]} 
        </div>
        <div className={props.enemyActive[4] ? 'enemy' : 'enemyInactive enemy'} id="enemy5">
          {'Level '}  {props.enemyLevels[4]} 
          &nbsp;{props.enemyClass[4]} 
        </div>
        <div className={props.enemyActive[5] ? 'enemy' : 'enemyInactive enemy'} id="enemy6">
          {'Level '}  {props.enemyLevels[5]} 
          &nbsp;{props.enemyClass[5]} 
        </div>
      </div>
      {props.children}
    </div>
  );
}

export default PlayerTeam;