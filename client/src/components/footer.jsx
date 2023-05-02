import React from 'react'
import '../styles/footer.css'
import { Link } from 'react-router-dom'
import { FaInstagram,FaFacebookF,FaTwitter,FaYoutube } from "react-icons/fa";
import { BsHouseDoorFill,BsGeoAltFill,BsInfoCircleFill,BsPersonFill } from "react-icons/bs";

function Footer(props) {
  return (
    <div className={props.theme ? 'footer light' : 'footer dark'}>
      <div>
        <h2>Navigasyonlar</h2>
        <Link to="/"><BsHouseDoorFill className='footer-icon'/>Gösteriler</Link>
        <Link to="/salonumuz"><BsGeoAltFill className='footer-icon'/>Salonumuz</Link>
        <Link to="/hakkımızda"><BsInfoCircleFill className='footer-icon'/>Hakkımızda</Link>
        <Link to="/profil"><BsPersonFill className='footer-icon'/>Profil</Link>
      </div>
      <div>
        <h2>Sosyal Medyalarımız</h2>
        <span><a href="https://www.google.com/"><FaInstagram/></a><a href="https://www.google.com/"><FaFacebookF/></a><a href="https://www.google.com/"><FaTwitter/></a><a href="https://www.google.com/"><FaYoutube/></a></span>
        <a href='mailto:koray.renkligill@gmail.com'>koray.renkligill@gmail.com</a>
      </div>
      <div>
        <h2>Adresimiz</h2>
        <a href="https://www.google.com/"><BsGeoAltFill className='footer-icon'/>Yarhasanlar, 1706. Sk., 45020 Manisa</a>
        <a href="https://www.google.com/">Merkez / Manisa</a>
      </div>
    </div>
  )
}

export default Footer