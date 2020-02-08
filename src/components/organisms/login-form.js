import React from "react"
import Button from "../atoms/button"
import Label from "../atoms/label"
import InputWithLabel from "../molecules/input-with-label"

const style = {
  borderStyle: "solid",
  borderWidth: "1px",
  padding: "10px",
}

export default (props) => {
  const [ usernameValue, setUsernameValue ] = React.useState(props.username || "")
  const [ passwordValue, setPasswordValue ] = React.useState(props.password || "")

  return <div style={style}>
    <Label text={props.label || "Login to application"} big />
    <InputWithLabel labelText="Username" value={usernameValue} onChange={(value) => {
      setUsernameValue(value)
    }} />
    <InputWithLabel labelText="Password" value={passwordValue} onChange={(value) => {
      setPasswordValue(value)
    }} type="password" />
    <Button onClick={() => {
      if (props.onSubmit) {
        props.onSubmit({
          username: usernameValue,
          password: passwordValue,
        })
      }
    }}>Login</Button>
  </div>
}
