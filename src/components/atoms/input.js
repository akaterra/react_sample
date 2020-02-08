import React from "react"

export default React.memo((props) => {
  const [ value, setValue ] = React.useState(props.value || "");

  return <input value={value} type={props.type || "text"} onChange={({target: {value}}) => {
    setValue(value)

    if (props.onChange) {
      props.onChange(value)
    }
  }} />
})
