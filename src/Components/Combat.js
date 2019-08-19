import React from 'react';
import PlayerTeam from '../Components/PlayerTeam';
import EnemyTeam from '../Components/EnemyTeam';
import Progress from '../Components/Progress';

export default class Combat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      allyClass: {
        one: 'Warrior',
        two: 'Mage',
        thr: 'Rogue',
        fou: 'Knight',
        fiv: 'Cleric',
        six: 'Dreadknight',    
      },

      allyLevels: {
        one: 1,
        two: 1,
        thr: 1,
        fou: 1,
        fiv: 1,
        six: 1,
      },

      //Player Stats
      allyOneAttackSpeed: 2.5,
      allyOneBaseAttack: 0,
      allyOneBaseAttackCount: 0,

      allyTwoAttackSpeed: 1.5,
      allyTwoBaseAttack: 0,
      allyTwoBaseAttackCount: 0,

      allyThrAttackSpeed: 4.5,
      allyThrBaseAttack: 0,
      allyThrBaseAttackCount: 0,

      allyFouAttackSpeed: 1.25,
      allyFouBaseAttack: 0,
      allyFouBaseAttackCount: 0,

      allyFivAttackSpeed: 1.75,
      allyFivBaseAttack: 0,
      allyFivBaseAttackCount: 0,

      allySixAttackSpeed: .45,
      allySixBaseAttack: 0,
      allySixBaseAttackCount: 0,

      //Enemy Team
    }
  }

  componentDidMount(){
    setInterval(this.attack, 100);
    setInterval(this.attack2, 100);
    setInterval(this.attack3, 100);
    setInterval(this.attack4, 100);
    setInterval(this.attack5, 100);
    setInterval(this.attack6, 100);
  }

  attack = () => {

    if(this.state.allyOneBaseAttackCount <= this.state.allyOneAttackSpeed){
      this.setState({ 
        allyOneBaseAttackCount: this.state.allyOneBaseAttackCount + .10,
      });
      this.setState({
        allyOneBaseAttack: 100,
      });

  
   } else {
    this.setState({ 
      allyOneBaseAttackCount: 0,
    });
    this.setState({ 
      allyOneBaseAttack: 0,
    });    
     this.finishAttack();
   }
  }

  finishAttack = () => {
    console.log('Attack Ends');
  }

  attack2 = () => {

    if(this.state.allyTwoBaseAttackCount <= this.state.allyTwoAttackSpeed){
      this.setState({ 
        allyTwoBaseAttackCount: this.state.allyTwoBaseAttackCount + .10,
      });
      this.setState({
        allyTwoBaseAttack: 100,
      });

  
   } else {
    this.setState({ 
      allyTwoBaseAttackCount: 0,
    });
    this.setState({ 
      allyTwoBaseAttack: 0,
    });   

   }
   
  }

  attack3 = () => {

    if(this.state.allyThrBaseAttackCount <= this.state.allyThrAttackSpeed){
      this.setState({ 
        allyThrBaseAttackCount: this.state.allyThrBaseAttackCount + .10,
      });
      this.setState({
        allyThrBaseAttack: 100,
      });

  
   } else {
    this.setState({ 
      allyThrBaseAttackCount: 0,
    });
    this.setState({ 
      allyThrBaseAttack: 0,
    });   

   }
   
  }

  attack4 = () => {

    if(this.state.allyFouBaseAttackCount <= this.state.allyFouAttackSpeed){
      this.setState({ 
        allyFouBaseAttackCount: this.state.allyFouBaseAttackCount + .10,
      });
      this.setState({
        allyFouBaseAttack: 100,
      });

  
   } else {
    this.setState({ 
      allyFouBaseAttackCount: 0,
    });
    this.setState({ 
      allyFouBaseAttack: 0,
    });   

   }
   
  }

  attack5 = () => {

    if(this.state.allyFivBaseAttackCount <= this.state.allyFivAttackSpeed){
      this.setState({ 
        allyFivBaseAttackCount: this.state.allyFivBaseAttackCount + .10,
      });
      this.setState({
        allyFivBaseAttack: 100,
      });

  
   } else {
    this.setState({ 
      allyFivBaseAttackCount: 0,
    });
    this.setState({ 
      allyFivBaseAttack: 0,
    });   

   }
   
  }

  attack6 = () => {

    if(this.state.allySixBaseAttackCount <= this.state.allySixAttackSpeed){
      this.setState({ 
        allySixBaseAttackCount: this.state.allySixBaseAttackCount + .10,
      });
      this.setState({
        allySixBaseAttack: 100,
      });

  
   } else {
    this.setState({ 
      allySixBaseAttackCount: 0,
    });
    this.setState({ 
      allySixBaseAttack: 0,
    });   

   }
   
  }

  render() {
    return (
      <div className="combat">
        <PlayerTeam allyClass={this.state.allyClass} allyLevels={this.state.allyLevels}>
          <Progress 
            allyOneAttackSpeed = {this.state.allyOneAttackSpeed}
            allyOneBaseAttack = {this.state.allyOneBaseAttack}
            allyOneBaseAttackCount = {this.state.allyOneBaseAttackCount}

            allyTwoAttackSpeed = {this.state.allyTwoAttackSpeed}
            allyTwoBaseAttack = {this.state.allyTwoBaseAttack}
            allyTwoBaseAttackCount = {this.state.allyTwoBaseAttackCount}

            allyThrAttackSpeed = {this.state.allyThrAttackSpeed}
            allyThrBaseAttack = {this.state.allyThrBaseAttack}
            allyThrBaseAttackCount = {this.state.allyThrBaseAttackCount}

            allyFouAttackSpeed = {this.state.allyFouAttackSpeed}
            allyFouBaseAttack = {this.state.allyFouBaseAttack}
            allyFouBaseAttackCount = {this.state.allyFouBaseAttackCount}

            allyFivAttackSpeed = {this.state.allyFivAttackSpeed}
            allyFivBaseAttack = {this.state.allyFivBaseAttack}
            allyFivBaseAttackCount = {this.state.allyFivBaseAttackCount}

            allySixAttackSpeed = {this.state.allySixAttackSpeed}
            allySixBaseAttack = {this.state.allySixBaseAttack}
            allySixBaseAttackCount = {this.state.allySixBaseAttackCount}
          /> 
        </PlayerTeam>
        <EnemyTeam />
        {this.props.children}
      </div>
    )
  }
}
