import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class StopWatch extends Component {
  state = {lapse: 0, running: false, display1: true};
  
  handleRunClick = () => {
    this.setState(state => {
      if(state.running) {
        clearInterval(this.timer)
      } else {
        const startTime = Date.now() - this.state.lapse;
        this.timer = setInterval(() => {
          this.setState({
            lapse: Date.now() - startTime
          }, () => {console.log(this.state.lapse)})
        })
      }
      return {running: !state.running}
    })
  }

  componentWillUnMount() {

  }

  handleClearClick = () => {
    clearInterval(this.timer)
    this.setState({
      lapse: 0,
      running: false,
    })
  }

  render() {
    const {lapse, running} = this.state;

    const buttonStyles = {
      border: '1px solid #ccc',
      background: '#fff',
      fontSize: '2em',
      padding: 25,
      margin: 15,
      width: 200,
    }
  return (
    <div style={{textAlign: 'center'}} >
      <label style={{fontSize: '5em', display: 'block'}} >{lapse}ms</label>
      <button style={buttonStyles}
      onClick={this.handleRunClick} >{running ? 'Stop' : 'Start'}</button>
      <button style={buttonStyles}
      onClick={this.handleClearClick} >Clear</button>
    </div>
  )
  }
}


function App() {
  return (
    <div>
    Click here to hide
    <input checked={} onClick={} type='checkbox' />
    <StopWatch />
    </div>
  )
}
render(<App />, document.getElementById('root'));
