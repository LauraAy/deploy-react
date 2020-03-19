import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {

  componentDidMount () {
    axios.get('https://swapi.co/api/people/1')
  }

render () {
  return()
}
}