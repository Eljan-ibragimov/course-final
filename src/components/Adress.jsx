import React from 'react'
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';


const Adress = ({location}) => {
  const [flip, setFlip] = useState(false);
  return (
    
    <ReactCardFlip isFlipped={flip} 
            flipDirection="vertical">
             
            <div className='front' >
               <img src={location.image} alt="" />
               <h2>{location.title}</h2>
                  <button className='flipbutton' onClick={() => setFlip(!flip)}>
                Adress</button> 
            </div>
            
            <div className='back'>
                <h2>{location.adress}</h2>
                <small>{location.phone}</small>
                <br />
                <button className='flipbutton' onClick={() => setFlip(!flip)}>
                    Back</button>
            </div>
        </ReactCardFlip>
        
  )
}

export default Adress

