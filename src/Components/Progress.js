import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/*
*  Ally Attack Bars
*/
const ProgressBar = styled.div`
  color: white;
  position: absolute;
  top: -2%;
  left: 0;
  width: 39%;
  height: 4%;
  border: 1px solid black;
  background-color: #222;
  border-radius: 20px;
  box-shadow: 0px 5px 1px black;
`;

const Attack1 = styled.div`
  width: ${props => props.baseAttack}%;
  height: 100%;
  background-color: #6bccf9;
  border-radius: 10px;
  transition: width ${ props => props.baseAttack > 0 ?
    props => props.percentage :
    '.001'
  }s linear;
`;

const ProgressBar2 = styled.div`
  color: white;
  position: absolute;
  top: 16%;
  left: 0;
  width: 39%;
  height: 4%;
  background-color: #222;
  border-radius: 20px;
  box-shadow: 0px 5px 1px black;
`;

const Attack2 = styled.div`
  width: ${props => props.baseAttack}%;
  height: 100%;
  background-color: #6bccf9;
  border-radius: 10px;
  transition: width ${ props => props.baseAttack > 0 ?
    props => props.percentage :
    '.001'
  }s linear;
`;

const ProgressBar3 = styled.div`
  color: white;
  position: absolute;
  top: 34%;
  left: 0;
  width: 39%;
  height: 4%;
  background-color: #222;
  border-radius: 20px;
  box-shadow: 0px 5px 1px black;
`;

const Attack3 = styled.div`
  width: ${props => props.baseAttack}%;
  height: 100%;
  background-color: #6bccf9;
  border-radius: 10px;
  transition: width ${ props => props.baseAttack > 0 ?
    props => props.percentage :
    '.001'
  }s linear;
`;


const ProgressBar4 = styled.div`
  color: white;
  position: absolute;
  top: 52%;
  left: 0;
  width: 39%;
  height: 4%;
  background-color: #222;
  border-radius: 20px;
  box-shadow: 0px 5px 1px black;
`;

const Attack4 = styled.div`
  width: ${props => props.baseAttack}%;
  height: 100%;
  background-color: #6bccf9;
  border-radius: 10px;
  transition: width ${ props => props.baseAttack > 0 ?
    props => props.percentage :
    '.001'
  }s linear;
`;

const ProgressBar5 = styled.div`
  color: white;
  position: absolute;
  top: 70%;
  left: 0;
  width: 39%;
  height: 4%;
  background-color: #222;
  border-radius: 20px;
  box-shadow: 0px 5px 1px black;
`;

const Attack5  = styled.div`
  width: ${props => props.baseAttack}%;
  height: 100%;
  background-color: #6bccf9;
  border-radius: 10px;
  transition: width ${ props => props.baseAttack > 0 ?
    props => props.percentage :
    '.001'
  }s linear;
`;

const ProgressBar6 = styled.div`
  color: white;
  position: absolute;
  top: 88%;
  left: 0;
  width: 39%;
  height: 4%;
  background-color: #222;
  border-radius: 20px;
  box-shadow: 0px 5px 1px black;
`;

const Attack6  = styled.div`
  width: ${props => props.baseAttack}%;
  height: 100%;
  background-color: #6bccf9;
  border-radius: 10px;
  transition: width ${ props => props.baseAttack > 0 ?
    props => props.percentage :
    '.001'
  }s linear;
`;

/*
*  Health Bars Allies
*/

const HealthBar = styled.div`
  color: white;
  position: absolute;
  top: -7%;
  left: 0;
  width: 40%;
  height: 17%;
  background-color: rgba(125,125,0,0.5);
  border: 1px solid black;
  box-shadow: inset 0 0 5px #000;
  z-index: -5;
`;

const Defend1 = styled.div`
  width: ${props => props.healthPerc}%;
  height: 100%;
  background-color: rgba(0,250,0,0.5);
  border: 1px solid black;
  transition: width .60s linear;
  z-index: -5;
`;

const HealthBar2 = styled.div`
  color: white;
  position: absolute;
  top: 11%;
  left: 0;
  width: 40%;
  height: 17%;
  background-color: rgba(125,125,0,0.5);
  box-shadow: inset 0 0 5px #000;
  z-index: -5;
`;

const Defend2 = styled.div`
width: ${props => props.healthPerc}%;
  height: 100%;
  background-color: rgba(0,250,0,0.5);
  border: 1px solid black;
  transition: width .60s linear;
  z-index: -5;
`;

const HealthBar3 = styled.div`
  color: white;
  position: absolute;
  top: 29%;
  left: 0;
  width: 40%;
  height: 17%;
  background-color: rgba(125,125,0,0.5);
  box-shadow: inset 0 0 5px #000;
  z-index: -5;
`;

const Defend3 = styled.div`
width: ${props => props.healthPerc}%;
  height: 100%;
  background-color: rgba(0,250,0,0.5);
  border: 1px solid black;
  transition: width .60s linear;
  z-index: -5;
`;

