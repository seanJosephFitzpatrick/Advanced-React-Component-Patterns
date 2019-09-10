import CompoundComponents from "./CompoundComponents"

function Usage({onToggle = (...args) => console.log("onToggle", ...args)}) {
  return (
    <CompoundComponents onToggle={onToggle}>
      <CompoundComponents.On>The button is on</CompoundComponents.On>
      <CompoundComponents.Off>The button is off</CompoundComponents.Off>
      <CompoundComponents.Button />
    </CompoundComponents>
  )
}

export default Usage
