import React from "react"

export default (fn) => {
  const didMountRef = React.useRef(false)

  React.useEffect(() => {
    if (didMountRef.current) {
      fn()
    }

    didMountRef.current = true
  })
}
