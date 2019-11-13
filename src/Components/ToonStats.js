import React from 'react';
import ShowStats from '../Components/ShowStats';

export default class ToonStats extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      a1StatsActive: false,
      a1StatsHover: false,

      a2StatsActive: false,
      a2StatsHover: false,

      a3StatsActive: false,
      a3StatsHover: false,

      a4StatsActive: false,
      a4StatsHover: false,

      a5StatsActive: false,
      a5StatsHover: false,

      a6StatsActive: false,
      a6StatsHover: false,
    }
  }

  render() {
    return (
      <div className="ToonStats">
        {/* First Part - The Button/Div to hover over to view the second part */}
        <div className={
          this.state.a1StatsActive ?
          "statsLeft showHoverAnimation" :
          "statsLeft"
        } id="a1Stats"

          //Set Stats to Do Things (stick, display, hide) When Hovered, Clicked, and Unhovered(?)
          onMouseOver={() => this.setState({ a1StatsHover: true })}
          onMouseOut={() => this.setState({ a1StatsHover: false })}
          onMouseDown={() => this.setState({ a1StatsActive: !this.state.a1StatsActive})}>

          <br></br>Stats
        </div>


        {/* First Part - The Button/Div to hover over to view the second part */}
        <div className={
          this.state.a2StatsActive ?
          "statsLeft showHoverAnimation" :
          "statsLeft"
        } id="a2Stats"

          //Set Stats to Do Things (stick, display, hide) When Hovered, Clicked, and Unhovered(?)
          onMouseOver={() => this.setState({ a2StatsHover: true })}
          onMouseOut={() => this.setState({ a2StatsHover: false })}
          onMouseDown={() => this.setState({ a2StatsActive: !this.state.a2StatsActive})}>

          <br></br>Stats
        </div>

        {/* First Part - The Button/Div to hover over to view the second part */}
        <div className={
          this.state.a3StatsActive ?
          "statsLeft showHoverAnimation" :
          "statsLeft"
        } id="a3Stats"

          //Set Stats to Do Things (stick, display, hide) When Hovered, Clicked, and Unhovered(?)
          onMouseOver={() => this.setState({ a3StatsHover: true })}
          onMouseOut={() => this.setState({ a3StatsHover: false })}
          onMouseDown={() => this.setState({ a3StatsActive: !this.state.a3StatsActive})}>

          <br></br>Stats
        </div>

        {/* First Part - The Button/Div to hover over to view the second part */}
        <div className={
          this.state.a4StatsActive ?
          "statsLeft showHoverAnimation" :
          "statsLeft"
        } id="a4Stats"

          //Set Stats to Do Things (stick, display, hide) When Hovered, Clicked, and Unhovered(?)
          onMouseOver={() => this.setState({ a4StatsHover: true })}
          onMouseOut={() => this.setState({ a4StatsHover: false })}
          onMouseDown={() => this.setState({ a4StatsActive: !this.state.a4StatsActive})}>

          <br></br>Stats
        </div>

        {/* First Part - The Button/Div to hover over to view the second part */}
          <div className={
          this.state.a5StatsActive ?
          "statsLeft showHoverAnimation" :
          "statsLeft"
        } id="a5Stats"

          //Set Stats to Do Things (stick, display, hide) When Hovered, Clicked, and Unhovered(?)
          onMouseOver={() => this.setState({ a5StatsHover: true })}
          onMouseOut={() => this.setState({ a5StatsHover: false })}
          onMouseDown={() => this.setState({ a5StatsActive: !this.state.a5StatsActive})}>

          <br></br>Stats
        </div>


        {/* First Part - The Button/Div to hover over to view the second part */}
        <div className={
          this.state.a6StatsActive ?
          "statsLeft showHoverAnimation" :
          "statsLeft"
        } id="a6Stats"

          //Set Stats to Do Things (stick, display, hide) When Hovered, Clicked, and Unhovered(?)
          onMouseOver={() => this.setState({ a6StatsHover: true })}
          onMouseOut={() => this.setState({ a6StatsHover: false })}
          onMouseDown={() => this.setState({ a6StatsActive: !this.state.a6StatsActive})}>

          <br></br>Stats
        </div>

        <ShowStats
           stats = {this.state}
           info = {this.props}
           allStats = {this.props.allStats}
        >

        </ShowStats>
      </div>
    );
  }
}
