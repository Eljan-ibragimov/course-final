import React from 'react'
import {FaEnvelopeOpenText} from 'react-icons/fa'

const contact = () => {
  return (
    <div>
          <div className="contact">
        <div className="contact-img">
            <img src="https://winex.az/img/contact.png" alt="" />
        </div>
        <div className="form-button">
        <div className="contacts">
            <div className='contact-header'>
                <h5>Bizə yazın</h5>
                <FaEnvelopeOpenText/>
            </div>
            <div className='contact-form'>
            <form className="forms">
              
                <input type="text"  name="fname" placeholder="Adınız" />
                <input type="text"  name="lname" placeholder="Soyadınız" />
                <input type="email" name="Email" placeholder="Email" />
                <input type="number" name="number" placeholder="Əlaqə nömrəsi" />
              </form>
              <form className="forms">
                <input type="text"  name="lname" placeholder="Mövzu" />
                <input type="text" id="mesage" name="lname" placeholder="Mesajınız..." />
              </form>
              </div>
        </div>
        <div className="button">
        <button>Göndər</button>
    </div>
    </div>
      </div>
    </div>
  )
}

export default contact
