import React from "react"
import { useSelector, useState } from 'react-redux'
import Popup from "../components/atoms/popup"

const style = {
  display: "relative",
}

export default (WrappedComponent, linkToStore) => {
  return (props) => {
    let isPopupShown
    let popupText

    if (linkToStore) {
      isPopupShown = useSelector(state => state[linkToStore].isPopupShown)
      popupText = useSelector(state => state[linkToStore].popupText)
    } else {
      isPopupShown = props.isPopupShown
      popupText = props.popupText
    }

    return <div style={style}>
      {isPopupShown && <Popup text={popupText} />}
      <WrappedComponent {...props}>{props.children}</WrappedComponent>
    </div>
  }
}
