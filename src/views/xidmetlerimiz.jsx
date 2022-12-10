import React from 'react'
import  Services from 'components/services'
import answer from '../locations/service.json'

const xidmetlerimiz = () => {
  return (
    <div className='isflip'>

      {
        answer.map((a,index)=> (
          <Services key={index} add={a} />
        ))
       
      }  
    
   
    </div>
    
     
    
  )
}

export default xidmetlerimiz
