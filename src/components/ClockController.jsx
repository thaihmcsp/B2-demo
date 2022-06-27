import React from 'react'

function ClockController(props) {
  return (
    <div>
        <h1>ClockController</h1>
        <button onClick={props.stop}>Stop</button>
        <button onClick={props.restart}>Restart</button>
        <button onClick={props.continueClock} disabled={props.isRunning}>Continue</button>

    </div>
  )
}

export default ClockController