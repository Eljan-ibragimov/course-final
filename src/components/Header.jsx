import React from 'react'
import {MdOutgoingMail} from 'react-icons/md'
import {BsFacebook} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import {IoLogoInstagram} from 'react-icons/io'
import {ImWhatsapp} from 'react-icons/im'
import {FiPhoneCall} from 'react-icons/fi'
import {MdLocationPin} from 'react-icons/md'
import {IoIosPersonAdd} from 'react-icons/io'
import {BiLogInCircle} from 'react-icons/bi'
import {BsFillTelephoneForwardFill} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const header = ( ) => {
  return (
    <div>
    <section className="header">
      
            <div className="left-header">
                <a href="https://mail.google.com/mail/u/0/#inbox"><small><MdOutgoingMail/></small><span> info@winex.az</span></a>
            </div>
            <div className="right-header">
                <Link to="/unvan"><BsFillTelephoneForwardFill/></Link>
                <a href="https://www.facebook.com/"><BsFacebook/></a>
                <a href="https://web.whatsapp.com/"><IoLogoWhatsapp/></a>
                <a href="https://www.instagram.com/"><IoLogoInstagram/></a>
            </div>
        </section>
        <section className="logo-section">
        <div className="logo">
            <img src="https://winex.az/img/wnx-new.png" alt="logo" />
        </div>
        <div className="number">
            <div className="number-icons">
                <ImWhatsapp />
                <FiPhoneCall />
            </div>
            <div className="numbers">
                <a href="tel:(+994 12) 430-08-78">(+994 12) 430-08-78</a>
                <a href="tel:(+994 70) 430-08-78">(+994 70) 430-08-78</a>
            </div>
        </div>
        <div className="adress">
            <div className="adress-icon">
                <MdLocationPin />
            </div>
            <div className="location">
                <a href="">Nəsimi r. Tbilisi p.100  20 yanvar metrosu</a>
            </div>
        </div>
        <div className="sign-in">
            <button className="add-person"><span><IoIosPersonAdd /></span> <small>Qeydiyyat</small> </button>
            <button className="log-in"><span><BiLogInCircle /></span><small>Daxil ol</small> </button>
        </div>
        {/* <div className='signIN-form'>
            <div className="signin-header">
                <h4>ŞƏXSİ KABİNETƏ <br /> GİRİŞ</h4>
                <AiFillCloseCircle/>
            </div>
            <label htmlFor=""></label>
        </div> */}
    </section>
    </div>
  )
}

export default header

