import React from "react"
import {Switch} from "../src/switch"

export default class Toggle extends React.Component {
  state = {
    on: false
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  render() {
    return <Switch on={this.state.on} onClick={this.toggle} />
  }
}
