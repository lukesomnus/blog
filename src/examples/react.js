import React from "react"
import ReactDOM from "react-dom"

const name = "Brian" // highlight-line

ReactDOM.render( // highlight-line
  <div>
    <h1>Hello!, ${name}!</h1>
  </div>,
  document.getElementById("root")
)