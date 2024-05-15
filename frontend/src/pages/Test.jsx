import React from 'react'

export default function Test() {
  return (
    <div>
       <div className='card p-4' style={{marginTop:"100px",width:"500px", marginLeft:"700px"}}>
        <form>
            <div>
                <input name='name' placeholder='Name'/>
            </div>
            <div>
                <input name='age' placeholder='Age'/>
            </div>
        </form>
        
       </div>
    </div>
  )
}
