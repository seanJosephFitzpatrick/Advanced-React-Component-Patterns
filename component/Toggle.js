import React from "react"
import {Switch} from "../src/switch"

class Toggle extends React.Component {
  state = {
    on: false
  }

  toggle = () => {
    this.setState(
      currentState => {
        return {on: !currentState.on}
      },
      () => {
        this.props.onToggle(this.state.on)
      }
    )
  }

  render() {
    return <Switch on={this.state.on} onClick={this.toggle} />
  }
}

function Usage({onToggle = (...args) => console.log("onToggle", ...args)}) {
  return <Toggle onToggle={onToggle} />
}
Usage.title = "Build Toggle"

export {Toggle, Usage as default}
