import React from "react"
import Input from "../atoms/input"
import Label from "../atoms/label"

export default React.memo((props) => {
  return <div>
    <Label text={props.labelText || "Input"} />
    <Input value={props.value || ""} type={props.type || "text"} onChange={props.onChange} />
  </div>
})
