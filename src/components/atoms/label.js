import React from "react"

const style = {
  color: "grey",
  fontSize: "smaller",
}

const biggerStyle = {
  color: "grey",
  fontSize: "bigger",
}

export default React.memo((props) => {
  const { text } = props

  return <div style={props.big ? biggerStyle : style}>{text}</div>
})
