import React, { Component } from "react"
import "../styles/App.css"
import Vehicles from './Vehicles'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      vehicles: [],
      value: "",
      pilot: ""
    }
  }

  _nameChange = event => {
    this.setState({
      pilot: event.target.value
    })
  }

  _submit = event => {
    event.preventDefault()
    const pilot = {
      pilot: this.state.pilot
    }
    const pilots = this.state.pilot

    // this.setState({
    //   pilot: ""
    // })
  }

  render() {
      return (
        <div className="App">
          <div className="container">
            <div className="jumbotron">
              <h1>Star Wars Ships</h1>
              <p>The Vehicles of Star Wars</p>
            </div>
            <div>
              <form onSubmit={this._submit} className="form">
                <label>
                  <p>What's your name pilot?</p>
                  <input
                    onChange={this._nameChange}
                    type="text"
                    name="pilot"
                    value={this.state.pilot}
                  />
                </label>
                <p>Welcome {this.state.pilot}, you're needed at your station immediately.</p>
              </form>
            </div>
            <div>
              <Vehicles />
            </div>
          </div>
        </div>
    )
  }
}

export default App
