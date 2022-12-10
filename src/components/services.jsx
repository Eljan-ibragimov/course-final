import React from 'react'
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
const Services = ({add}) => {
  const [flip, setFlip] = useState(false);
  
  return (
    
<ReactCardFlip isFlipped={flip} 
            flipDirection="vertical">
              <div className='front-s' >
              <img src={add.img} alt="" />
              <p>{add.title}</p>
                  <button className='flipbutton' onClick={() => setFlip(!flip)}>
                  Daha ətraflı...</button> 
            </div>
            <div className='back-s'>
                <h2>{add.back}</h2>
                <p>{add.info}</p>
           
                <br />
                <button className='flipbutton' onClick={() => setFlip(!flip)}>
                    Back</button>
            </div>
            
            
           
</ReactCardFlip>

    
   
  )
}

export default Services


