import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProgressBar = styled.div`
  color: white;
  position: absolute;
  top: 5%;
  left: 0;
  width: 66%;
  height: 9%;
  background-color: #222;
  border-radius: 20px;
  box-shadow: inset 0 0 5px #000;
`;

const Attack1 = styled.div`
  width: ${props => props.baseAttack}%;
  height: 100%;
  background-color: #6bccf9;
  border-radius: 10px;
  transition: width ${ props => props.baseAttack > 0 ?
    props => props.percentage :
    '.001'
  }s ease-in-out;
`;

const ProgressBar2 = styled.div`
  color: white;
  position: absolute;
  top: 20%;
  left: 0;
  width: 66%;
  height: 9%;
  background-color: #222;
  border-radius: 20px;
  box-shadow: inset 0 0 5px #000;
`;

const Attack2 = styled.div`
  width: ${props => props.baseAttack}%;
  height: 100%;
  background-color: green;
  border-radius: 10px;
  transition: width ${ props => props.baseAttack > 0 ?
    props => props.percentage :
    '.001'
  }s ease-in-out;
`;

const ProgressBar3 = styled.div`
  color: white;
  position: absolute;
  top: 35%;
  left: 0;
  width: 66%;
  height: 9%;
  background-color: #222;
  border-radius: 20px;
  box-shadow: inset 0 0 5px #000;
`;

const Attack3 = styled.div`
  width: ${props => props.baseAttack}%;
  height: 100%;
  background-color: red;
  border-radius: 10px;
  transition: width ${ props => props.baseAttack > 0 ?
    props => props.percentage :
    '.001'
  }s ease-in-out;
`;


const ProgressBar4 = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 0;
  width: 66%;
  height: 9%;
  background-color: #222;
  border-radius: 20px;
  box-shadow: inset 0 0 5px #000;
`;

const Attack4 = styled.div`
  width: ${props => props.baseAttack}%;
  height: 100%;
  background-color: yellow;
  border-radius: 10px;
  transition: width ${ props => props.baseAttack > 0 ?
    props => props.percentage :
    '.001'
  }s ease-in-out;
`;

const ProgressBar5 = styled.div`
  color: white;
  position: absolute;
  top: 65%;
  left: 0;
  width: 66%;
  height: 9%;
  background-color: #222;
  border-radius: 20px;
  box-shadow: inset 0 0 5px #000;
`;

const Attack5  = styled.div`
  width: ${props => props.baseAttack}%;
  height: 100%;
  background-color: orange;
  border-radius: 10px;
  transition: width ${ props => props.baseAttack > 0 ?
    props => props.percentage :
    '.001'
  }s ease-in-out;
`;

const ProgressBar6 = styled.div`
  color: white;
  position: absolute;
  top: 80%;
  left: 0;
  width: 66%;
  height: 9%;
  background-color: #222;
  border-radius: 20px;
  box-shadow: inset 0 0 5px #000;
`;

const Attack6  = styled.div`
  width: ${props => props.baseAttack}%;
  height: 100%;
  background-color: purple;
  border-radius: 10px;
  transition: width ${ props => props.baseAttack > 0 ?
    props => props.percentage :
    '.001'
  }s ease-in-out;
`;

export default class Progress extends React.Component {

  render() {
    return (
      <div id="allProgressBars">
      <ProgressBar>
        <Attack1 baseAttack={this.props.allyOneBaseAttack} percentage={this.props.allyOneAttackSpeed}/>
      </ProgressBar>

      <ProgressBar2>
        <Attack2 baseAttack={this.props.allyTwoBaseAttack} percentage={this.props.allyTwoAttackSpeed}/>
      </ProgressBar2>

      <ProgressBar3>
        <Attack3 baseAttack={this.props.allyThrBaseAttack} percentage={this.props.allyThrAttackSpeed}/>
      </ProgressBar3>

      <ProgressBar4>
        <Attack4 baseAttack={this.props.allyFouBaseAttack} percentage={this.props.allyFouAttackSpeed}/> 
      </ProgressBar4>

      <ProgressBar5>
        <Attack5 baseAttack={this.props.allyFivBaseAttack} percentage={this.props.allyFivAttackSpeed}/>
      </ProgressBar5>

      <ProgressBar6>
        <Attack6 baseAttack={this.props.allySixBaseAttack} percentage={this.props.allySixAttackSpeed}/>
      </ProgressBar6>
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