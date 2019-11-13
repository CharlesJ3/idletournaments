import React from 'react';
import PlayerTeam from '../Components/PlayerTeam';
import Progress from '../Components/Progress';
import ToonStats from '../Components/ToonStats';
import ToonSkills from '../Components/ToonSkills';
import Header from '../Components/Header';
import Settings from '../Components/Settings';
import Options from '../Components/Options';

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
        1,
        1,
        1,
        1,
        1,
      ],

      allyActive: [
        true,
        false,
        false,
        false,
        false,
        false,
      ],

      allyPurchase: [
        true,
        false,
        false,
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
        1,
        1,
        1,
        1,
        1,
      ],

      enemyActive: [
        true,
        false,
        false,
        false,
        false,
        false,
      ],

      //Leveling and Experience
      expCalculator: 1.45,

      //Currency
      gold: 0,
      rp: 0,

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
      allyOneRezChance: 25,
      allyOneLevelDam: .25,
      allyOneLevelDef: .25,
      allyOneLevelMaxHP: 1,

      allyTwoAttackSpeed: 1,
      allyTwoBaseAttack: 0,
      allyTwoBaseAttackCount: 0,
      allyTwoDamage: 1,
      allyTwoDefense: 1,
      allyTwoHealth: 20,
      allyTwoMaxHealth: 20,
      allyTwoExp: 0,
      allyTwoMaxExp: 4,
      allyTwoRezChance: 25,
      allyTwoLevelDam: .25,
      allyTwoLevelDef: .25,
      allyTwoLevelMaxHP: 1,

      allyThrAttackSpeed: 3,
      allyThrBaseAttack: 0,
      allyThrBaseAttackCount: 0,
      allyThrDamage: 1,
      allyThrDefense: 1,
      allyThrHealth: 20,
      allyThrMaxHealth: 20,
      allyThrExp: 0,
      allyThrMaxExp: 6,
      allyThrRezChance: 25,
      allyThrLevelDam: .25,
      allyThrLevelDef: .25,
      allyThrLevelMaxHP: 1,

      allyFouAttackSpeed: 1.5,
      allyFouBaseAttack: 0,
      allyFouBaseAttackCount: 0,
      allyFouDamage: 1,
      allyFouDefense: 1,
      allyFouHealth: 20,
      allyFouMaxHealth: 20,
      allyFouExp: 0,
      allyFouMaxExp: 8,
      allyFouRezChance: 25,
      allyFouLevelDam: .25,
      allyFouLevelDef: .25,
      allyFouLevelMaxHP: 1,

      allyFivAttackSpeed: 2,
      allyFivBaseAttack: 0,
      allyFivBaseAttackCount: 0,
      allyFivDamage: 1,
      allyFivDefense: 1,
      allyFivHealth: 20,
      allyFivMaxHealth: 20,
      allyFivExp: 0,
      allyFivMaxExp: 10,
      allyFivRezChance: 25,
      allyFivLevelDam: .25,
      allyFivLevelDef: .25,
      allyFivLevelMaxHP: 1,

      allySixAttackSpeed: 3,
      allySixBaseAttack: 0,
      allySixBaseAttackCount: 0,
      allySixDamage: 1,
      allySixDefense: 1,
      allySixHealth: 20,
      allySixMaxHealth: 20,
      allySixExp: 0,
      allySixMaxExp: 12,
      allySixRezChance: 25,
      allySixLevelDam: .25,
      allySixLevelDef: .25,
      allySixLevelMaxHP: 1,

      //Enemy Team
      enemyOneAttackSpeed: 2.5,
      enemyOneBaseAttack: 0,
      enemyOneBaseAttackCount: 0,
      enemyOneDamage: 1,
      enemyOneDefense: 1,
      enemyOneHealth: 5,
      enemyOneMaxHealth: 5,
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

      enemySixAttackSpeed: 2.5,
      enemySixBaseAttack: 0,
      enemySixBaseAttackCount: 0,
      enemySixDamage: 1,
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
   } else {
    this.setState({
      allyOneBaseAttackCount: 0,
      allyOneBaseAttack: 0,
    });
   }
  }


  attack2 = () => {

    //Begin Attack
    if(this.state.allyTwoBaseAttackCount <= this.state.allyTwoAttackSpeed && this.state.allyActive[1]){
      this.setState({
        allyTwoBaseAttackCount: this.state.allyTwoBaseAttackCount + .250,
        allyTwoBaseAttack: 100,
      });

    //End Attack
   } else if (this.state.allyTwoBaseAttackCount >= this.state.allyTwoAttackSpeed) {

    // Do Damage to SET TARGET
    this.attackAllyTwo();
    this.setState({
      allyTwoBaseAttackCount: 0,
      allyTwoBaseAttack: 0,
    });
   } else {
    this.setState({
      allyTwoBaseAttackCount: 0,
      allyTwoBaseAttack: 0,
    });
   }
  }

  attack3 = () => {

    //Begin Attack
    if(this.state.allyThrBaseAttackCount <= this.state.allyThrAttackSpeed && this.state.allyActive[2]){
      this.setState({
        allyThrBaseAttackCount: this.state.allyThrBaseAttackCount + .250,
        allyThrBaseAttack: 100,
      });

    //End Attack
   } else if (this.state.allyThrBaseAttackCount >= this.state.allyThrAttackSpeed) {

    // Do Damage to SET TARGET
    this.attackAllyThr();
    this.setState({
      allyThrBaseAttackCount: 0,
      allyThrBaseAttack: 0,
    });
   } else {
    this.setState({
      allyThrBaseAttackCount: 0,
      allyThrBaseAttack: 0,
    });
   }
  }


  attack4 = () => {

    //Begin Attack
    if(this.state.allyFouBaseAttackCount <= this.state.allyFouAttackSpeed && this.state.allyActive[3]){
      this.setState({
        allyFouBaseAttackCount: this.state.allyFouBaseAttackCount + .250,
        allyFouBaseAttack: 100,
      });

    //End Attack
   } else if (this.state.allyFouBaseAttackCount >= this.state.allyFouAttackSpeed) {

    // Do Damage to SET TARGET
    this.attackAllyFou();
    this.setState({
      allyFouBaseAttackCount: 0,
      allyFouBaseAttack: 0,
    });
   } else {
    this.setState({
      allyFouBaseAttackCount: 0,
      allyFouBaseAttack: 0,
    });
   }
  }


  attack5 = () => {

    //Begin Attack
    if(this.state.allyFivBaseAttackCount <= this.state.allyFivAttackSpeed && this.state.allyActive[4]){
      this.setState({
        allyFivBaseAttackCount: this.state.allyFivBaseAttackCount + .250,
        allyFivBaseAttack: 100,
      });

    //End Attack
   } else if (this.state.allyFivBaseAttackCount >= this.state.allyFivAttackSpeed) {

    // Do Damage to SET TARGET
    this.attackAllyFiv();
    this.setState({
      allyFivBaseAttackCount: 0,
      allyFivBaseAttack: 0,
    });
   } else {
    this.setState({
      allyFivBaseAttackCount: 0,
      allyFivBaseAttack: 0,
    });
   }
  }


  attack6 = () => {

    //Begin Attack
    if(this.state.allySixBaseAttackCount <= this.state.allySixAttackSpeed && this.state.allyActive[5]){
      this.setState({
        allySixBaseAttackCount: this.state.allySixBaseAttackCount + .250,
        allySixBaseAttack: 100,
      });

    //End Attack
   } else if (this.state.allySixBaseAttackCount >= this.state.allySixAttackSpeed) {

    // Do Damage to SET TARGET
    this.attackAllySix();
    this.setState({
      allySixBaseAttackCount: 0,
      allySixBaseAttack: 0,
    });
   } else {
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
   } else {
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
   } else {
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
   else {
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
   else {
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

   } else {
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

   } else {
    this.setState({
      enemySixBaseAttackCount: 0,
      enemySixBaseAttack: 0,
    });
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
  }

  allyOneRez = () => {

    this.setState({allyOneHealth : this.state.allyOneMaxHealth / 3});
    this.setState({allyOneExp : this.state.allyOneExp / 4});

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
    });
  }


  allyTwoDefeated = () => {

    //First, let's map through the ally active array and set this one enemy to active
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
  }

  allyTwoRez = () => {

    this.setState({allyTwoHealth : this.state.allyTwoMaxHealth / 3});
    this.setState({allyTwoExp : this.state.allyTwoExp / 4});

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
    });
  }


  allyThrDefeated = () => {

    //First, let's map through the ally active array and set this one enemy to active
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
  }

  allyThrRez = () => {

    this.setState({allyThrHealth : this.state.allyThrMaxHealth / 3});
    this.setState({allyThrExp : this.state.allyThrExp / 4});

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
    });
  }


  allyFouDefeated = () => {

    //First, let's map through the ally active array and set this one enemy to active
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
  }

  allyFouRez = () => {

    this.setState({allyFouHealth : this.state.allyFouMaxHealth / 3});
    this.setState({allyFouExp : this.state.allyFouExp / 4});

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
    });
  }


  allyFivDefeated = () => {

    //First, let's map through the ally active array and set this one enemy to active
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
  }

  allyFivRez = () => {

    this.setState({allyFivHealth : this.state.allyFivMaxHealth / 3});
    this.setState({allyFivExp : this.state.allyFivExp / 4});

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
    });
  }


  allySixDefeated = () => {

    //First, let's map through the ally active array and set this one enemy to active
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
  }

  allySixRez = () => {

    this.setState({allySixHealth : this.state.allySixMaxHealth / 3});
    this.setState({allySixExp : this.state.allySixExp / 4});

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
    });
  }

  /*
  * Defeated Allies and Enemies
  */

  enemyOneDefeated = () => {

    //Here we go through all of the allies to see if they are both alive and purchased. If not, they get no experience.
    if(this.state.allyActive[0] && this.state.allyPurchase[0]) {
      this.setState({
        allyOneExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      });
    }

    if(this.state.allyActive[1] && this.state.allyPurchase[1]) {
      this.setState({
        allyTwoExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      });
    }


    if(this.state.allyActive[2] && this.state.allyPurchase[2]) {
      this.setState({
        allyThrExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      });
    }


    if(this.state.allyActive[3] && this.state.allyPurchase[3]) {
      this.setState({
        allyFouExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      });
    }


    if(this.state.allyActive[4] && this.state.allyPurchase[4]) {
      this.setState({
        allyFivExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      });
    }


    if(this.state.allyActive[5] && this.state.allyPurchase[5]) {
      this.setState({
        allySixExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[0] * 2,
      });
    }

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
    }, 2000);

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
    }, 2000);
  }


  enemyTwoDefeated = () => {

    //Here we go through all of the allies to see if they are both alive and purchased. If not, they get no experience.
    if(this.state.allyActive[0] && this.state.allyPurchase[0]) {
      this.setState({
        allyOneExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[1] * 2,
      });
    }

    if(this.state.allyActive[1] && this.state.allyPurchase[1]) {
      this.setState({
        allyTwoExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[1] * 2,
      });
    }


    if(this.state.allyActive[2] && this.state.allyPurchase[2]) {
      this.setState({
        allyThrExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[1] * 2,
      });
    }


    if(this.state.allyActive[3] && this.state.allyPurchase[3]) {
      this.setState({
        allyFouExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[1] * 2,
      });
    }


    if(this.state.allyActive[4] && this.state.allyPurchase[4]) {
      this.setState({
        allyFivExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[1] * 2,
      });
    }


    if(this.state.allyActive[5] && this.state.allyPurchase[5]) {
      this.setState({
        allySixExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[1] * 2,
      });
    }
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

    //Here we go through all of the allies to see if they are both alive and purchased. If not, they get no experience.
    if(this.state.allyActive[0] && this.state.allyPurchase[0]) {
      this.setState({
        allyOneExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[2] * 2,
      });
    }

    if(this.state.allyActive[1] && this.state.allyPurchase[1]) {
      this.setState({
        allyTwoExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[2] * 2,
      });
    }


    if(this.state.allyActive[2] && this.state.allyPurchase[2]) {
      this.setState({
        allyThrExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[2] * 2,
      });
    }


    if(this.state.allyActive[3] && this.state.allyPurchase[3]) {
      this.setState({
        allyFouExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[2] * 2,
      });
    }


    if(this.state.allyActive[4] && this.state.allyPurchase[4]) {
      this.setState({
        allyFivExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[2] * 2,
      });
    }


    if(this.state.allyActive[5] && this.state.allyPurchase[5]) {
      this.setState({
        allySixExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[2] * 2,
      });
    }
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

    //Here we go through all of the allies to see if they are both alive and purchased. If not, they get no experience.
    if(this.state.allyActive[0] && this.state.allyPurchase[0]) {
      this.setState({
        allyOneExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[3] * 2,
      });
    }

    if(this.state.allyActive[1] && this.state.allyPurchase[1]) {
      this.setState({
        allyTwoExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[3] * 2,
      });
    }


    if(this.state.allyActive[2] && this.state.allyPurchase[2]) {
      this.setState({
        allyThrExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[3] * 2,
      });
    }


    if(this.state.allyActive[3] && this.state.allyPurchase[3]) {
      this.setState({
        allyFouExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[3] * 2,
      });
    }


    if(this.state.allyActive[4] && this.state.allyPurchase[4]) {
      this.setState({
        allyFivExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[3] * 2,
      });
    }


    if(this.state.allyActive[5] && this.state.allyPurchase[5]) {
      this.setState({
        allySixExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[3] * 2,
      });
    }

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

    //Here we go through all of the allies to see if they are both alive and purchased. If not, they get no experience.
    if(this.state.allyActive[0] && this.state.allyPurchase[0]) {
      this.setState({
        allyOneExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[4] * 2,
      });
    }

    if(this.state.allyActive[1] && this.state.allyPurchase[1]) {
      this.setState({
        allyTwoExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[4] * 2,
      });
    }


    if(this.state.allyActive[2] && this.state.allyPurchase[2]) {
      this.setState({
        allyThrExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[4] * 2,
      });
    }


    if(this.state.allyActive[3] && this.state.allyPurchase[3]) {
      this.setState({
        allyFouExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[4] * 2,
      });
    }


    if(this.state.allyActive[4] && this.state.allyPurchase[4]) {
      this.setState({
        allyFivExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[4] * 2,
      });
    }


    if(this.state.allyActive[5] && this.state.allyPurchase[5]) {
      this.setState({
        allySixExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[4] * 2,
      });
    }
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

    //Here we go through all of the allies to see if they are both alive and purchased. If not, they get no experience.
    if(this.state.allyActive[0] && this.state.allyPurchase[0]) {
      this.setState({
        allyOneExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[1] * 2,
      });
    }

    if(this.state.allyActive[1] && this.state.allyPurchase[1]) {
      this.setState({
        allyTwoExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[1] * 2,
      });
    }


    if(this.state.allyActive[2] && this.state.allyPurchase[2]) {
      this.setState({
        allyThrExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[1] * 2,
      });
    }


    if(this.state.allyActive[3] && this.state.allyPurchase[3]) {
      this.setState({
        allyFouExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[1] * 2,
      });
    }


    if(this.state.allyActive[4] && this.state.allyPurchase[4]) {
      this.setState({
        allyFivExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[1] * 2,
      });
    }


    if(this.state.allyActive[5] && this.state.allyPurchase[5]) {
      this.setState({
        allySixExp: this.state.allyOneExp + Math.ceil(Math.random() * 5) * this.state.enemyLevels[1] * 2,
      });
    }

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

      //Determine XP for next level
      this.setState({
        allyOneExp: 0,
        allyOneMaxExp: this.state.calculateNextLevel() * this.state.allyOneMaxExp,
      });

      //Stat Improvement on Level!!
      this.setState({
        allyOneDamage: this.state.allyOneDamage + this.state.allyOneLevelDam,
        allyOneDefense: this.state.allyOneDefense + this.state.allyOneLevelDef,
        allyOneMaxHealth: this.state.allyOneMaxHealth + this.state.allyOneLevelMaxHP,
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

      //Stat Improvement on Level!!
      this.setState({
        allyTwoDamage: this.state.allyTwoDamage + this.state.allyTwoLevelDam,
        allyTwoDefense: this.state.allyTwoDefense + this.state.allyTwoLevelDef,
        allyTwoMaxHealth: this.state.allyTwoMaxHealth + this.state.allyTwoLevelMaxHP,
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

      //Stat Improvement on Level!!
      this.setState({
        allyThrDamage: this.state.allyThrDamage + this.state.allyThrLevelDam,
        allyThrDefense: this.state.allyThrDefense + this.state.allyThrLevelDef,
        allyThrMaxHealth: this.state.allyThrMaxHealth + this.state.allyThrLevelMaxHP,
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

      //Stat Improvement on Level!!
      this.setState({
        allyFouDamage: this.state.allyFouDamage + this.state.allyFouLevelDam,
        allyFouDefense: this.state.allyFouDefense + this.state.allyFouLevelDef,
        allyFouMaxHealth: this.state.allyFouMaxHealth + this.state.allyFouLevelMaxHP,
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

        //Stat Improvement on Level!!
        this.setState({
          allyFivDamage: this.state.allyFivDamage + this.state.allyFivLevelDam,
          allyFivDefense: this.state.allyFivDefense + this.state.allyFivLevelDef,
          allyFivMaxHealth: this.state.allyFivMaxHealth + this.state.allyFivLevelMaxHP,
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

      //Stat Improvement on Level!!
      this.setState({
        allySixDamage: this.state.allySixDamage + this.state.allySixLevelDam,
        allySixDefense: this.state.allySixDefense + this.state.allySixLevelDef,
        allySixMaxHealth: this.state.allySixMaxHealth + this.state.allySixLevelMaxHP,
      });
    }
  }

  render() {
    return (
      <div className="combat">

      {/* Top Settings, Options, etc */}
        <Header />

        <Settings />
        <Options />

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

        <div id="rezButtons">
          {this.state.allyActive[0] ? '' : 
          <button onClick={this.allyOneRez} className="rezButton" id="rez1">RESURRECT</button>}
          {this.state.allyActive[1] ? '' : 
           <button onClick={this.allyTwoRez} className="rezButton" id="rez2">{this.state.allyPurchase[1] 
              ? 'RESURRECT' : '|| PURCHASE || 10 Gold'}</button>}
          {this.state.allyActive[2] ? '' : 
          <button onClick={this.allyThrRez} className="rezButton" id="rez3">{this.state.allyPurchase[2] 
              ? 'RESURRECT' : '|| PURCHASE || 999 Gold'}</button>}
          {this.state.allyActive[3] ? '' : 
          <button onClick={this.allyFouRez} className="rezButton" id="rez4">{this.state.allyPurchase[3] 
              ? 'RESURRECT' : '|| PURCHASE || Reincarnation Points'}</button>}
          {this.state.allyActive[4] ? '' : 
          <button onClick={this.allyFivRez} className="rezButton" id="rez5">{this.state.allyPurchase[4] 
              ? 'RESURRECT' : '|| PURCHASE || Reincarnation Points'}</button>}
          {this.state.allyActive[5] ? '' : 
          <button onClick={this.allySixRez} className="rezButton" id="rez6">{this.state.allyPurchase[5] 
              ? 'RESURRECT' : '|| PURCHASE || ???'}</button>}
        </div>
        {this.props.children}
      </div>
    )
  }
}
