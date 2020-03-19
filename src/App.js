import React, {Component} from 'react'

class App extends Component {

  state = {
    numbers: [1, 2, 3, 4, 5]
    number: null
  }

  handleInputChange = event => {
    this.setState.apply({ [event.target.name]: event.target.value})
  }

  handleAddNumber = event => {
    event.preventDefault()
    let locNums = JSON.parse(JSON.stringify(this.state.numbers))
    numbers.push(parseInt(this.state.number))
    this.setState({ numbers: locNums, number: ''})
  }
  render() {
    return (
      <>
      <form>
        <p>
          <label htmlFor="number">number</label>
          <input
          type="number"
          name="number"
          value={this.state.number}
          onChange={this.handleInputChange}
          />
        </p>
        <button onClick=
      </form>
      <h1>Hello World</h1>
      <ul>

      {this.state.numbers.map(x =><li>{x}</li>)}
      </ul>
     
      </>
    )
  }
}

export default App
