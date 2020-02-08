import React from "react"

const style = {
  backgroundColor: "blue",
  color: "white",
}

export default React.memo((props) => {
  return <button style={style} onClick={props.onClick}>{props.children}</button>
})
