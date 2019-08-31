import React from 'react';
import PlayerTeam from '../Components/PlayerTeam';
import Progress from '../Components/Progress';
import ToonStats from '../Components/ToonStats';
import ToonSkills from '../Components/ToonSkills';

export default class Combat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      allyClass: [
        'Warrior',
        '?',
        '??',
        '???',
        '????',
        '?????',    
      ],

      allyLevels: [
        1,
        20,
        30,
        40,
        50,
        60,
      ],

      allyActive: [
        true,
        true,
        true,
        false,
        false, 
        false,   
      ],

     enemyClass: [
        'Little Rat',
        '????',
        '????',
        '????',
        '????',
        '????',    
       ],

      enemyLevels: [
        1,
        0,
        0,
        0,
        0,
        0,
      ],

      enemyActive: [
        true,
        true,
        true,
        false,
        false, 
        false,   
      ],

      //Leveling and Experience
      expCalculator: 1.45,

      //Player Stats
      allyOneAttackSpeed: 1.5,
      allyOneBaseAttack: 0,
      allyOneBaseAttackCount: 0,
      allyOneDamage: 1,
      allyOneDefense: 1,
      allyOneHealth: 20,
      allyOneMaxHealth: 20,
      allyOneExp: 0,
      allyOneMaxExp: 2,

      allyTwoAttackSpeed: 1,
      allyTwoBaseAttack: 0,
      allyTwoBaseAttackCount: 0,
      allyTwoDamage: 1,
      allyTwoDefense: 1,
      allyTwoHealth: 20,
      allyTwoMaxHealth: 20,
      allyTwoExp: 0,
      allyTwoMaxExp: 4,

      allyThrAttackSpeed: 3,
      allyThrBaseAttack: 0,
      allyThrBaseAttackCount: 0,
      allyThrDamage: 3,
      allyThrDefense: 1,
      allyThrHealth: 20,
      allyThrMaxHealth: 20,
      allyThrExp: 0,
      allyThrMaxExp: 6,

      allyFouAttackSpeed: 1.5,
      allyFouBaseAttack: 0,
      allyFouBaseAttackCount: 0,
      allyFouDamage: 1.5,
      allyFouDefense: 1,
      allyFouHealth: 20,
      allyFouMaxHealth: 20,
      allyFouExp: 0,
      allyFouMaxExp: 8,

      allyFivAttackSpeed: 2,
      allyFivBaseAttack: 0,
      allyFivBaseAttackCount: 0,
      allyFivDamage: 2,
      allyFivDefense: 1,
      allyFivHealth: 20,
      allyFivMaxHealth: 20,
      allyFivExp: 0,
      allyFivMaxExp: 10,

      allySixAttackSpeed: 3,
      allySixBaseAttack: 0,
      allySixBaseAttackCount: 0,
      allySixDamage: 3,
      allySixDefense: 1,
      allySixHealth: 20,
      allySixMaxHealth: 20,
      allySixExp: 0,
      allySixMaxExp: 12,
    
      //Enemy Team
      enemyOneAttackSpeed: 1,
      enemyOneBaseAttack: 0,
      enemyOneBaseAttackCount: 0,
      enemyOneDamage: 25.5,
      enemyOneDefense: 1,
      enemyOneHealth: 10,
      enemyOneMaxHealth: 10,
      enemyOneExp: 0,
      enemyOneMaxExp: 25,

      enemyTwoAttackSpeed: 1.5,
      enemyTwoBaseAttack: 0,
      enemyTwoBaseAttackCount: 0,
      enemyTwoDamage: 1,
      enemyTwoDefense: 1,
      enemyTwoHealth: 20,
      enemyTwoMaxHealth: 20,
      enemyTwoExp: 0,
      enemyTwoMaxExp: 25,

      enemyThrAttackSpeed: 6,
      enemyThrBaseAttack: 0,
      enemyThrBaseAttackCount: 0,
      enemyThrDamage: 2,
      enemyThrDefense: 1,
      enemyThrHealth: 20,
      enemyThrMaxHealth: 20,
      enemyThrExp: 0,
      enemyThrMaxExp: 25,

      enemyFouAttackSpeed: 4,
      enemyFouBaseAttack: 0,
      enemyFouBaseAttackCount: 0,
      enemyFouDamage: 2,
      enemyFouDefense: 1,
      enemyFouHealth: 20,
      enemyFouMaxHealth: 20,
      enemyFouExp: 0,
      enemyFouMaxExp: 25,

      enemyFivAttackSpeed: 3,
      enemyFivBaseAttack: 0,
      enemyFivBaseAttackCount: 0,
      enemyFivDamage: 1,
      enemyFivDefense: 1,
      enemyFivHealth: 20,
      enemyFivMaxHealth: 20,
      enemyFivExp: 0,
      enemyFivMaxExp: 25,

      enemySixAttackSpeed: .5,
      enemySixBaseAttack: 0,
      enemySixBaseAttackCount: 0,
      enemySixDamage: 276.5,
      enemySixDefense: 1,
      enemySixHealth: 20,
      enemySixMaxHealth: 20,
      enemySixExp: 0,
      enemySixMaxExp: 25,

      calculateNextLevel() {
        return this.expCalculator;
      },
    }
  }

  componentDidMount(){
    setInterval(this.attack, 250);
    setInterval(this.attack2, 250);
    setInterval(this.attack3, 250);
    setInterval(this.attack4, 250);
    setInterval(this.attack5, 250);
    setInterval(this.attack6, 250);

    setInterval(this.attackEnemy, 250);
    setInterval(this.attackEnemy2, 250);
    setInterval(this.attackEnemy3, 250);
    setInterval(this.attackEnemy4, 250);
    setInterval(this.attackEnemy5, 250);
    setInterval(this.attackEnemy6, 250);
  }

  //Count total enemies and allies; needed for a few things!
  
  totalActiveAllies = () => {
    const x = this.state.allyActive[0] + this.state.allyActive[1]+ this.state.allyActive[2] + 
    this.state.allyActive[3] + this.state.allyActive[4] + this.state.allyActive[5];

    return x;
  }

  totalActiveEnemies = () => {
    const x = this.state.enemyActive[0] + this.state.enemyActive[1]+ this.state.enemyActive[2] + 
    this.state.enemyActive[3] + this.state.enemyActive[4] + this.state.enemyActive[5];

    return x;
  }

  attack = () => {

    //Begin Attack
    if(this.state.allyOneBaseAttackCount <= this.state.allyOneAttackSpeed && this.state.allyActive[0]){
      this.setState({ 
        allyOneBaseAttackCount: this.state.allyOneBaseAttackCount + .250,
        allyOneBaseAttack: 100,
      });

    //End Attack
   } else if (this.state.allyOneBaseAttackCount >= this.state.allyOneAttackSpeed) {

    // Do Damage to SET TARGET
    this.attackAllyOne();
    this.setState({ 
      allyOneBaseAttackCount: 0,
      allyOneBaseAttack: 0,
    });    
   }
  }


  attack2 = () => {
    
    //Begin Attack
    if(this.state.allyTwoBaseAttackCount <= this.state.allyTwoAttackSpeed){
      this.setState({ 
        allyTwoBaseAttackCount: this.state.allyTwoBaseAttackCount + .250,
        allyTwoBaseAttack: 100,
      });

  
    //End Attack  
   } else {

    // Do Damage to SET TARGET
    this.attackAllyTwo();
    this.setState({ 
      allyTwoBaseAttackCount: 0,
      allyTwoBaseAttack: 0,
    });   

    
   }
  }

  attack3 = () => {

    //Begin Attack
    if(this.state.allyThrBaseAttackCount <= this.state.allyThrAttackSpeed){
      this.setState({ 
        allyThrBaseAttackCount: this.state.allyThrBaseAttackCount + .250,
        allyThrBaseAttack: 100,
      });

    //End Attack 
   } else {
    
    // Do Damage to SET TARGET
    this.attackAllyThr();
    this.setState({ 
      allyThrBaseAttackCount: 0,
      allyThrBaseAttack: 0,
    });   

   }
   
  }

  attack4 = () => {

    //Begin Attack
    if(this.state.allyFouBaseAttackCount <= this.state.allyFouAttackSpeed){
      this.setState({ 
        allyFouBaseAttackCount: this.state.allyFouBaseAttackCount + .250,
        allyFouBaseAttack: 100,
      });

    //End Attack
   } else {    
     
    // Do Damage to SET TARGET
    this.attackAllyFou();
    this.setState({ 
      allyFouBaseAttackCount: 0,
      allyFouBaseAttack: 0,
    });   

   }
   
  }

  attack5 = () => {

    //Begin Attack
    if(this.state.allyFivBaseAttackCount <= this.state.allyFivAttackSpeed){
      this.setState({ 
        allyFivBaseAttackCount: this.state.allyFivBaseAttackCount + .250,
        allyFivBaseAttack: 100,
      });

    //End Attack
   } else {
    // Do Damage to SET TARGET
    this.attackAllyFiv();
    this.setState({ 
      allyFivBaseAttackCount: 0,
      allyFivBaseAttack: 0,
    });   

   }
   
  }

  attack6 = () => {

    //Begin Attack
    if(this.state.allySixBaseAttackCount <= this.state.allySixAttackSpeed){
      this.setState({ 
        allySixBaseAttackCount: this.state.allySixBaseAttackCount + .250,
        allySixBaseAttack: 100,
      });

    //End Attack
   } else {
    // Do Damage to SET TARGET
    this.attackAllySix();
    this.setState({ 
      allySixBaseAttackCount: 0,
      allySixBaseAttack: 0,
    });   

   }

  }


  attackEnemy = () => {
    
    //Begin Attack
    if(this.state.enemyOneBaseAttackCount <= this.state.enemyOneAttackSpeed && this.state.enemyActive[0]){
      this.setState({ 
        enemyOneBaseAttackCount: this.state.enemyOneBaseAttackCount + .250,
        enemyOneBaseAttack: 100,
      });

    //End Attack
   } else if (this.state.enemyOneBaseAttackCount >= this.state.enemyOneAttackSpeed && this.state.enemyActive[0])  {

    // Do Damage to SET TARGET
    this.attackEnemyOne();
    this.setState({ 
      enemyOneBaseAttackCount: 0,
      enemyOneBaseAttack: 0,
    });        
   }
  }


  attackEnemy2 = () => {
    
    //Begin Attack
    if(this.state.enemyTwoBaseAttackCount <= this.state.enemyTwoAttackSpeed  && this.state.enemyActive[1]){
      this.setState({ 
        enemyTwoBaseAttackCount: this.state.enemyTwoBaseAttackCount + .250,
        enemyTwoBaseAttack: 100,
      });

  
    //End Attack  
   } else if(this.state.enemyTwoBaseAttackCount >= this.state.enemyTwoAttackSpeed  && this.state.enemyActive[1]){
    this.attackEnemyTwo();
    this.setState({ 
      enemyTwoBaseAttackCount: 0,
      enemyTwoBaseAttack: 0,
    });   

   }
  }

  attackEnemy3 = () => {

    //Begin Attack
    if(this.state.enemyThrBaseAttackCount <= this.state.enemyThrAttackSpeed  && this.state.enemyActive[2]){
      this.setState({ 
        enemyThrBaseAttackCount: this.state.enemyThrBaseAttackCount + .250,
        enemyThrBaseAttack: 100,
      });

    //End Attack 
   } else if(this.state.enemyThrBaseAttackCount >= this.state.enemyThrAttackSpeed  && this.state.enemyActive[2]) {
    this.attackEnemyThr();
    this.setState({ 
      enemyThrBaseAttackCount: 0,
      enemyThrBaseAttack: 0,
    });   

   }
   
  }

  attackEnemy4 = () => {

    //Begin Attack
    if(this.state.enemyFouBaseAttackCount <= this.state.enemyFouAttackSpeed && this.state.enemyActive[3]){
      this.setState({ 
        enemyFouBaseAttackCount: this.state.enemyFouBaseAttackCount + .250,
        enemyFouBaseAttack: 100,
      });

    //End Attack
   } else if(this.state.enemyFouBaseAttackCount >= this.state.enemyFouAttackSpeed && this.state.enemyActive[3]) {
    this.attackEnemyFou();
    this.setState({ 
      enemyFouBaseAttackCount: 0,
      enemyFouBaseAttack: 0,
    });   

   }
   
  }

  attackEnemy5 = () => {

    //Begin Attack
    if(this.state.enemyFivBaseAttackCount <= this.state.enemyFivAttackSpeed && this.state.enemyActive[4]){
      this.setState({ 
        enemyFivBaseAttackCount: this.state.enemyFivBaseAttackCount + .250,
        enemyFivBaseAttack: 100,
      });

    //End Attack
   } else if(this.state.enemyFivBaseAttackCount >= this.state.enemyFivAttackSpeed && this.state.enemyActive[4]){
    this.attackEnemyFiv();
    this.setState({ 
      enemyFivBaseAttackCount: 0,
      enemyFivBaseAttack: 0,
    });   

   }
   
  }

  attackEnemy6 = () => {

    //Begin Attack
    if(this.state.enemySixBaseAttackCount <= this.state.enemySixAttackSpeed && this.state.enemyActive[5]){
      this.setState({ 
        enemySixBaseAttackCount: this.state.enemySixBaseAttackCount + .250,
        enemySixBaseAttack: 100,
      });

    //End Attack
   } else if(this.state.enemySixBaseAttackCount >= this.state.enemySixAttackSpeed && this.state.enemyActive[5]) {
    this.attackEnemySix();
    this.setState({ 
      enemySixBaseAttackCount: 0,
      enemySixBaseAttack: 0,
    });   

   }

  }


  //This function will be the AI for controlling which enemy to fight next.
  //Currently: Only targets first enemy on list. 
  findTarget = () => {

    if(this.state.enemyOneHealth > 0){
      return this.state.enemyOneHealth;
    } else if (this.state.enemyTwoHealth > 0) {
      return this.state.enemyTwoHealth;
    } else if (this.state.enemyThrHealth > 0) {
      return this.state.enemyThrHealth;
    } else if (this.state.enemyFouHealth > 0) {
      return this.state.enemyFouHealth;
    } else if (this.state.enemyFivHealth > 0) {
      return this.state.enemyFivHealth;
    } else {
      return this.state.enemySixHealth;
    }
  }


  /*
  * PLAYER ATTACK
  */
    attackAllyOne = () => {

    //Target a random enemy in the tree - TODO: This can be set to pick less randomly (0-100, 1-80 1st, 81-100 2nd)
    const rand = Math.ceil(Math.random() * this.totalActiveEnemies());


    if(this.state.enemyOneHealth > 0 && rand === 1){
      this.setState({
        enemyOneHealth: this.state.enemyOneHealth - this.state.allyOneDamage,
      });
      this.checkCombatStatus();
    } 
    else if(this.state.enemyTwoHealth > 0 && rand === 2){
      this.setState({
        enemyTwoHealth: this.state.enemyTwoHealth - this.state.allyOneDamage,
      });
      this.checkCombatStatus();
    } else if(this.state.enemyThrHealth > 0 && rand === 3){
      this.setState({
        enemyThrHealth: this.state.enemyThrHealth - this.state.allyOneDamage,
      });
      this.checkCombatStatus();
    } else if (this.state.enemyFouHealth > 0 && rand === 4){
      this.setState({
        enemyFouHealth: this.state.enemyFouHealth - this.state.allyOneDamage,
      });
      this.checkCombatStatus();
    } else if (this.state.enemyFivHealth > 0 && rand === 5){
      this.setState({
        enemyFivHealth: this.state.enemyFivHealth - this.state.allyOneDamage,
      });
      this.checkCombatStatus();
    }  else if (this.state.enemySixHealth > 0 && rand === 6){
      this.setState({
        enemySixHealth: this.state.enemySixHealth - this.state.allyOneDamage,
      });
      this.checkCombatStatus();
    }
  };

    attackAllyTwo = () => {
      
    //Target a random enemy in the tree - TODO: This can be set to pick less randomly (0-100, 1-80 1st, 81-100 2nd)
    const rand = Math.ceil(Math.random() * this.totalActiveEnemies());


      if(this.state.enemyOneHealth > 0 && rand === 1){
      this.setState({
        enemyOneHealth: this.state.enemyOneHealth - this.state.allyTwoDamage,
      });
      this.checkCombatStatus();
    } 
    else if(this.state.enemyTwoHealth > 0 && rand === 2){
      this.setState({
        enemyTwoHealth: this.state.enemyTwoHealth - this.state.allyTwoDamage,
      });
      this.checkCombatStatus();
    } else if(this.state.enemyThrHealth > 0 && rand === 3){
      this.setState({
        enemyThrHealth: this.state.enemyThrHealth - this.state.allyTwoDamage,
      });
      this.checkCombatStatus();
    } else if (this.state.enemyFouHealth > 0 && rand === 4){
      this.setState({
        enemyFouHealth: this.state.enemyFouHealth - this.state.allyTwoDamage,
      });
      this.checkCombatStatus();
    } else if (this.state.enemyFivHealth > 0 && rand === 5){
      this.setState({
        enemyFivHealth: this.state.enemyFivHealth - this.state.allyTwoDamage,
      });
      this.checkCombatStatus();
    }  else if (this.state.enemySixHealth > 0 && rand === 6){
      this.setState({
        enemySixHealth: this.state.enemySixHealth - this.state.allyTwoDamage,
      });
      this.checkCombatStatus();
    }
  };

      attackAllyThr = () => {
      
    //Target a random enemy in the tree - TODO: This can be set to pick less randomly (0-100, 1-80 1st, 81-100 2nd)
    const rand = Math.ceil(Math.random() * this.totalActiveEnemies());


      if(this.state.enemyOneHealth > 0 && rand === 1){
      this.setState({
        enemyOneHealth: this.state.enemyOneHealth - this.state.allyThrDamage,
      });
      this.checkCombatStatus();
    } 
    else if(this.state.enemyTwoHealth > 0 && rand === 2){
      this.setState({
        enemyTwoHealth: this.state.enemyTwoHealth - this.state.allyThrDamage,
      });
      this.checkCombatStatus();
    } else if(this.state.enemyThrHealth > 0 && rand === 3){
      this.setState({
        enemyThrHealth: this.state.enemyThrHealth - this.state.allyThrDamage,
      });
      this.checkCombatStatus();
    } else if (this.state.enemyFouHealth > 0 && rand === 4){
      this.setState({
        enemyFouHealth: this.state.enemyFouHealth - this.state.allyThrDamage,
      });
      this.checkCombatStatus();
    } else if (this.state.enemyFivHealth > 0 && rand === 5){
      this.setState({
        enemyFivHealth: this.state.enemyFivHealth - this.state.allyThrDamage,
      });
      this.checkCombatStatus();
    }  else if (this.state.enemySixHealth > 0 && rand === 6){
      this.setState({
        enemySixHealth: this.state.enemySixHealth - this.state.allyThrDamage,
      });
      this.checkCombatStatus();
    }
  };

  
  attackAllyFou = () => {
      
    //Target a random enemy in the tree - TODO: This can be set to pick less randomly (0-100, 1-80 1st, 81-100 2nd)
    const rand = Math.ceil(Math.random() * this.totalActiveEnemies());

      if(this.state.enemyOneHealth > 0 && rand === 1){
      this.setState({
        enemyOneHealth: this.state.enemyOneHealth - this.state.allyFouDamage,
      });
      this.checkCombatStatus();
    } 
    else if(this.state.enemyTwoHealth > 0 && rand === 2){
      this.setState({
        enemyTwoHealth: this.state.enemyTwoHealth - this.state.allyFouDamage,
      });
      this.checkCombatStatus();
    } else if(this.state.enemyThrHealth > 0 && rand === 3){
      this.setState({
        enemyThrHealth: this.state.enemyThrHealth - this.state.allyFouDamage,
      });
      this.checkCombatStatus();
    } else if (this.state.enemyFouHealth > 0 && rand === 4){
      this.setState({
        enemyFouHealth: this.state.enemyFouHealth - this.state.allyFouDamage,
      });
      this.checkCombatStatus();
    } else if (this.state.enemyFivHealth > 0 && rand === 5){
      this.setState({
        enemyFivHealth: this.state.enemyFivHealth - this.state.allyFouDamage,
      });
      this.checkCombatStatus();
    }  else if (this.state.enemySixHealth > 0 && rand === 6){
      this.setState({
        enemySixHealth: this.state.enemySixHealth - this.state.allyFouDamage,
      });
      this.checkCombatStatus();
    }
  };

  
  attackAllyFiv = () => {
      
    //Target a random enemy in the tree - TODO: This can be set to pick less randomly (0-100, 1-80 1st, 81-100 2nd)
    const rand = Math.ceil(Math.random() * this.totalActiveEnemies());

      if(this.state.enemyOneHealth > 0 && rand === 1){
      this.setState({
        enemyOneHealth: this.state.enemyOneHealth - this.state.allyFivDamage,
      });
      this.checkCombatStatus();
    } 
    else if(this.state.enemyTwoHealth > 0 && rand === 2){
      this.setState({
        enemyTwoHealth: this.state.enemyTwoHealth - this.state.allyFivDamage,
      });
      this.checkCombatStatus();
    } else if(this.state.enemyThrHealth > 0 && rand === 3){
      this.setState({
        enemyThrHealth: this.state.enemyThrHealth - this.state.allyFivDamage,
      });
      this.checkCombatStatus();
    } else if (this.state.enemyFouHealth > 0 && rand === 4){
      this.setState({
        enemyFouHealth: this.state.enemyFouHealth - this.state.allyFivDamage,
      });
      this.checkCombatStatus();
    } else if (this.state.enemyFivHealth > 0 && rand === 5){
      this.setState({
        enemyFivHealth: this.state.enemyFivHealth - this.state.allyFivDamage,
      });
      this.checkCombatStatus();
    }  else if (this.state.enemySixHealth > 0 && rand === 6){
      this.setState({
        enemySixHealth: this.state.enemySixHealth - this.state.allyFivDamage,
      });
      this.checkCombatStatus();
    }
  };

  attackAllySix = () => {
      
    //Target a random enemy in the tree - TODO: This can be set to pick less randomly (0-100, 1-80 1st, 81-100 2nd)
    const rand = Math.ceil(Math.random() * this.totalActiveEnemies());

      if(this.state.enemyOneHealth > 0 && rand === 1){
      this.setState({
        enemyOneHealth: this.state.enemyOneHealth - this.state.allySixDamage,
      });
      this.checkCombatStatus();
    } 
    else if(this.state.enemyTwoHealth > 0 && rand === 2){
      this.setState({
        enemyTwoHealth: this.state.enemyTwoHealth - this.state.allySixDamage,
      });
      this.checkCombatStatus();
    } else if(this.state.enemyThrHealth > 0 && rand === 3){
      this.setState({
        enemyThrHealth: this.state.enemyThrHealth - this.state.allySixDamage,
      });
      this.checkCombatStatus();
    } else if (this.state.enemyFouHealth > 0 && rand === 4){
      this.setState({
        enemyFouHealth: this.state.enemyFouHealth - this.state.allySixDamage,
      });
      this.checkCombatStatus();
    } else if (this.state.enemyFivHealth > 0 && rand === 5){
      this.setState({
        enemyFivHealth: this.state.enemyFivHealth - this.state.allySixDamage,
      });
      this.checkCombatStatus();
    }  else if (this.state.enemySixHealth > 0 && rand === 6){
      this.setState({
        enemySixHealth: this.state.enemySixHealth - this.state.allySixDamage,
      });
      this.checkCombatStatus();
    }
  };


  /*
  * ENEMY ATTACK
  */
  attackEnemyOne = () => {

    //Target a random ally in the tree - TODO: This can be set to pick less randomly (0-100, 1-80 1st, 81-100 2nd)
    const rand = Math.ceil(Math.random() * this.totalActiveAllies());


    if(this.state.allyOneHealth > 0 && rand === 1){
      this.setState({
        allyOneHealth: this.state.allyOneHealth - this.state.enemyOneDamage,
      });
      this.checkCombatStatus();
    } 
    else if(this.state.allyTwoHealth > 0 && rand === 2){
      this.setState({
        allyTwoHealth: this.state.allyTwoHealth - this.state.enemyOneDamage,
      });
      this.checkCombatStatus();
    } else if(this.state.allyThrHealth > 0 && rand === 3){
      this.setState({
        allyThrHealth: this.state.allyThrHealth - this.state.enemyOneDamage,
      });
      this.checkCombatStatus();
    } else if (this.state.allyFouHealth > 0 && rand === 4){
      this.setState({
        allyFouHealth: this.state.allyFouHealth - this.state.enemyOneDamage,
      });
      this.checkCombatStatus();
    } else if (this.state.allyFivHealth > 0 && rand === 5){
      this.setState({
        allyFivHealth: this.state.allyFivHealth - this.state.enemyOneDamage,
      });
      this.checkCombatStatus();
    }  else if (this.state.allySixHealth > 0 && rand === 6){
      this.setState({
        allySixHealth: this.state.allySixHealth - this.state.enemyOneDamage,
      });
      this.checkCombatStatus();
    }
  };

  attackEnemyTwo = () => {

    //Target a random ally in the tree - TODO: This can be set to pick less randomly (0-100, 1-80 1st, 81-100 2nd)
    const rand = Math.ceil(Math.random() * this.totalActiveAllies());


    if(this.state.allyOneHealth > 0 && rand === 1){
      this.setState({
        allyOneHealth: this.state.allyOneHealth - this.state.enemyTwoDamage,
      });
      this.checkCombatStatus();
    } 
    else if(this.state.allyTwoHealth > 0 && rand === 2){
      this.setState({
        allyTwoHealth: this.state.allyTwoHealth - this.state.enemyTwoDamage,
      });
      this.checkCombatStatus();
    } else if(this.state.allyThrHealth > 0 && rand === 3){
      this.setState({
        allyThrHealth: this.state.allyThrHealth - this.state.enemyTwoDamage,
      });
      this.checkCombatStatus();
    } else if (this.state.allyFouHealth > 0 && rand === 4){
      this.setState({
        allyFouHealth: this.state.allyFouHealth - this.state.enemyTwoDamage,
      });
      this.checkCombatStatus();
    } else if (this.state.allyFivHealth > 0 && rand === 5){
      this.setState({
        allyFivHealth: this.state.allyFivHealth - this.state.enemyTwoDamage,
      });
      this.checkCombatStatus();
    }  else if (this.state.allySixHealth > 0 && rand === 6){
      this.setState({
        allySixHealth: this.state.allySixHealth - this.state.enemyTwoDamage,
      });
      this.checkCombatStatus();
    }
  };

  attackEnemyThr = () => {

    //Target a random ally in the tree - TODO: This can be set to pick less randomly (0-100, 1-80 1st, 81-100 2nd)
    const rand = Math.ceil(Math.random() * this.totalActiveAllies());


    if(this.state.allyOneHealth > 0 && rand === 1){
      this.setState({
        allyThrHealth: this.state.allyOneHealth - this.state.enemyThrDamage,
      });
      this.checkCombatStatus();
    } 
    else if(this.state.allyTwoHealth > 0 && rand === 2){
      this.setState({
        allyTwoHealth: this.state.allyTwoHealth - this.state.enemyThrDamage,
      });
      this.checkCombatStatus();
    } else if(this.state.allyThrHealth > 0 && rand === 3){
      this.setState({
        allyThrHealth: this.state.allyThrHealth - this.state.enemyThrDamage,
      });
      this.checkCombatStatus();
    } else if (this.state.allyFouHealth > 0 && rand === 4){
      this.setState({
        allyFouHealth: this.state.allyFouHealth - this.state.enemyThrDamage,
      });
      this.checkCombatStatus();
    } else if (this.state.allyFivHealth > 0 && rand === 5){
      this.setState({
        allyFivHealth: this.state.allyFivHealth - this.state.enemyThrDamage,
      });
      this.checkCombatStatus();
    }  else if (this.state.allySixHealth > 0 && rand === 6){
      this.setState({
        allySixHealth: this.state.allySixHealth - this.state.enemyThrDamage,
      });
      this.checkCombatStatus();
    }
  };

  attackEnemyFou = () => {

    //Target a random ally in the tree - TODO: This can be set to pick less randomly (0-100, 1-80 1st, 81-100 2nd)
    const rand = Math.ceil(Math.random() * this.totalActiveAllies());


    if(this.state.allyOneHealth > 0 && rand === 1){
      this.setState({
        allyOneHealth: this.state.allyOneHealth - this.state.enemyFouDamage,
      });
      this.checkCombatStatus();
    } 
    else if(this.state.allyTwoHealth > 0 && rand === 2){
      this.setState({
        allyTwoHealth: this.state.allyTwoHealth - this.state.enemyFouDamage,
      });
      this.checkCombatStatus();
    } else if(this.state.allyThrHealth > 0 && rand === 3){
      this.setState({
        allyThrHealth: this.state.allyThrHealth - this.state.enemyFouDamage,
      });
      this.checkCombatStatus();
    } else if (this.state.allyFouHealth > 0 && rand === 4){
      this.setState({
        allyFouHealth: this.state.allyFouHealth - this.state.enemyFouDamage,
      });
      this.checkCombatStatus();
    } else if (this.state.allyFivHealth > 0 && rand === 5){
      this.setState({
        allyFivHealth: this.state.allyFivHealth - this.state.enemyFouDamage,
      });
      this.checkCombatStatus();
    }  else if (this.state.allySixHealth > 0 && rand === 6){
      this.setState({
        allySixHealth: this.state.allySixHealth - this.state.enemyFouDamage,
      });
      this.checkCombatStatus();
    }
  };

  attackEnemyFiv = () => {

    //Target a random ally in the tree - TODO: This can be set to pick less randomly (0-100, 1-80 1st, 81-100 2nd)
    const rand = Math.ceil(Math.random() * this.totalActiveAllies());


    if(this.state.allyOnevHealth > 0 && rand === 1){
      this.setState({
        allyOneHealth: this.state.allyOneHealth - this.state.enemyFivDamage,
      });
      this.checkCombatStatus();
    } 
    else if(this.state.allyTwoHealth > 0 && rand === 2){
      this.setState({
        allyTwoHealth: this.state.allyTwoHealth - this.state.enemyFivDamage,
      });
      this.checkCombatStatus();
    } else if(this.state.allyThrHealth > 0 && rand === 3){
      this.setState({
        allyThrHealth: this.state.allyThrHealth - this.state.enemyFivDamage,
      });
      this.checkCombatStatus();
    } else if (this.state.allyFouHealth > 0 && rand === 4){
      this.setState({
        allyFouHealth: this.state.allyFouHealth - this.state.enemyFivDamage,
      });
      this.checkCombatStatus();
    } else if (this.state.allyFivHealth > 0 && rand === 5){
      this.setState({
        allyFivHealth: this.state.allyFivHealth - this.state.enemyFivDamage,
      });
      this.checkCombatStatus();
    }  else if (this.state.allySixHealth > 0 && rand === 6){
      this.setState({
        allySixHealth: this.state.allySixHealth - this.state.enemyFivDamage,
      });
      this.checkCombatStatus();
    }
  };

  attackEnemySix = () => {

    //Target a random ally in the tree - TODO: This can be set to pick less randomly (0-100, 1-80 1st, 81-100 2nd)
    const rand = Math.ceil(Math.random() * this.totalActiveAllies());

    if(this.state.allyOneHealth > 0 && rand === 1){
      this.setState({
        allyOneHealth: this.state.allyOneHealth - this.state.enemySixDamage,
      });
      this.checkCombatStatus();
    } 
    else if((this.state.allyTwoHealth > 0 && rand === 2) || (this.state.allyTwoHealth > 0 && this.totalActiveAllies() <= 5)){
      this.setState({
        allyTwoHealth: this.state.allyTwoHealth - this.state.enemySixDamage,
      });
      this.checkCombatStatus();      
    } else if((this.state.allyThrHealth > 0 && rand === 3) || (this.state.allyThrHealth > 0 && this.totalActiveAllies() <= 5)){
      this.setState({
        allyThrHealth: this.state.allyThrHealth - this.state.enemySixDamage,
      });
      this.checkCombatStatus();      
    } else if ((this.state.allyFouHealth > 0 && rand === 4) || (this.state.allyFouHealth > 0 && this.totalActiveAllies() <= 5)){
      this.setState({
        allyFouHealth: this.state.allyFouHealth - this.state.enemySixDamage,
      });
      this.checkCombatStatus();      
    } else if ((this.state.allyFivHealth > 0 && rand === 5) || (this.state.allyFivHealth > 0 && this.totalActiveAllies() <= 5)){
      this.setState({
        allyFivHealth: this.state.allyFivHealth - this.state.enemySixDamage,
      });
      this.checkCombatStatus();      
    }  else if ((this.state.allySixHealth > 0 && rand === 6) || (this.state.allySixHealth > 0 && this.totalActiveAllies() <= 5)){
      this.setState({
        allySixHealth: this.state.allySixHealth - this.state.enemySixDamage,
      });
      this.checkCombatStatus();      
    }
  };

  checkCombatStatus(){
    if(this.state.allyOneHealth <= 0){
      this.allyOneDefeated();
    }
    if(this.state.allyTwoHealth <= 0){
      this.allyTwoDefeated();
    }
    if(this.state.allyThrHealth <= 0){
      this.allyThrDefeated();
    }
    if(this.state.allyFouHealth <= 0){
      this.allyFouDefeated();
    }
    if(this.state.allyFivHealth <= 0){
      this.allyFivDefeated();
    }
    if(this.state.allySixHealth <= 0){
      this.allySixDefeated();
    }


    if(this.state.enemyOneHealth <= 0){
      this.enemyOneDefeated();
    }
    if(this.state.enemyTwoHealth <= 0){
      this.enemyTwoDefeated();
    }
    if(this.state.enemyThrHealth <= 0){
      this.enemyThrDefeated();
    }
    if(this.state.enemyFouHealth <= 0){
      this.enemyFouDefeated();
    }
    if(this.state.enemyFivHealth <= 0){
      this.enemyFivDefeated();
    }
    if(this.state.enemySixHealth <= 0){
      this.enemySixDefeated();
    }
  }

  /*
  * Defeated Allies and Enemies
  */

  allyOneDefeated = () => {

    //First, let's map through the ally active array and set this one enemy to active
    this.setState(state => {
      const allyActive = state.allyActive.map((item, index) => {
        if(index === 0){
          return false;
        } else {
          return item;
        }
      })
      
      return {
        allyActive,
      }
    });

    //This setTimeout will wait for the respawn time to set them back to x% health and active
    setTimeout ( () =>{
      this.setState({allyOneHealth : this.state.allyOneMaxHealth});
      this.setState({allyOneExp : this.state.allyOneExp / 4});
    }, 14000);

    setTimeout ( () =>{
      this.setState(state => {
        const allyActive = state.allyActive.map((item, index) => {
          if(index === 0){
            return true;
          } else {
            return item; 
          }
        })
        
        return {
          allyActive,
        }
      })
    }, 15000);
  } 


  allyTwoDefeated = () => {

    //First, let's map through the ally active array and set this Two enemy to active
    this.setState(state => {
      const allyActive = state.allyActive.map((item, index) => {
        if(index === 1){
          return false;
        } else {
          return item;
        }
      })
      
      return {
        allyActive,
      }
    });

    //This setTimeout will wait for the respawn time to set them back to x% health and active
    setTimeout ( () =>{
      this.setState({allyTwoHealth : this.state.allyTwoMaxHealth});
      this.setState({allyTwoExp : this.state.allyTwoExp / 4});
    }, 14000);

    setTimeout ( () =>{
      this.setState(state => {
        const allyActive = state.allyActive.map((item, index) => {
          if(index === 1){
            return true;
          } else {
            return item;
          }
        })
        
        return {
          allyActive,
        }
      })
    }, 15000);
  } 

  allyThrDefeated = () => {

    //First, let's map through the ally active array and set this Thr enemy to active
    this.setState(state => {
      const allyActive = state.allyActive.map((item, index) => {
        if(index === 2){
          return false;
        } else {
          return item;
        }
      })
      
      return {
        allyActive,
      }
    });

    //This setTimeout will wait for the respawn time to set them back to x% health and active
    setTimeout ( () =>{
      this.setState({allyThrHealth : this.state.allyThrMaxHealth});
      this.setState({allyThrExp : this.state.allyThrExp / 4});
    }, 14000);

    setTimeout ( () =>{
      this.setState(state => {
        const allyActive = state.allyActive.map((item, index) => {
          if(index === 2){
            return true;
          } else {
            return item;
          }
        })
        
        return {
          allyActive,
        }
      })
    }, 15000);
  } 

  allyFouDefeated = () => {

    //First, let's map Fouough the ally active array and set this Fou enemy to active
    this.setState(state => {
      const allyActive = state.allyActive.map((item, index) => {
        if(index === 3){
          return false;
        } else {
          return item;
        }
      })
      
      return {
        allyActive,
      }
    });

    //This setTimeout will wait for the respawn time to set them back to x% health and active
    setTimeout ( () =>{
      this.setState({allyFouHealth : this.state.allyFouMaxHealth});
      this.setState({allyFouExp : this.state.allyFouExp / 4});
    }, 14000);

    setTimeout ( () =>{
      this.setState(state => {
        const allyActive = state.allyActive.map((item, index) => {
          if(index === 3){
            return true;
          } else {
            return item;
          }
        })
        
        return {
          allyActive,
        }
      })
    }, 15000);
  } 

  allyFivDefeated = () => {

    //First, let's map Fivough the ally active array and set this Fiv enemy to active
    this.setState(state => {
      const allyActive = state.allyActive.map((item, index) => {
        if(index === 4){
          return false;
        } else {
          return item;
        }
      })
      
      return {
        allyActive,
      }
    });

    //This setTimeout will wait for the respawn time to set them back to x% health and active
    setTimeout ( () =>{
      this.setState({allyFivHealth : this.state.allyFivMaxHealth});
      this.setState({allyFivExp : this.state.allyFivExp / 4});
    }, 14000);

    setTimeout ( () =>{
      this.setState(state => {
        const allyActive = state.allyActive.map((item, index) => {
          if(index === 4){
            return true;
          } else {
            return item;
          }
        })
        
        return {
          allyActive,
        }
      })
    }, 15000);
  } 

  allySixDefeated = () => {

    //First, let's map Sixough the ally active array and set this Six enemy to active
    this.setState(state => {
      const allyActive = state.allyActive.map((item, index) => {
        if(index === 5){
          return false;
        } else {
          return item;
        }
      })
      
      return {
        allyActive,
      }
    });

    //This setTimeout will wait for the respawn time to set them back to x% health and active
    setTimeout ( () =>{
      this.setState({allySixHealth : this.state.allySixMaxHealth});
      this.setState({allySixExp : this.state.allySixExp / 4});
    }, 14000);

    setTimeout ( () =>{
      this.setState(state => {
        const allyActive = state.allyActive.map((item, index) => {
          if(index === 5){
            return true;
          } else {
            return item;
          }
        })
        
        return {
          allyActive,
        }
      })
    }, 15000);
  } 

  /*
  * Defeated Allies and Enemies
  */

  enemyOneDefeated = () => {
    
    this.setState({
      allyOneExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allyTwoExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allyThrExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allyFouExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allyFivExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allySixExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
    });
    
    this.setState({enemyOneHealth: this.state.enemyOneMaxHealth});

    //Check for character level ups
    this.checkForLevel();

    //First, let's map through the enemy active array and set this one enemy to active
    this.setState(state => {
      const enemyActive = state.enemyActive.map((item, index) => {
        if(index === 0){
          return false;
        } else {
          return item;
        }
      })
      
      return {
        enemyActive,
      }
    });

    //This setTimeout will wait for the respawn time to set them back to x% health and active
    setTimeout ( () =>{
      this.setState({enemyOneHealth: this.state.enemyOneMaxHealth});
    }, 15000);

    setTimeout ( () =>{
      this.setState(state => {
        const enemyActive = state.enemyActive.map((item, index) => {
          if(index === 0){
            return true;
          } else {
            return item;
          }
        })
        
        return {
          enemyActive,
        }
      })
    }, 3250);
  }


  enemyTwoDefeated = () => {
    
    this.setState({
      allyOneExp: this.state.allyTwoExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allyTwoExp: this.state.allyTwoExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allyThrExp: this.state.allyTwoExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allyFouExp: this.state.allyTwoExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allyFivExp: this.state.allyTwoExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allySixExp: this.state.allyTwoExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
    });
    
    this.setState({enemyTwoHealth: this.state.enemyTwoMaxHealth});

    //Check for character level ups
    this.checkForLevel();

    //First, let's map through the enemy active array and set this Two enemy to active
    this.setState(state => {
      const enemyActive = state.enemyActive.map((item, index) => {
        if(index === 1){
          return false;
        } else {
          return item;
        }
      })
      
      return {
        enemyActive,
      }
    });

    //This setTimeout will wait for the respawn time to set them back to x% health and active
    setTimeout ( () =>{
      this.setState({enemyTwoHealth: this.state.enemyTwoMaxHealth});
    }, 1500);

    setTimeout ( () =>{
      this.setState(state => {
        const enemyActive = state.enemyActive.map((item, index) => {
          if(index === 1){
            return true;
          } else {
            return item;
          }
        })
        
        return {
          enemyActive,
        }
      })
    }, 1750);
  }


  enemyThrDefeated = () => {
    
    this.setState({
      allyOneExp: this.state.allyThrExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allyTwoExp: this.state.allyThrExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allyThrExp: this.state.allyThrExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allyFouExp: this.state.allyThrExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allyFivExp: this.state.allyThrExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allySixExp: this.state.allyThrExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
    });
    
    this.setState({enemyThrHealth: this.state.enemyThrMaxHealth});

    //Check for character level ups
    this.checkForLevel();

    //First, let's map through the enemy active array and set this Thr enemy to active
    this.setState(state => {
      const enemyActive = state.enemyActive.map((item, index) => {
        if(index === 2){
          return false;
        } else {
          return item;
        }
      })
      
      return {
        enemyActive,
      }
    });

    //This setTimeout will wait for the respawn time to set them back to x% health and active
    setTimeout ( () =>{
      this.setState({enemyThrHealth: this.state.enemyThrMaxHealth});
    }, 2000);

    setTimeout ( () =>{
      this.setState(state => {
        const enemyActive = state.enemyActive.map((item, index) => {
          if(index === 2){
            return true;
          } else {
            return item;
          }
        })
        
        return {
          enemyActive,
        }
      })
    }, 2250);
  }

  enemyFouDefeated = () => {
    
    this.setState({
      allyOneExp: this.state.allyFouExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allyTwoExp: this.state.allyFouExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allyThrExp: this.state.allyFouExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allyFouExp: this.state.allyFouExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allyFivExp: this.state.allyFouExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allySixExp: this.state.allyFouExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
    });
    
    this.setState({enemyFouHealth: this.state.enemyFouMaxHealth});

    //Check for character level ups
    this.checkForLevel();

    //First, let's map through the enemy active array and set this Fou enemy to active
    this.setState(state => {
      const enemyActive = state.enemyActive.map((item, index) => {
        if(index === 3){
          return false;
        } else {
          return item;
        }
      })
      
      return {
        enemyActive,
      }
    });

    //This setTimeout will wait for the respawn time to set them back to x% health and active
    setTimeout ( () =>{
      this.setState({enemyFouHealth: this.state.enemyFouMaxHealth});
    }, 2500);

    setTimeout ( () =>{
      this.setState(state => {
        const enemyActive = state.enemyActive.map((item, index) => {
          if(index === 3){
            return true;
          } else {
            return item;
          }
        })
        
        return {
          enemyActive,
        }
      })
    }, 14000);
  }

  enemyFivDefeated = () => {
    
    this.setState({
      allyOneExp: this.state.allyFivExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allyTwoExp: this.state.allyFivExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allyThrExp: this.state.allyFivExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allyFouExp: this.state.allyFivExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allyFivExp: this.state.allyFivExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allySixExp: this.state.allyFivExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
    });
    
    this.setState({enemyFivHealth: this.state.enemyFivMaxHealth});

    //Check for character level ups
    this.checkForLevel();

    //First, let's map through the enemy active array and set this Fiv enemy to active
    this.setState(state => {
      const enemyActive = state.enemyActive.map((item, index) => {
        if(index === 4){
          return false;
        } else {
          return item;
        }
      })
      
      return {
        enemyActive,
      }
    });

    //This setTimeout will wait for the respawn time to set them back to x% health and active
    setTimeout ( () =>{
      this.setState({enemyFivHealth: this.state.enemyFivMaxHealth});
    }, 15000);

    setTimeout ( () =>{
      this.setState(state => {
        const enemyActive = state.enemyActive.map((item, index) => {
          if(index === 4){
            return true;
          } else {
            return item;
          }
        })
        
        return {
          enemyActive,
        }
      })
    }, 3500);
  }


  enemySixDefeated = () => {
    
    this.setState({
      allyOneExp: this.state.allySixExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allyTwoExp: this.state.allySixExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allyThrExp: this.state.allySixExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allyFouExp: this.state.allySixExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allyFivExp: this.state.allySixExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      allySixExp: this.state.allySixExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
    });
    
    this.setState({enemySixHealth: this.state.enemySixMaxHealth});

    //Check for character level ups
    this.checkForLevel();

    //First, let's map through the enemy active array and set this Six enemy to active
    this.setState(state => {
      const enemyActive = state.enemyActive.map((item, index) => {
        if(index === 5){
          return false;
        } else {
          return item;
        }
      })
      
      return {
        enemyActive,
      }
    });

    //This setTimeout will wait for the respawn time to set them back to x% health and active
    setTimeout ( () =>{
      this.setState({enemySixHealth: this.state.enemySixMaxHealth});
    }, 15000);

    setTimeout ( () =>{
      this.setState(state => {
        const enemyActive = state.enemyActive.map((item, index) => {
          if(index === 5){
            return true;
          } else {
            return item;
          }
        })
        
        return {
          enemyActive,
        }
      })
    }, 15000);
  }

  /*
  * LEVELING SYSTEM
  */ 

  checkForLevel = () => {

    //Character 1
    if(this.state.allyOneExp >= this.state.allyOneMaxExp){

      //First, let's map through the array and update just the person who leveled
      this.setState(state => {
        const allyLevels = state.allyLevels.map((item, index) => {
          if(index === 0){
            return state.allyLevels[0] += 1;
          } else {
            return item;
          }
        })
        
        return {
          allyLevels,
        }
      });

      //Some more individual state setting
      this.setState({
        allyOneExp: 0,
        allyOneMaxExp: this.state.calculateNextLevel() * this.state.allyOneMaxExp,
      });

    }
    if(this.state.allyTwoExp >= this.state.allyTwoMaxExp){

        //First, let's map through the array and update just the person who leveled
        this.setState(state => {

        const allyLevels = state.allyLevels.map((item, index) => {
          if(index === 1){
            return state.allyLevels[1] += 1;
          } else {
            return item;
          }
        })
          
        return {
          allyLevels,
        }
      });

      //Some more individual state setting
      this.setState({
        allyTwoExp: 0,
        allyTwoMaxExp: this.state.calculateNextLevel() * this.state.allyTwoMaxExp,
      });
     
    }
    if(this.state.allyThrExp >= this.state.allyThrMaxExp){
        //First, let's map through the array and update just the person who leveled
        this.setState(state => {

          const allyLevels = state.allyLevels.map((item, index) => {
            if(index === 2){
              return state.allyLevels[2] += 1;
            } else {
              return item;
            }
          })
            
          return {
            allyLevels,
          }
        });
  
        //Some more individual state setting
        this.setState({
          allyThrExp: 0,
          allyThrMaxExp: this.state.calculateNextLevel() * this.state.allyThrMaxExp,
        });
       
    }
    if(this.state.allyFouExp >= this.state.allyFouMaxExp){
        //First, let's map through the array and update just the person who leveled
        this.setState(state => {

          const allyLevels = state.allyLevels.map((item, index) => {
            if(index === 3){
              return state.allyLevels[3] += 1;
            } else {
              return item;
            }
          })
            
          return {
            allyLevels,
          }
        });
  
        //Some more individual state setting
        this.setState({
          allyFouExp: 0,
          allyFouMaxExp: this.state.calculateNextLevel() * this.state.allyFouMaxExp,
        });
       
    }
    if(this.state.allyFivExp >= this.state.allyFivMaxExp){
        //First, let's map through the array and update just the person who leveled
        this.setState(state => {

          const allyLevels = state.allyLevels.map((item, index) => {
            if(index === 4){
              return state.allyLevels[4] += 1;
            } else {
              return item;
            }
          })
            
          return {
            allyLevels,
          }
        });
  
        //Some more individual state setting
        this.setState({
          allyFivExp: 0,
          allyFivMaxExp: this.state.calculateNextLevel() * this.state.allyTwoMaxExp,
        });
       
    }
    if(this.state.allySixExp >= this.state.allySixMaxExp){
        //First, let's map through the array and update just the person who leveled
        this.setState(state => {

          const allyLevels = state.allyLevels.map((item, index) => {
            if(index === 5){
              return state.allyLevels[5] += 1;
            } else {
              return item;
            }
          })
            
          return {
            allyLevels,
          }
        });
  
        //Some more individual state setting
        this.setState({
          allySixExp: 0,
          allySixMaxExp: this.state.calculateNextLevel() * this.state.allySixMaxExp,
        });
       
    }
  }

  render() {
    return (
      <div className="combat">

        <PlayerTeam
          allyClass={this.state.allyClass} 
          allyLevels={this.state.allyLevels} 
          allyActive={this.state.allyActive} 

          enemyClass={this.state.enemyClass} 
          enemyLevels={this.state.enemyLevels}
          enemyActive={this.state.enemyActive}

            allyOneAttackSpeed = {this.state.allyOneAttackSpeed}
            allyOneBaseAttack = {this.state.allyOneBaseAttack}
            allyOneBaseAttackCount = {this.state.allyOneBaseAttackCount}
            allyOneHealth = {this.state.allyOneHealth}
            allyOneMaxHealth = {this.state.allyOneMaxHealth}
            allyOneDamage = {this.state.allyOneDamage}
            allyOneDefense = {this.state.allyOneDefense}
            allyOneExp = {this.state.allyOneExp}
            allyOneMaxExp = {this.state.allyOneMaxExp}

            allyTwoAttackSpeed = {this.state.allyTwoAttackSpeed}
            allyTwoBaseAttack = {this.state.allyTwoBaseAttack}
            allyTwoBaseAttackCount = {this.state.allyTwoBaseAttackCount}
            allyTwoHealth = {this.state.allyTwoHealth}
            allyTwoMaxHealth = {this.state.allyTwoMaxHealth}
            allyTwoDamage = {this.state.allyTwoDamage}
            allyTwoDefense = {this.state.allyTwoDefense}
            allyTwoExp = {this.state.allyTwoExp}
            allyTwoMaxExp = {this.state.allyTwoMaxExp}

            allyThrAttackSpeed = {this.state.allyThrAttackSpeed}
            allyThrBaseAttack = {this.state.allyThrBaseAttack}
            allyThrBaseAttackCount = {this.state.allyThrBaseAttackCount}
            allyThrHealth = {this.state.allyThrHealth}
            allyThrMaxHealth = {this.state.allyThrMaxHealth}
            allyThrDamage = {this.state.allyThrDamage}
            allyThrDefense = {this.state.allyThrDefense}
            allyThrExp = {this.state.allyThrExp}
            allyThrMaxExp = {this.state.allyThrMaxExp}

            allyFouAttackSpeed = {this.state.allyFouAttackSpeed}
            allyFouBaseAttack = {this.state.allyFouBaseAttack}
            allyFouBaseAttackCount = {this.state.allyFouBaseAttackCount}
            allyFouHealth = {this.state.allyFouHealth}
            allyFouMaxHealth = {this.state.allyFouMaxHealth}
            allyFouDamage = {this.state.allyFouDamage}
            allyFouDefense = {this.state.allyFouDefense}
            allyFouExp = {this.state.allyFouExp}
            allyFouMaxExp = {this.state.allyFouMaxExp}

            allyFivAttackSpeed = {this.state.allyFivAttackSpeed}
            allyFivBaseAttack = {this.state.allyFivBaseAttack}
            allyFivBaseAttackCount = {this.state.allyFivBaseAttackCount}
            allyFivHealth = {this.state.allyFivHealth}
            allyFivMaxHealth = {this.state.allyFivMaxHealth}
            allyFivDamage = {this.state.allyFivDamage}
            allyFivDefense = {this.state.allyFivDefense}
            allyFivExp = {this.state.allyFivExp}
            allyFivMaxExp = {this.state.allyFivMaxExp}

            allySixAttackSpeed = {this.state.allySixAttackSpeed}
            allySixBaseAttack = {this.state.allySixBaseAttack}
            allySixBaseAttackCount = {this.state.allySixBaseAttackCount}
            allySixHealth = {this.state.allySixHealth}
            allySixMaxHealth = {this.state.allySixMaxHealth}
            allySixDamage = {this.state.allySixDamage}
            allySixDefense = {this.state.allySixDefense}
            allySixExp = {this.state.allySixExp}
            allySixMaxExp = {this.state.allySixMaxExp}

            //Enemies
            enemyOneAttackSpeed = {this.state.enemyOneAttackSpeed}
            enemyOneBaseAttack = {this.state.enemyOneBaseAttack}
            enemyOneBaseAttackCount = {this.state.enemyOneBaseAttackCount}
            enemyOneHealth = {this.state.enemyOneHealth}
            enemyOneMaxHealth = {this.state.enemyOneMaxHealth}
            enemyOneDamage = {this.state.enemyOneDamage}
            enemyOneDefense = {this.state.enemyOneDefense}

            enemyTwoAttackSpeed = {this.state.enemyTwoAttackSpeed}
            enemyTwoBaseAttack = {this.state.enemyTwoBaseAttack}
            enemyTwoBaseAttackCount = {this.state.enemyTwoBaseAttackCount}
            enemyTwoHealth = {this.state.enemyTwoHealth}
            enemyTwoMaxHealth = {this.state.enemyTwoMaxHealth}
            enemyTwoDamage = {this.state.enemyTwoDamage}
            enemyTwoDefense = {this.state.enemyTwoDefense}

            enemyThrAttackSpeed = {this.state.enemyThrAttackSpeed}
            enemyThrBaseAttack = {this.state.enemyThrBaseAttack}
            enemyThrBaseAttackCount = {this.state.enemyThrBaseAttackCount}
            enemyThrHealth = {this.state.enemyThrHealth}
            enemyThrMaxHealth = {this.state.enemyThrMaxHealth}
            enemyThrDamage = {this.state.enemyThrDamage}
            enemyThrDefense = {this.state.enemyThrDefense}

            enemyFouAttackSpeed = {this.state.enemyFouAttackSpeed}
            enemyFouBaseAttack = {this.state.enemyFouBaseAttack}
            enemyFouBaseAttackCount = {this.state.enemyFouBaseAttackCount}
            enemyFouHealth = {this.state.enemyFouHealth}
            enemyFouMaxHealth = {this.state.enemyFouMaxHealth}
            enemyFouDamage = {this.state.enemyFouDamage}
            enemyFouDefense = {this.state.enemyFouDefense}

            enemyFivAttackSpeed = {this.state.enemyFivAttackSpeed}
            enemyFivBaseAttack = {this.state.enemyFivBaseAttack}
            enemyFivBaseAttackCount = {this.state.enemyFivBaseAttackCount}
            enemyFivHealth = {this.state.enemyFivHealth}
            enemyFivMaxHealth = {this.state.enemyFivMaxHealth}
            enemyFivDamage = {this.state.enemyFivDamage}
            enemyFivDefense = {this.state.enemyFivDefense}


            enemySixAttackSpeed = {this.state.enemySixAttackSpeed}
            enemySixBaseAttack = {this.state.enemySixBaseAttack}
            enemySixBaseAttackCount = {this.state.enemySixBaseAttackCount}
            enemySixHealth = {this.state.enemySixHealth}
            enemySixMaxHealth = {this.state.enemySixMaxHealth}
            enemySixDamage = {this.state.enemySixDamage} 
            enemySixDefense = {this.state.enemySixDefense} >

          <Progress 
            // Allies
            allyActive={this.state.allyActive} 
            allyOneAttackSpeed = {this.state.allyOneAttackSpeed}
            allyOneBaseAttack = {this.state.allyOneBaseAttack}
            allyOneBaseAttackCount = {this.state.allyOneBaseAttackCount}
            allyOneHealth = {this.state.allyOneHealth}
            allyOneMaxHealth = {this.state.allyOneMaxHealth}
            allyOneDamage = {this.state.allyOneDamage}
            allyOneExp = {this.state.allyOneExp}
            allyOneMaxExp = {this.state.allyOneMaxExp}
            
            allyTwoAttackSpeed = {this.state.allyTwoAttackSpeed}
            allyTwoBaseAttack = {this.state.allyTwoBaseAttack}
            allyTwoBaseAttackCount = {this.state.allyTwoBaseAttackCount}
            allyTwoHealth = {this.state.allyTwoHealth}
            allyTwoMaxHealth = {this.state.allyTwoMaxHealth}
            allyTwoDamage = {this.state.allyTwoDamage}
            allyTwoExp = {this.state.allyTwoExp}
            allyTwoMaxExp = {this.state.allyTwoMaxExp}

            allyThrAttackSpeed = {this.state.allyThrAttackSpeed}
            allyThrBaseAttack = {this.state.allyThrBaseAttack}
            allyThrBaseAttackCount = {this.state.allyThrBaseAttackCount}
            allyThrHealth = {this.state.allyThrHealth}
            allyThrMaxHealth = {this.state.allyThrMaxHealth}
            allyThrDamage = {this.state.allyThrDamage}
            allyThrExp = {this.state.allyThrExp}
            allyThrMaxExp = {this.state.allyThrMaxExp}

            allyFouAttackSpeed = {this.state.allyFouAttackSpeed}
            allyFouBaseAttack = {this.state.allyFouBaseAttack}
            allyFouBaseAttackCount = {this.state.allyFouBaseAttackCount}
            allyFouHealth = {this.state.allyFouHealth}
            allyFouMaxHealth = {this.state.allyFouMaxHealth}
            allyFouDamage = {this.state.allyFouDamage}
            allyFouExp = {this.state.allyFouExp}
            allyFouMaxExp = {this.state.allyFouMaxExp}
                 
            allyFivAttackSpeed = {this.state.allyFivAttackSpeed}
            allyFivBaseAttack = {this.state.allyFivBaseAttack}
            allyFivBaseAttackCount = {this.state.allyFivBaseAttackCount}
            allyFivHealth = {this.state.allyFivHealth}
            allyFivMaxHealth = {this.state.allyFivMaxHealth}
            allyFivDamage = {this.state.allyFivDamage}
            allyFivExp = {this.state.allyFivExp}
            allyFivMaxExp = {this.state.allyFivMaxExp}

            allySixAttackSpeed = {this.state.allySixAttackSpeed}
            allySixBaseAttack = {this.state.allySixBaseAttack}
            allySixBaseAttackCount = {this.state.allySixBaseAttackCount}
            allySixHealth = {this.state.allySixHealth}
            allySixMaxHealth = {this.state.allySixMaxHealth}
            allySixDamage = {this.state.allySixDamage}
            allySixExp = {this.state.allySixExp}
            allySixMaxExp = {this.state.allySixMaxExp}

            //Enemies
            enemyActive={this.state.enemyActive}
            enemyOneAttackSpeed = {this.state.enemyOneAttackSpeed}
            enemyOneBaseAttack = {this.state.enemyOneBaseAttack}
            enemyOneBaseAttackCount = {this.state.enemyOneBaseAttackCount}
            enemyOneHealth = {this.state.enemyOneHealth}
            enemyOneMaxHealth = {this.state.enemyOneMaxHealth}
            enemyOneDamage = {this.state.enemyOneDamage}

            enemyTwoAttackSpeed = {this.state.enemyTwoAttackSpeed}
            enemyTwoBaseAttack = {this.state.enemyTwoBaseAttack}
            enemyTwoBaseAttackCount = {this.state.enemyTwoBaseAttackCount}
            enemyTwoHealth = {this.state.enemyTwoHealth}
            enemyTwoMaxHealth = {this.state.enemyTwoMaxHealth}
            enemyTwoDamage = {this.state.enemyTwoDamage}
            
            enemyThrAttackSpeed = {this.state.enemyThrAttackSpeed}
            enemyThrBaseAttack = {this.state.enemyThrBaseAttack}
            enemyThrBaseAttackCount = {this.state.enemyThrBaseAttackCount}
            enemyThrHealth = {this.state.enemyThrHealth}
            enemyThrMaxHealth = {this.state.enemyThrMaxHealth}
            enemyThrDamage = {this.state.enemyThrDamage}

            enemyFouAttackSpeed = {this.state.enemyFouAttackSpeed}
            enemyFouBaseAttack = {this.state.enemyFouBaseAttack}
            enemyFouBaseAttackCount = {this.state.enemyFouBaseAttackCount}
            enemyFouHealth = {this.state.enemyFouHealth}
            enemyFouMaxHealth = {this.state.enemyFouMaxHealth}
            enemyFouDamage = {this.state.enemyFouDamage}

            enemyFivAttackSpeed = {this.state.enemyFivAttackSpeed}
            enemyFivBaseAttack = {this.state.enemyFivBaseAttack}
            enemyFivBaseAttackCount = {this.state.enemyFivBaseAttackCount}
            enemyFivHealth = {this.state.enemyFivHealth}
            enemyFivMaxHealth = {this.state.enemyFivMaxHealth}
            enemyFivDamage = {this.state.enemyFivDamage}

            enemySixAttackSpeed = {this.state.enemySixAttackSpeed}
            enemySixBaseAttack = {this.state.enemySixBaseAttack}
            enemySixBaseAttackCount = {this.state.enemySixBaseAttackCount}
            enemySixHealth = {this.state.enemySixHealth}
            enemySixMaxHealth = {this.state.enemySixMaxHealth}
            enemySixDamage = {this.state.enemySixDamage} 
          /> 
        </PlayerTeam>

        <ToonStats 
          
          allyClass={this.state.allyClass} 
          allyLevels={this.state.allyLevels} 
          allyActive={this.state.allyActive} 

          enemyClass={this.state.enemyClass} 
          enemyLevels={this.state.enemyLevels}
          enemyActive={this.state.enemyActive}
          
          allStats={this.state}>
        </ToonStats>
        
        <ToonSkills           
          allyClass={this.state.allyClass} 
          allyLevels={this.state.allyLevels} 
          allyActive={this.state.allyActive} 

          enemyClass={this.state.enemyClass} 
          enemyLevels={this.state.enemyLevels}
          enemyActive>

        </ToonSkills>

        {this.props.children}
      </div>
    )
  }
}
