import React from 'react';
import styled from 'styled-components';

const A1StatsActual = styled.div`
  display: inherit;
  position: absolute;
  color: white;
  text-shadow: 2px 2px 5px black;
  top: 0;
  right: 100%;
  border: 1px solid black;
  width: 400%;
  background-color: rgba(0, 50, 149, 0.9);
  height: 105.5%;
  border: 3px solid black;
  font-size: 2.5em;
`;

const A2StatsActual = styled.div`
  display: inherit;
  position: absolute;
  color: white;
  text-shadow: 2px 2px 5px black;
  top: 0;
  right: 100%;
  border: 1px solid black;
  width: 400%;
  background-color: rgba(0, 50, 149, 0.9);
  height: 105.5%;
  border: 3px solid black;
  font-size: 2.5em;
`;

const A3StatsActual = styled.div`
  display: inherit;
  position: absolute;
  color: white;
  text-shadow: 2px 2px 5px black;
  top: 0;
  right: 100%;
  border: 1px solid black;
  width: 400%;
  background-color: rgba(0, 50, 149, 0.9);
  height: 105.5%;
  border: 3px solid black;
  font-size: 2.5em;
`;

const A4StatsActual = styled.div`
  display: inherit;
  position: absolute;
  color: white;
  text-shadow: 2px 2px 5px black;
  top: 0;
  right: 100%;
  border: 1px solid black;
  width: 400%;
  background-color: rgba(0, 50, 149, 0.9);
  height: 105.5%;
  border: 3px solid black;
  font-size: 2.5em;
`;

const A5StatsActual = styled.div`
  display: inherit;
  position: absolute;
  color: white;
  text-shadow: 2px 2px 5px black;
  top: 0;
  right: 100%;
  border: 1px solid black;
  width: 400%;
  background-color: rgba(0, 50, 149, 0.9);
  height: 105.5%;
  border: 3px solid black;
  font-size: 2.5em;
`;