const HealthBar4 = styled.div`
  color: white;
  position: absolute;
  top: 47%;
  left: 0;
  width: 40%;
  height: 17%;
  background-color: rgba(125,125,0,0.5);
  box-shadow: inset 0 0 5px #000;
  z-index: -5;
`;

const Defend4 = styled.div`
width: ${props => props.healthPerc}%;
  height: 100%;
  background-color: rgba(0,250,0,0.5);
  border: 1px solid black;
  transition: width .60s linear;
  z-index: -5;
`;

const HealthBar5 = styled.div`
  color: white;
  position: absolute;
  top: 65%;
  left: 0;
  width: 40%;
  height: 17%;
  background-color: rgba(125,125,0,0.5);
  box-shadow: inset 0 0 5px #000;
  z-index: -5;
`;

const Defend5 = styled.div`
width: ${props => props.healthPerc}%;
  height: 100%;
  background-color: rgba(0,250,0,0.5);
  border: 1px solid black;
  transition: width .60s linear;
  z-index: -5;
`;

const HealthBar6 = styled.div`
  color: white;
  position: absolute;
  top: 84%;
  left: 0;
  width: 40%;
  height: 17%;
  background-color: rgba(125,125,0,0.5);
  box-shadow: inset 0 0 5px #000;
  z-index: -5;
`;

const Defend6 = styled.div`
width: ${props => props.healthPerc}%;
  height: 100%;
  background-color: rgba(0,250,0,0.5);
  border: 1px solid black;
  transition: width .60s linear;
  z-index: -5;
`;

/*
*  Enemy Attack Bars
*/
const ProgressBarEnemy = styled.div`
  color: white;
  position: absolute;
  top: -2%;
  right: 0;
  width: 39%;
  height: 4%;
  background-color: #222;
  border-radius: 20px;
  box-shadow: 0px 5px 1px black;
`;

const AttackEnemy1 = styled.div`
  width: ${props => props.baseAttack}%;
  height: 100%;
  background: rgba(232, 130, 222);
  backface-visibility: hidden;
  border-radius: 10px;
  transition: width ${ props => props.baseAttack > 0 ?
    props => props.percentage :
    '.001'
  }s linear;
`;

const ProgressBarEnemy2 = styled.div`
  color: white;
  position: absolute;
  top: 16%;
  right: 0;
  width: 39%;
  height: 4%;
  background-color: #222;
  border-radius: 20px;
  box-shadow: 0px 5px 1px black;
`;

const AttackEnemy2 = styled.div`
  width: ${props => props.baseAttack}%;
  height: 100%;
  background-color: maroon;
  border-radius: 10px;
  transition: width ${ props => props.baseAttack > 0 ?
    props => props.percentage :
    '.001'
  }s linear;
`;

const ProgressBarEnemy3 = styled.div`
  color: white;
  position: absolute;
  top: 34%;
  right: 0;
  width: 39%;
  height: 4%;
  background-color: #222;
  border-radius: 20px;
  box-shadow: 0px 5px 1px black;
`;

const AttackEnemy3 = styled.div`
  width: ${props => props.baseAttack}%;
  height: 100%;
  background-color: maroon;
  border-radius: 10px;
  transition: width ${ props => props.baseAttack > 0 ?
    props => props.percentage :
    '.001'
  }s linear;
`;


const ProgressBarEnemy4 = styled.div`
  color: white;
  position: absolute;
  top: 52%;
  right: 0;
  width: 39%;
  height: 4%;
  background-color: #222;
  border-radius: 20px;
  box-shadow: 0px 5px 1px black;
`;

const AttackEnemy4 = styled.div`
  width: ${props => props.baseAttack}%;
  height: 100%;
  background-color: maroon;
  border-radius: 10px;
  transition: width ${ props => props.baseAttack > 0 ?
    props => props.percentage :
    '.001'
  }s linear;
`;

const ProgressBarEnemy5 = styled.div`
  color: white;
  position: absolute;
  top: 70%;
  right: 0;
  width: 39%;
  height: 4%;
  background-color: #222;
  border-radius: 20px;
  box-shadow: 0px 5px 1px black;
`;

const AttackEnemy5  = styled.div`
  width: ${props => props.baseAttack}%;
  height: 100%;
  background-color: maroon;
  border-radius: 10px;
  transition: width ${ props => props.baseAttack > 0 ?
    props => props.percentage :
    '.001'
  }s linear;
`;

const ProgressBarEnemy6 = styled.div`
  color: white;
  position: absolute;
  top: 88%;
  right: 0;
  width: 39%;
  height: 4%;
  background-color: #222;
  border-radius: 20px;
  box-shadow: 0px 5px 1px black;
`;

const AttackEnemy6  = styled.div`
  width: ${props => props.baseAttack}%;
  height: 100%;
  background-color: maroon;
  border-radius: 10px;
  transition: width ${ props => props.baseAttack > 0 ?
    props => props.percentage :
    '.001'
  }s linear;
`;

/*
*  Health Bar Enemys
*/

