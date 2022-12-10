import React from 'react'
import { useRef } from 'react';
import { Link } from 'react-router-dom'
import {RiMenuFoldFill} from 'react-icons/ri'
import {GrClose} from 'react-icons/gr'
import {TbMessageCircle} from 'react-icons/tb'
import {AiFillCloseCircle} from 'react-icons/ai'

const Navbar = () => {
  const overlayRef = useRef();
  const openSearch = () => {
    overlayRef.current.style.width = '100%';};
    const closeSearch = () => {
      overlayRef.current.style.width = '0%';
    };
    const [shows, setShow] = React.useState();
    
  return (
    <div>
    <section className="navbar">
            <ul>
            <div className="main">
             <RiMenuFoldFill onClick={openSearch} className='open-button'/>
            </div>
                <li ref={overlayRef} class='overlay'>
                    <GrClose class='close-button' onClick={closeSearch}/>
                   <div class='overlay-content'>
                   <Link to="/home"> ANA SƏHİFƏ</Link>
                    <Link to="/haqqimizda">HAQQIMIZDA</Link>
                    <Link to="/xidmetlerimiz">XIDMƏTLƏRİMİZ</Link>
                    <Link to="/tarifler">TARİFLƏR</Link>
                    <Link to="/suallar">TEZ-TEZ VERİLƏN SUALLAR</Link>
                    <Link to="/unvan">BİZİMLƏ ƏLAQƏ</Link>
                    <Link to="/filiallar">FİLİAL VƏ MƏNTƏQƏLƏR</Link>
                    </div>
                </li>
                
            </ul>
        </section>
        
        <div className='popup-box'>
          <button className='whatsappbtn' onClick={() => setShow(true)}>
            <TbMessageCircle className='w-icon'/>
          </button>
          <div id='popup' className= {shows ? "shows" : "none"} >
            <div className="popup-header">
              <button className='closebtn' onClick={() => setShow(false)}><AiFillCloseCircle/></button>
              <h5>Zəhmət olmasa aşağıdakı formu doldurun.</h5>
            </div>
            <input type="text" placeholder='Adınız ve soyadınız' />
            <input type="number" placeholder='Əlaqə nömrəniz' /> 
            <button className='enterbtn'>Söhbətə başla</button>
          </div>
        </div>
        </div>
  )
}

export default Navbar