const A6StatsActual = styled.div`
  display: inherit;
  position: absolute;
  color: white;
  text-shadow: 2px 2px 5px black;
  top: 0;
  right: 100%;
  border: 1px solid black;
  width: 400%;
  background-color: rgba(0, 50, 149, 0.9);
  height: 105.5%;
  border: 3px solid black;
  font-size: 2.5em;
`;
const ShowStats = (props) => {

  return (
    <div className="ShowStats">

      {/* 1 The Stats Screen - Hover to show, Click to sticky */}
        <div className="statsLeftActual" id="a1StatsActual"><br></br>
          {
            props.stats.a1StatsHover || props.stats.a1StatsActive ? 

            //If either Hover/Click is active, let's show that toons Stat screen with a styled compTwonent!
            <A1StatsActual>
              {`Level ${props.allStats.allyLevels[0]} ${props.allStats.allyClass[0]}`}
              
              <div className="insideStats" id="a1InsideStats">
                <p><span className="underline">SKILL PTS</span> <br /><span className="statsLarge">TBD</span></p>
                <p><span className="underline">DAMAGE</span> <br /><span className="statsLarge">{props.allStats.allyOneDamage.toPrecision(4)}</span></p>
                <p><span className="underline">SPEED</span> <br /><span className="statsLarge">{props.allStats.allyOneAttackSpeed.toPrecision(4)}</span></p>
                <p><span className="underline">DEFENSE</span> <br /><span className="statsLarge">{props.allStats.allyOneDefense.toPrecision(4)}</span></p>
                <p><span className="underline">HEALTH</span> <br /><span className="statsLarge">{props.allStats.allyOneHealth.toPrecision(4)}</span></p>                
                <p><span className="underline">MAX HEALTH</span> <br /><span className="statsLarge">{props.allStats.allyOneMaxHealth.toPrecision(4)}</span></p>
                <p><span className="underline">XP</span> <br /><span className="statsLarge">{props.allStats.allyOneExp.toPrecision(4)}</span></p>
                <p><span className="underline">MAX XP</span> <br /><span className="statsLarge">{props.allStats.allyOneMaxExp.toPrecision(4)}</span></p>
              </div>
              
            </A1StatsActual>
            : 
            props.stats.a1StatsActive
          }
        </div>

      {/* 2 The Stats Screen - Hover to show, Click to sticky */}
      <div className="statsLeftActual" id="a2StatsActual"><br></br>
          {
            props.stats.a2StatsHover || props.stats.a2StatsActive ? 

            //If either Hover/Click is active, let's show that toons Stat screen with a styled compTwonent!
            <A2StatsActual>
              {`Level ${props.allStats.allyLevels[1]} ${props.allStats.allyClass[1]}`}
              
              <div className="insideStats" id="a2InsideStats">
                <p><span className="underline">SKILL PTS</span> <br /><span className="statsLarge">TBD</span></p>
                <p><span className="underline">DAMAGE</span> <br /><span className="statsLarge">{props.allStats.allyTwoDamage.toPrecision(4)}</span></p>
                <p><span className="underline">SPEED</span> <br /><span className="statsLarge">{props.allStats.allyTwoAttackSpeed.toPrecision(4)}</span></p>
                <p><span className="underline">DEFENSE</span> <br /><span className="statsLarge">{props.allStats.allyTwoDefense.toPrecision(4)}</span></p>
                <p><span className="underline">HEALTH</span> <br /><span className="statsLarge">{props.allStats.allyTwoHealth.toPrecision(4)}</span></p>                
                <p><span className="underline">MAX HEALTH</span> <br /><span className="statsLarge">{props.allStats.allyTwoMaxHealth.toPrecision(4)}</span></p>
                <p><span className="underline">XP</span> <br /><span className="statsLarge">{props.allStats.allyTwoExp.toPrecision(4)}</span></p>
                <p><span className="underline">MAX XP</span> <br /><span className="statsLarge">{props.allStats.allyTwoMaxExp.toPrecision(4)}</span></p>
              </div>
              
            </A2StatsActual>
            : 
            props.stats.a2StatsActive
          }
        </div>

      {/* 3 The Stats Screen - Hover to show, Click to sticky */}
      <div className="statsLeftActual" id="a3StatsActual"><br></br>
          {
            props.stats.a3StatsHover || props.stats.a3StatsActive ? 

            //If either Hover/Click is active, let's show that toons Stat screen with a styled compThrnent!
            <A3StatsActual>
              {`Level ${props.allStats.allyLevels[2]} ${props.allStats.allyClass[2]}`}
              
              <div className="insideStats" id="a3InsideStats">
                <p><span className="underline">SKILL PTS</span> <br /><span className="statsLarge">TBD</span></p>
                <p><span className="underline">DAMAGE</span> <br /><span className="statsLarge">{props.allStats.allyThrDamage.toPrecision(4)}</span></p>
                <p><span className="underline">SPEED</span> <br /><span className="statsLarge">{props.allStats.allyThrAttackSpeed.toPrecision(4)}</span></p>
                <p><span className="underline">DEFENSE</span> <br /><span className="statsLarge">{props.allStats.allyThrDefense.toPrecision(4)}</span></p>
                <p><span className="underline">HEALTH</span> <br /><span className="statsLarge">{props.allStats.allyThrHealth.toPrecision(4)}</span></p>                
                <p><span className="underline">MAX HEALTH</span> <br /><span className="statsLarge">{props.allStats.allyThrMaxHealth.toPrecision(4)}</span></p>
                <p><span className="underline">XP</span> <br /><span className="statsLarge">{props.allStats.allyThrExp.toPrecision(4)}</span></p>
                <p><span className="underline">MAX XP</span> <br /><span className="statsLarge">{props.allStats.allyThrMaxExp.toPrecision(4)}</span></p>
              </div>
              
            </A3StatsActual>
            : 
            props.stats.a3StatsActive
          }
        </div>


      {/* 4 The Stats Screen - Hover to show, Click to sticky */}
      <div className="statsLeftActual" id="a4StatsActual"><br></br>
          {
            props.stats.a4StatsHover || props.stats.a4StatsActive ? 

            //If either Hover/Click is active, let's show that toons Stat screen with a styled compFounent!
            <A4StatsActual>
              {`Level ${props.allStats.allyLevels[3]} ${props.allStats.allyClass[3]}`}
              
              <div className="insideStats" id="a4InsideStats">
                <p><span className="underline">SKILL PTS</span> <br /><span className="statsLarge">TBD</span></p>
                <p><span className="underline">DAMAGE</span> <br /><span className="statsLarge">{props.allStats.allyFouDamage.toPrecision(4)}</span></p>
                <p><span className="underline">SPEED</span> <br /><span className="statsLarge">{props.allStats.allyFouAttackSpeed.toPrecision(4)}</span></p>
                <p><span className="underline">DEFENSE</span> <br /><span className="statsLarge">{props.allStats.allyFouDefense.toPrecision(4)}</span></p>
                <p><span className="underline">HEALTH</span> <br /><span className="statsLarge">{props.allStats.allyFouHealth.toPrecision(4)}</span></p>                
                <p><span className="underline">MAX HEALTH</span> <br /><span className="statsLarge">{props.allStats.allyFouMaxHealth.toPrecision(4)}</span></p>
                <p><span className="underline">XP</span> <br /><span className="statsLarge">{props.allStats.allyFouExp.toPrecision(4)}</span></p>
                <p><span className="underline">MAX XP</span> <br /><span className="statsLarge">{props.allStats.allyFouMaxExp.toPrecision(4)}</span></p>
              </div>
              
            </A4StatsActual>
            : 
            props.stats.a4StatsActive
          }
        </div>

      {/* 5 The Stats Screen - Hover to show, Click to sticky */}
      <div className="statsLeftActual" id="a5StatsActual"><br></br>
          {
            props.stats.a5StatsHover || props.stats.a5StatsActive ? 

            //If either Hover/Click is active, let's show that toons Stat screen with a styled compFivnent!
            <A5StatsActual>
              {`Level ${props.allStats.allyLevels[4]} ${props.allStats.allyClass[4]}`}
              
              <div className="insideStats" id="a5InsideStats">
                <p><span className="underline">SKILL PTS</span> <br /><span className="statsLarge">TBD</span></p>
                <p><span className="underline">DAMAGE</span> <br /><span className="statsLarge">{props.allStats.allyFivDamage.toPrecision(4)}</span></p>
                <p><span className="underline">SPEED</span> <br /><span className="statsLarge">{props.allStats.allyFivAttackSpeed.toPrecision(4)}</span></p>
                <p><span className="underline">DEFENSE</span> <br /><span className="statsLarge">{props.allStats.allyFivDefense.toPrecision(4)}</span></p>
                <p><span className="underline">HEALTH</span> <br /><span className="statsLarge">{props.allStats.allyFivHealth.toPrecision(4)}</span></p>                
                <p><span className="underline">MAX HEALTH</span> <br /><span className="statsLarge">{props.allStats.allyFivMaxHealth.toPrecision(4)}</span></p>
                <p><span className="underline">XP</span> <br /><span className="statsLarge">{props.allStats.allyFivExp.toPrecision(4)}</span></p>
                <p><span className="underline">MAX XP</span> <br /><span className="statsLarge">{props.allStats.allyFivMaxExp.toPrecision(4)}</span></p>
              </div>
              
            </A5StatsActual>
            : 
            props.stats.a5StatsActive
          }
        </div>

      {/* 5 The Stats Screen - Hover to show, Click to sticky */}
      <div className="statsLeftActual" id="a6StatsActual"><br></br>
          {
            props.stats.a6StatsHover || props.stats.a6StatsActive ? 

            //If either Hover/Click is active, let's show that toons Stat screen with a styled compSixnent!
            <A6StatsActual>
              {`Level ${props.allStats.allyLevels[5]} ${props.allStats.allyClass[5]}`}
              
              <div className="insideStats" id="a6InsideStats">
                <p><span className="underline">SKILL PTS</span> <br /><span className="statsLarge">TBD</span></p>
                <p><span className="underline">DAMAGE</span> <br /><span className="statsLarge">{props.allStats.allySixDamage.toPrecision(4)}</span></p>
                <p><span className="underline">SPEED</span> <br /><span className="statsLarge">{props.allStats.allySixAttackSpeed.toPrecision(4)}</span></p>
                <p><span className="underline">DEFENSE</span> <br /><span className="statsLarge">{props.allStats.allySixDefense.toPrecision(4)}</span></p>
                <p><span className="underline">HEALTH</span> <br /><span className="statsLarge">{props.allStats.allySixHealth.toPrecision(4)}</span></p>                
                <p><span className="underline">MAX HEALTH</span> <br /><span className="statsLarge">{props.allStats.allySixMaxHealth.toPrecision(4)}</span></p>
                <p><span className="underline">XP</span> <br /><span className="statsLarge">{props.allStats.allySixExp.toPrecision(4)}</span></p>
                <p><span className="underline">MAX XP</span> <br /><span className="statsLarge">{props.allStats.allySixMaxExp.toPrecision(4)}</span></p>
              </div>

            </A6StatsActual>
            : 
            props.stats.a6StatsActive
          }
        </div>
    </div>
  );
}

export default ShowStats;