const HealthBarEnemy = styled.div`
  color: white;
  position: absolute;
  top: -7%;
  right: 0;
  width: 40%;
  height: 17%;
  background-color: rgba(125,125,0,0.5);
  border: 1px solid black;
  box-shadow: inset 0 0 5px #000;
  z-index: -5;
`;

const DefendEnemy1 = styled.div`
  width: ${props => props.healthPerc}%;
  height: 100%;
  background-color: rgba(250,0,15,0.5);
  border: 1px solid black;
  transition: width .60s linear;
  z-index: -5;
`;

const HealthBarEnemy2 = styled.div`
  color: white;
  position: absolute;
  top: 11%;
  right: 0;
  width: 40%;
  height: 17%;
  background-color: rgba(125,125,0,0.5);
  box-shadow: inset 0 0 5px #000;
  z-index: -5;
`;

const DefendEnemy2 = styled.div`
  width: ${props => props.healthPerc}%;
  height: 100%;
  background-color: rgba(250,0,15,0.5);
  border: 1px solid black;
  transition: width .60s linear;
  z-index: -5;
`;

const HealthBarEnemy3 = styled.div`
  color: white;
  position: absolute;
  top: 29%;
  right: 0;
  width: 40%;
  height: 17%;
  background-color: rgba(125,125,0,0.5);
  box-shadow: inset 0 0 5px #000;
  z-index: -5;
`;

const DefendEnemy3 = styled.div`
  width: ${props => props.healthPerc}%;
  height: 100%;
  background-color: rgba(250,0,15,0.5);
  border: 1px solid black;
  transition: width .60s linear;
  z-index: -5;
`;

const HealthBarEnemy4 = styled.div`
  color: white;
  position: absolute;
  top: 47%;
  right: 0;
  width: 40%;
  height: 17%;
  background-color: rgba(125,125,0,0.5);
  box-shadow: inset 0 0 5px #000;
  z-index: -5;
`;

const DefendEnemy4 = styled.div`
  width: ${props => props.healthPerc}%;
  height: 100%;
  background-color: rgba(250,0,15,0.5);
  border: 1px solid black;
  transition: width .60s linear;
  z-index: -5;
`;

const HealthBarEnemy5 = styled.div`
  color: white;
  position: absolute;
  top: 65%;
  right: 0;
  width: 40%;
  height: 17%;
  background-color: rgba(125,125,0,0.5);
  box-shadow: inset 0 0 5px #000;
  z-index: -5;
`;

const DefendEnemy5 = styled.div`
  width: ${props => props.healthPerc}%;
  height: 100%;
  background-color: rgba(250,0,15,0.5);
  border: 1px solid black;
  transition: width .60s linear;
  z-index: -5;
`;

const HealthBarEnemy6 = styled.div`
  color: white;
  position: absolute;
  top: 84%;
  right: 0;
  width: 40%;
  height: 17%;
  background-color: rgba(125,125,0,0.5);
  box-shadow: inset 0 0 5px #000;
  z-index: -5;
`;

const DefendEnemy6 = styled.div`
  width: ${props => props.healthPerc}%;
  height: 100%;
  background-color: rgba(250,0,15,0.5);
  border: 1px solid black;
  transition: width .60s linear;
  z-index: -5;
`;

/*
* All EXP Bars
*/

const ExpBar = styled.div`
  color: white;
  position: absolute;
  top: 6%;
  left: 0;
  width: 22%;
  height: 4%;
  background-color: rgba(30,0,25,0.85);
  border: 1px solid black;
  font-size: .5em;
  box-shadow: inset 0 0 5px #000;
  z-index: -4;
`;

const ExpBarFill1 = styled.div`
  width: ${props => props.expPerc}%;
  height: 100%;
  background-color: rgba(230,0,225,0.5);
  border: 1px solid black;
  transition: width .60s linear;
  z-index: -4;
`;


const ExpBar2 = styled.div`
  color: white;
  position: absolute;
  top: 24%;
  left: 0;
  width: 22%;
  height: 4%;
  background-color: rgba(30,0,25,0.85);
  border: 1px solid black;
  font-size: .5em;
  box-shadow: inset 0 0 5px #000;
  z-index: -4;
`;

const ExpBarFill2 = styled.div`
  width: ${props => props.expPerc}%;
  height: 100%;
  background-color: rgba(230,0,225,0.5);
  border: 1px solid black;
  transition: width .60s linear;
  z-index: -4;
`;

const ExpBar3 = styled.div`
  color: white;
  position: absolute;
  top: 42%;
  left: 0;
  width: 22%;
  height: 4%;
  background-color: rgba(30,0,25,0.85);
  border: 1px solid black;
  font-size: .5em;
  box-shadow: inset 0 0 5px #000;
  z-index: -4;
`;

const ExpBarFill3 = styled.div`
  width: ${props => props.expPerc}%;
  height: 100%;
  background-color: rgba(230,0,225,0.5);
  border: 1px solid black;
  transition: width .60s linear;
  z-index: -4;
`;

