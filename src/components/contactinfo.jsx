import React from 'react'
import { MdOutgoingMail } from 'react-icons/md'
import { FiPhoneCall } from 'react-icons/fi'
import { MdLocationPin } from 'react-icons/md'


const contactinfo = () => {
    return (
        <div className='contact-info'>
            

            <div className="adress-info">
                <div className='a-icon'>
               
                <div className='call'>
                <FiPhoneCall className='mail-i'/>
                <a href="tel:(+994 12) 430-08-78">(+994 12) 430-08-78</a>
                <a href="tel:(+994 70) 430-08-78">(+994 70) 430-08-78</a>
                <a href="https://mail.google.com/mail/u/0/#inbox"><small><MdOutgoingMail/></small><span> info@winex.az</span></a>
                </div>
               
                </div>
                

            </div>
            
            <div className="map">
            <p><MdLocationPin className='mail-i'/>Nəsimi r. Tbilisi p.100 20 yanvar metrosu/</p>
            <iframe src="https://maps.google.com/maps?q=N%C9%99simi%20r.%20Tbilisi%20p.100%2020%20yanvar%20metrosu&amp;t=k&amp;z=16&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
            id="gmap_canvas" 
            frameborder="0" 
            scrolling="no" >

            </iframe>
                  </div>
         </div>
          
    )
}

export default contactinfo
