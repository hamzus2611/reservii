import React from 'react'

function Filter({ Eventname,handlechange }) {
 return (
  <div >
   <input type="text" value={Eventname} onChange={handlechange} />
  </div>
 )
}

export default Filter