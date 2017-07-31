import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'
import Checkboxes from '../components/Checkboxes'
import Printer from '../components/Printer'

class App extends Component {

  render() {
    // const values = [0,0,1]
    // console.log(this)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h2>
            {/*<Printer index={this.props.checkboxes.justPressed} pressedAtAll={this.props.checkboxes.values.reduce((sum, cur) => (sum+cur))}/>*/}
          </h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Checkboxes/>
      </div>
    );
  }
}

export default App
