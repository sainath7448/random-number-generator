import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  generateRandomNumber = event => {
    this.setState({randomNumber: Math.floor(Math.random() * 101)})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="box-container">
        <h1>Random Number</h1>
        <p>Generate a random Number in the range of 0 to 100</p>
        <button type="button" onClick={this.generateRandomNumber}>
          Generate
        </button>
        <p>{randomNumber}</p>
      </div>
    )
  }
}

export default RandomNumberGenerator
