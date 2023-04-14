import React from 'react'
import '../styles/footer.css'
import { Link } from 'react-router-dom'
import { FaInstagram,FaFacebookF,FaTwitter,FaYoutube } from "react-icons/fa";
import { BsHouseDoorFill,BsGeoAltFill,BsInfoCircleFill,BsPersonFill } from "react-icons/bs";

function Footer() {
  return (
    <div className='footer'>
      <div>
        <h2>Navigasyonlar</h2>
        <Link><BsHouseDoorFill className='footer-icon'/>Gösteriler</Link>
        <Link><BsGeoAltFill className='footer-icon'/>Salonumuz</Link>
        <Link><BsInfoCircleFill className='footer-icon'/>Hakkımızda</Link>
        <Link><BsPersonFill className='footer-icon'/>Profil</Link>
      </div>
      <div>
        <h2>Sosyal Medyalarımız</h2>
        <span><a><FaInstagram/></a><a><FaFacebookF/></a><a><FaTwitter/></a><a><FaYoutube/></a></span>
        <a>koray.renkligill@gmail.com</a>
      </div>
      <div>
        <h2>Adresimiz</h2>
        <a><BsGeoAltFill className='footer-icon'/>Yenimahalle 4747 sokak no 16/A</a>
        <a>Yunusemre / Manisa</a>
      </div>
    </div>
  )
}

export default Footer