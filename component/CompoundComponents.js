import React from "react"
import {Switch} from "../src/switch"

class CompoundComponents extends React.Component {
  static On = props => (props.on ? props.children : null)
  static Off = props => (props.on ? null : props.children)
  static Button = props => <Switch on={props.on} onClick={props.toggle} />

  state = {on: false}

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
    return React.Children.map(this.props.children, childElement =>
      React.cloneElement(childElement, {
        on: this.state.on,
        toggle: this.toggle
      })
    )
  }
}

function Usage({onToggle = (...args) => console.log("onToggle", ...args)}) {
  return (
    <CompoundComponents onToggle={onToggle}>
      <CompoundComponents.On>The button is on</CompoundComponents.On>
      <CompoundComponents.Off>The button is off</CompoundComponents.Off>
      <CompoundComponents.Button />
    </CompoundComponents>
  )
}

export {CompoundComponents, Usage as default}
