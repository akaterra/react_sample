import React from "react"

const style = {
  position: "absolute",

  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  fontWeight: "bold",
  height: "100%",

  backgroundColor: "#00000080",
  color: "white",

  bottom: 0,
  left: 0,
  right: 0,
  top: 0,

  fontWeight: "bold",
}

export default React.memo((props) => {
  const {text} = props

  return <div style={style}>{text}</div>
})
