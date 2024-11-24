import React, { useState } from 'react'

function Introduction({setuserName}) {
  return (
    <div>
    <p>Welcome!</p>
    <p>How should I call you?</p>
    <input type='text' placeholder='Name' onChange={(e)=>setuserName(e.target.value)}/>
    </div>
  )
}

export default Introduction