const ExpBar4 = styled.div`
  color: white;
  position: absolute;
  top: 60%;
  left: 0;
  width: 22%;
  height: 4%;
  background-color: rgba(30,0,25,0.85);
  border: 1px solid black;
  font-size: .5em;
  box-shadow: inset 0 0 5px #000;
  z-index: -4;
`;

const ExpBarFill4 = styled.div`
  width: ${props => props.expPerc}%;
  height: 100%;
  background-color: rgba(230,0,225,0.5);
  border: 1px solid black;
  transition: width .60s linear;
  z-index: -4;
`;
const ExpBar5 = styled.div`
  color: white;
  position: absolute;
  top: 78%;
  left: 0;
  width: 22%;
  height: 4%;
  background-color: rgba(30,0,25,0.85);
  border: 1px solid black;
  font-size: .5em;
  box-shadow: inset 0 0 5px #000;
  z-index: -4;
`;

const ExpBarFill5 = styled.div`
  width: ${props => props.expPerc}%;
  height: 100%;
  background-color: rgba(230,0,225,0.5);
  border: 1px solid black;
  transition: width .60s linear;
  z-index: -4;
`;

const ExpBar6 = styled.div`
  color: white;
  position: absolute;
  top: 97%;
  left: 0;
  width: 22%;
  height: 4%;
  background-color: rgba(30,0,25,0.85);
  border: 1px solid black;
  font-size: .5em;
  box-shadow: inset 0 0 5px #000;
  z-index: -4;
`;

const ExpBarFill6 = styled.div`
  width: ${props => props.expPerc}%;
  height: 100%;
  background-color: rgba(230,0,225,0.5);
  border: 1px solid black;
  transition: width .60s linear;
  z-index: -4;
`;

export default class Progress extends React.Component {

