import React from "react"
import Confetti from "react-confetti"

export default () => {
  return (
    <div
      style={{
        position: "relative",
        bottom: 0,
        width: "100%",
        height: "100%",
        fontSize: "1.6em"
      }}>

      <Confetti/>
      <h2 style={{padding: "100px 0 25px", textAlign: "center" }}>Congratulations!</h2></div>
  )
}