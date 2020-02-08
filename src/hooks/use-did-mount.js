import React from "react"

export default (fn) => {
  React.useEffect(fn, [])
}