  render() {
    return (
      <div id="allProgressBars">
       <div id="playerTeamLeft">
        {/* Allies */}
        <ProgressBar className={this.props.allyActive[0] ? 'allyActive' : 'playerInactive'}>
          <Attack1 className={this.props.allyActive[0] ? 'allyActive' : 'playerInactive'}
            baseAttack={this.props.allyOneBaseAttack} percentage={this.props.allyOneAttackSpeed}/>
        </ProgressBar>
        <HealthBar className={this.props.allyActive[0] ? 'allyActive' : 'playerInactive'}>
          <Defend1 className={this.props.allyActive[0] ? 'allyActive' : 'playerInactive'}
            healthPerc={((this.props.allyOneHealth / this.props.allyOneMaxHealth * 100).toFixed(0))} />
        </HealthBar>
        <ExpBar className={this.props.allyActive[0] ? 'allyActive' : 'playerInactive'}>
          <ExpBarFill1 className={this.props.allyActive[0] ? 'allyActive' : 'playerInactive'} id="a1Exp"
            expPerc={(this.props.allyOneExp / this.props.allyOneMaxExp* 100).toFixed(2)}>
              <div className='allyExp'>
                {this.props.allyActive[0] ? `${(this.props.allyOneExp).toFixed(2)} / ${(this.props.allyOneMaxExp).toFixed(2)} XP` : ''}
              </div>
          </ExpBarFill1>
        </ExpBar>

        {/* Health Percentage */}
        <div className={(this.props.allyOneHealth / this.props.allyOneMaxHealth * 100) < 25 ? 'allyPerc healthLow' : 'allyPerc' } id="a1Perc">
          {this.props.allyActive[0] ? (this.props.allyOneHealth / this.props.allyOneMaxHealth * 100).toFixed(0) + '% HP' : ''}
        </div>

        {/* DPS */}
        <div className='allyDPS' id="a1DPS">
          {this.props.allyActive[0] ? `${(this.props.allyOneDamage / this.props.allyOneAttackSpeed).toFixed(2)} DPS` : ''}
        </div>

        <ProgressBar2 className={this.props.allyActive[1] ? 'allyActive' : 'playerInactive'}>
          <Attack2 className={this.props.allyActive[1] ? 'allyActive' : 'playerInactive'}
            baseAttack={this.props.allyTwoBaseAttack} percentage={this.props.allyTwoAttackSpeed}/>
        </ProgressBar2>
        <HealthBar2 className={this.props.allyActive[1] ? 'allyActive' : 'playerInactive'}>
          <Defend2 className={this.props.allyActive[1] ? 'allyActive' : 'playerInactive'}
            healthPerc={(this.props.allyTwoHealth / this.props.allyTwoMaxHealth * 100).toFixed(0)} />/>
        </HealthBar2>
        <ExpBar2 className={this.props.allyActive[1] ? 'allyActive' : 'playerInactive'}>
          <ExpBarFill2 className={this.props.allyActive[1] ? 'allyActive' : 'playerInactive'} id="a2Exp"
            expPerc={(this.props.allyTwoExp / this.props.allyTwoMaxExp* 100).toFixed(2)}>
              <div className='allyExp'>
                {this.props.allyActive[1] ? `${(this.props.allyTwoExp).toFixed(2)} / ${(this.props.allyTwoMaxExp).toFixed(2)} XP` : ''}
              </div>
          </ExpBarFill2>
        </ExpBar2>

        {/* Health Percentage */}
        <div className={(this.props.allyTwoHealth / this.props.allyTwoMaxHealth * 100) < 25 ? 'allyPerc healthLow' : 'allyPerc' } id="a2Perc">
          {this.props.allyActive[1] ? (this.props.allyTwoHealth / this.props.allyTwoMaxHealth * 100).toFixed(0) + '% HP' : ''}
        </div>

        {/* DPS */}
        <div className='allyDPS' id="a2DPS">
          {this.props.allyActive[1] ? `${(this.props.allyTwoDamage / this.props.allyTwoAttackSpeed).toFixed(2)} DPS` : ''}
        </div>



        <ProgressBar3 className={this.props.allyActive[2] ? 'allyActive' : 'playerInactive'}>
          <Attack3 className={this.props.allyActive[2] ? 'allyActive' : 'playerInactive'}
            baseAttack={this.props.allyThrBaseAttack} percentage={this.props.allyThrAttackSpeed}/>
        </ProgressBar3>
        <HealthBar3 className={this.props.allyActive[2] ? 'allyActive' : 'playerInactive'}>
          <Defend3 className={this.props.allyActive[2] ? 'allyActive' : 'playerInactive'}
            healthPerc={(this.props.allyThrHealth / this.props.allyThrMaxHealth * 100).toFixed(0)} />/>
        </HealthBar3>
        <ExpBar3 className={this.props.allyActive[2] ? 'allyActive' : 'playerInactive'} id="a3Exp">
          <ExpBarFill3 className={this.props.allyActive[2] ? 'allyActive' : 'playerInactive'}
            expPerc={(this.props.allyThrExp / this.props.allyThrMaxExp* 100).toFixed(2)}>
              <div className='allyExp'>
                {this.props.allyActive[2] ? `${(this.props.allyThrExp).toFixed(2)} / ${(this.props.allyThrMaxExp).toFixed(2)} XP` : ''}
              </div>
          </ExpBarFill3>
        </ExpBar3>

        {/* Health Percentage */}
        <div className={(this.props.allyThrHealth / this.props.allyThrMaxHealth * 100) < 25 ? 'allyPerc healthLow' : 'allyPerc' } id="a3Perc">
          {this.props.allyActive[2] ? ((this.props.allyThrHealth / this.props.allyThrMaxHealth * 100).toFixed(0)) + '% HP' : ''}
        </div>

        {/* DPS */}
        <div className='allyDPS' id="a3DPS">
          {this.props.allyActive[2] ? `${(this.props.allyThrDamage / this.props.allyThrAttackSpeed).toFixed(2)} DPS` : ''}
        </div>

        <ProgressBar4 className={this.props.allyActive[3] ? 'allyActive' : 'playerInactive'}>
          <Attack4 className={this.props.allyActive[3] ? 'allyActive' : 'playerInactive'}
            baseAttack={this.props.allyFouBaseAttack} percentage={this.props.allyFouAttackSpeed}/>
        </ProgressBar4>
        <HealthBar4 className={this.props.allyActive[3] ? 'allyActive' : 'playerInactive'}>
          <Defend4 className={this.props.allyActive[3] ? 'allyActive' : 'playerInactive'}
            healthPerc={(this.props.allyFouHealth / this.props.allyFouMaxHealth * 100).toFixed(0)} />/>
        </HealthBar4>
        <ExpBar4 className={this.props.allyActive[3] ? 'allyActive' : 'playerInactive'} id="a4Exp">
          <ExpBarFill4 className={this.props.allyActive[3] ? 'allyActive' : 'playerInactive'}
            expPerc={(this.props.allyFouExp / this.props.allyFouMaxExp* 100).toFixed(2)}>
              <div className='allyExp'>
                {this.props.allyActive[3] ? `${(this.props.allyFouExp).toFixed(2)} / ${(this.props.allyFouMaxExp).toFixed(2)} XP` : ''}
              </div>
          </ExpBarFill4>
        </ExpBar4>

        {/* Health Percentage */}
        <div className={(this.props.allyFouHealth / this.props.allyFouMaxHealth * 100) < 25 ? 'allyPerc healthLow' : 'allyPerc' } id="a4Perc">
          {this.props.allyActive[3] ? (this.props.allyFouHealth / this.props.allyFouMaxHealth * 100).toFixed(0) + '% HP' : ''}
        </div>

        {/* DPS */}
        <div className='allyDPS' id="a4DPS">
          {this.props.allyActive[3] ? `${(this.props.allyFouDamage / this.props.allyFouAttackSpeed).toFixed(2)} DPS` : ''}
        </div>

        <ProgressBar5 className={this.props.allyActive[4] ? 'allyActive' : 'playerInactive'}>
          <Attack5 className={this.props.allyActive[4] ? 'allyActive' : 'playerInactive'}
            baseAttack={this.props.allyFivBaseAttack} percentage={this.props.allyFivAttackSpeed}/>
        </ProgressBar5>
        <HealthBar5 className={this.props.allyActive[4] ? 'allyActive' : 'playerInactive'}>
          <Defend5 className={this.props.allyActive[4] ? 'allyActive' : 'playerInactive'}
            healthPerc={(this.props.allyFivHealth / this.props.allyFivMaxHealth * 100).toFixed(0)} />
        </HealthBar5>
        <ExpBar5 className={this.props.allyActive[4] ? 'allyActive' : 'playerInactive'} id="a5Exp">
          <ExpBarFill5 className={this.props.allyActive[4] ? 'allyActive' : 'playerInactive'}
            expPerc={(this.props.allyFivExp / this.props.allyFivMaxExp* 100).toFixed(2)}>
              <div className='allyExp'>
                {this.props.allyActive[4] ? `${(this.props.allyFivExp).toFixed(2)} / ${(this.props.allyFivMaxExp).toFixed(2)} XP` : ''}
              </div>
          </ExpBarFill5>
        </ExpBar5>

        {/* Health Percentage */}
        <div className={(this.props.allyFivHealth / this.props.allyFivMaxHealth * 100) < 25 ? 'allyPerc healthLow' : 'allyPerc' } id="a5Perc">
          {this.props.allyActive[4] ? (this.props.allyFivHealth / this.props.allyFivMaxHealth * 100).toFixed(0) + '% HP' : ''}
        </div>

        {/* DPS */}
        <div className='allyDPS' id="a5DPS">
          {this.props.allyActive[4] ? `${(this.props.allyFivDamage / this.props.allyFivAttackSpeed).toFixed(2)} DPS` : ''}
        </div>

        <ProgressBar6 className={this.props.allyActive[5] ? 'allyActive' : 'playerInactive'}>
          <Attack6 className={this.props.allyActive[5] ? 'allyActive' : 'playerInactive'}
            baseAttack={this.props.allySixBaseAttack} percentage={this.props.allySixAttackSpeed}/>
        </ProgressBar6>
        <HealthBar6 className={this.props.allyActive[5] ? 'allyActive' : 'playerInactive'}>
          <Defend6 className={this.props.allyActive[5] ? 'allyActive' : 'playerInactive'}
            healthPerc={(this.props.allySixHealth / this.props.allySixMaxHealth * 100).toFixed(0)} />/>
        </HealthBar6>
        <ExpBar6 className={this.props.allyActive[5] ? 'allyActive' : 'playerInactive'} id="a6Exp">
          <ExpBarFill6 className={this.props.allyActive[5] ? 'allyActive' : 'playerInactive'}
            expPerc={(this.props.allySixExp / this.props.allySixMaxExp* 100).toFixed(2)}>
              <div className='allyExp'>
                {this.props.allyActive[5] ? `${(this.props.allySixExp).toFixed(2)} / ${(this.props.allySixMaxExp).toFixed(2)} XP` : ''}
              </div>
          </ExpBarFill6>
        </ExpBar6>

        {/* Health Percentage */}
        <div className={(this.props.allySixHealth / this.props.allySixMaxHealth * 100) < 25 ? 'allyPerc healthLow' : 'allyPerc' } id="a6Perc">
          {this.props.allyActive[5] ? (this.props.allySixHealth / this.props.allySixMaxHealth * 100).toFixed(0) + '% HP' : ''}
        </div>

        {/* DPS */}
        <div className='allyDPS' id="a6DPS">
          {this.props.allyActive[5] ? `${(this.props.allySixDamage / this.props.allySixAttackSpeed).toFixed(2)} DPS` : ''}
        </div>

      </div>
      <div id="enemyTeamRight">


      {/* Enemies */}
        <ProgressBarEnemy className={this.props.enemyActive[0] ? 'rotateMe' : 'enemyInactive rotateMe'} >
          <AttackEnemy1 className={this.props.enemyActive[0] ? 'rotateMe' : 'enemyInactive rotateMe'}
            baseAttack={this.props.enemyOneBaseAttack} percentage={this.props.enemyOneAttackSpeed}/>
        </ProgressBarEnemy>
        <HealthBarEnemy className={this.props.enemyActive[0] ? 'rotateMe' : 'enemyInactive rotateMe'}>
          <DefendEnemy1 className={this.props.enemyActive[0] ? 'rotateMe' : 'enemyInactive rotateMe'}
            healthPerc={(((this.props.enemyOneHealth) / (this.props.enemyOneMaxHealth)) * 100).toFixed(2)} />
        </HealthBarEnemy>

        {/* Health Percentage */}
        <div className={(this.props.enemyOneHealth / this.props.enemyOneMaxHealth * 100) < 25 ? 'enemyPerc healthLow' : 'enemyPerc' } id="e1Perc">
          {this.props.enemyActive[0] ? ((this.props.enemyOneHealth / this.props.enemyOneMaxHealth) * 100).toFixed(2) + '% HP' : ''}
        </div>

        {/* Health / Max Health */}
        <div className='enemyHealth' id="e1Health">
          {this.props.enemyActive[0] ? `${(this.props.enemyOneHealth).toFixed(2)} HP` : ''}
        </div>

        {/* DPS */}
        <div className='enemyDPS' id="e1DPS">
          {this.props.enemyActive[0] ? `${(this.props.enemyOneDamage / this.props.enemyOneAttackSpeed).toFixed(2)} DPS` : ''}
        </div>

        <ProgressBarEnemy2 className={this.props.enemyActive[1] ? 'rotateMe' : 'enemyInactive rotateMe'}>
          <AttackEnemy2 className={this.props.enemyActive[1] ? 'rotateMe' : 'enemyInactive rotateMe'}
            baseAttack={this.props.enemyTwoBaseAttack} percentage={this.props.enemyTwoAttackSpeed}/>
        </ProgressBarEnemy2>
        <HealthBarEnemy2 className={this.props.enemyActive[1] ? 'rotateMe' : 'enemyInactive rotateMe'}>
          <DefendEnemy2 className={this.props.enemyActive[1] ? 'rotateMe' : 'enemyInactive rotateMe'}
            healthPerc={(((this.props.enemyTwoHealth) / (this.props.enemyTwoMaxHealth)) * 100).toFixed(0)}/>
        </HealthBarEnemy2>

        {/* Health Percentage */}
        <div className={(this.props.enemyTwoHealth / this.props.enemyTwoMaxHealth * 100) < 25 ? 'enemyPerc healthLow' : 'enemyPerc' } id="e2Perc">
          {this.props.enemyActive[1] ? ((this.props.enemyTwoHealth) / (this.props.enemyTwoMaxHealth) * 100).toFixed(0) + '% HP' : ''}
        </div>

        {/* Health / Max Health */}
        <div className='enemyHealth' id="e2Health">
          {this.props.enemyActive[1] ? `${(this.props.enemyTwoHealth).toFixed(2)} HP` : ''}
        </div>

        {/* DPS */}
        <div className='enemyDPS' id="e2DPS">
          {this.props.enemyActive[1] ? `${(this.props.enemyTwoDamage / this.props.enemyTwoAttackSpeed).toFixed(2)} DPS` : ''}
        </div>


        <ProgressBarEnemy3 className={this.props.enemyActive[2] ? 'rotateMe' : 'enemyInactive rotateMe'}>
          <AttackEnemy3 className={this.props.enemyActive[2] ? 'rotateMe' : 'enemyInactive rotateMe'}
            baseAttack={this.props.enemyThrBaseAttack} percentage={this.props.enemyThrAttackSpeed}/>
        </ProgressBarEnemy3>
        <HealthBarEnemy3 className={this.props.enemyActive[2] ? 'rotateMe' : 'enemyInactive rotateMe'}>
          <DefendEnemy3 className={this.props.enemyActive[2]  ? 'rotateMe' : 'enemyInactive rotateMe'}
            healthPerc={(((this.props.enemyThrHealth) / (this.props.enemyThrMaxHealth)) * 100).toFixed(0)} />
        </HealthBarEnemy3>

        {/* Health Percentage */}
        <div className={(this.props.enemyThrHealth / this.props.enemyThrMaxHealth * 100) < 25 ? 'enemyPerc healthLow' : 'enemyPerc' } id="e3Perc">
          {this.props.enemyActive[2] ? ((this.props.enemyThrHealth / this.props.enemyThrMaxHealth) * 100).toFixed(0) + '% HP' : ''}
        </div>

        {/* Health / Max Health */}
        <div className='enemyHealth' id="e3Health">
          {this.props.enemyActive[2] ? `${(this.props.enemyThrHealth).toFixed(2)} HP` : ''}
        </div>

        {/* DPS */}
        <div className='enemyDPS' id="e3DPS">
          {this.props.enemyActive[2] ? `${(this.props.enemyThrDamage / this.props.enemyThrAttackSpeed).toFixed(2)} DPS` : ''}
        </div>

        <ProgressBarEnemy4 className={this.props.enemyActive[3] ? 'rotateMe' : 'enemyInactive rotateMe'}>
          <AttackEnemy4 className={this.props.enemyActive[3] ? 'rotateMe' : 'enemyInactive rotateMe'}
            baseAttack={this.props.enemyFouBaseAttack} percentage={this.props.enemyFouAttackSpeed}/>
        </ProgressBarEnemy4>
        <HealthBarEnemy4 className={this.props.enemyActive[3] ? 'rotateMe' : 'enemyInactive rotateMe'}>
          <DefendEnemy4 className={this.props.enemyActive[3] ? 'rotateMe' : 'enemyInactive rotateMe'}
            healthPerc={(((this.props.enemyFouHealth) / (this.props.enemyFouMaxHealth)) * 100).toFixed(0)}/>
        </HealthBarEnemy4>

        {/* Health Percentage */}
        <div className={(this.props.enemyFouHealth / this.props.enemyFouMaxHealth * 100) < 25 ? 'enemyPerc healthLow' : 'enemyPerc' } id="e4Perc">
          {this.props.enemyActive[3] ? ((this.props.enemyFouHealth / this.props.enemyFouMaxHealth) * 100).toFixed(0) + '% HP' : ''}
        </div>

        {/* Health / Max Health */}
        <div className='enemyHealth' id="e4Health">
          {this.props.enemyActive[3] ? `${(this.props.enemyFouHealth).toFixed(2)} HP` : ''}
        </div>

        {/* DPS */}
        <div className='enemyDPS' id="e4DPS">
          {this.props.enemyActive[3] ? `${(this.props.enemyFouDamage / this.props.enemyFouAttackSpeed).toFixed(2)} DPS` : ''}
        </div>

        <ProgressBarEnemy5 className={this.props.enemyActive[4] ? 'rotateMe' : 'enemyInactive rotateMe'}>
          <AttackEnemy5 className={this.props.enemyActive[4] ? 'rotateMe' : 'enemyInactive rotateMe'}
            baseAttack={this.props.enemyFivBaseAttack} percentage={this.props.enemyFivAttackSpeed}/>
        </ProgressBarEnemy5>
        <HealthBarEnemy5 className={this.props.enemyActive[4] ? 'rotateMe' : 'enemyInactive rotateMe'}>
          <DefendEnemy5 className={this.props.enemyActive[4] ? 'rotateMe' : 'enemyInactive rotateMe'}
            healthPerc={(((this.props.enemyFivHealth) / (this.props.enemyFivMaxHealth))* 100).toFixed(0)}/>
        </HealthBarEnemy5>

        {/* Health Percentage */}
        <div className={(this.props.enemyFivHealth / this.props.enemyFivMaxHealth * 100) < 25 ? 'enemyPerc healthLow' : 'enemyPerc' } id="e5Perc">
          {this.props.enemyActive[4] ? ((this.props.enemyFivHealth / this.props.enemyFivMaxHealth) * 100).toFixed(0) + '% HP' : ''}
        </div>

        {/* Health / Max Health */}
        <div className='enemyHealth' id="e5Health">
          {this.props.enemyActive[4] ? `${(this.props.enemyFivHealth).toFixed(2)} HP` : ''}
        </div>

        {/* DPS */}
        <div className='enemyDPS' id="e5DPS">
          {this.props.enemyActive[4] ? `${(this.props.enemyFivDamage / this.props.enemyFivAttackSpeed).toFixed(2)} DPS` : ''}
        </div>

        <ProgressBarEnemy6 className={this.props.enemyActive[5] ? 'rotateMe' : 'enemyInactive rotateMe'}>
          <AttackEnemy6 className={this.props.enemyActive[5] ? 'rotateMe' : 'enemyInactive rotateMe'}
            baseAttack={this.props.enemySixBaseAttack} percentage={this.props.enemySixAttackSpeed}/>
        </ProgressBarEnemy6>
        <HealthBarEnemy6 className={this.props.enemyActive[5] ? 'rotateMe' : 'enemyInactive rotateMe'}>
          <DefendEnemy6 className={this.props.enemyActive[5] ? 'rotateMe' : 'enemyInactive rotateMe'}
            healthPerc={((this.props.enemySixHealth / this.props.enemySixMaxHealth) * 100).toFixed(0)}/>
        </HealthBarEnemy6>

        {/* Health Percentage */}
        <div className={(this.props.enemySixHealth / this.props.enemySixMaxHealth * 100) < 25 ? 'enemyPerc healthLow' : 'enemyPerc' } id="e6Perc">
          {this.props.enemyActive[5] ? ((this.props.enemySixHealth / this.props.enemySixMaxHealth) * 100).toFixed(0) + '% HP' : ''}
        </div>

        {/* Health / Max Health */}
        <div className='enemyHealth' id="e6Health">
          {this.props.enemyActive[5] ? `${(this.props.enemySixHealth).toFixed(2)} HP` : ''}
        </div>

        {/* DPS */}
        <div className='enemyDPS' id="e6DPS">
          {this.props.enemyActive[5] ? `${(this.props.enemySixDamage / this.props.enemySixAttackSpeed).toFixed(2)} DPS` : ''}
        </div>

        </div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  baseAttack: PropTypes.number,
  percentage: PropTypes.number,
}

ProgressBar2.propTypes = {
  baseAttack: PropTypes.number,
  percentage: PropTypes.number,
}

ProgressBar3.propTypes = {
  baseAttack: PropTypes.number,
  percentage: PropTypes.number,
}

ProgressBar4.propTypes = {
  baseAttack: PropTypes.number,
  percentage: PropTypes.number,
}

ProgressBar5.propTypes = {
  baseAttack: PropTypes.number,
  percentage: PropTypes.number,
}

ProgressBar6.propTypes = {
  baseAttack: PropTypes.number,
  percentage: PropTypes.number,
}