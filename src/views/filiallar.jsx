import React from 'react'
import locations from '../locations/location.json'
import Adress from 'components/Adress'

const filiallar = () => {
 
  return (
    <div className='flip-card'>

      {
        locations.map((l,index)=> (
          <Adress key={index} location={l} />
        ))
       
      }  
    
   
    </div>
  )
}

export default filiallar
