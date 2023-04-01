import '../../styles/navbar/pc-navbar.css'
import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import { BsTicketPerforated,BsFillPersonFill,BsFillSunFill,BsFillDoorOpenFill} from "react-icons/bs";

function PcNavbar(props) {
  const [allDetailClose,setAllDetailClose] = useState(false);
  const [profileDetail,setProfileDetail] = useState(false);
  const [ticketDetail,setTicketDetail] = useState(false);
  const profileDetailOpen = ()=>{
    setProfileDetail(true)
    setAllDetailClose(true)
    setTicketDetail(false)
  }
  const ticketDetailOpen = ()=>{
    setProfileDetail(false)
    setAllDetailClose(true)
    setTicketDetail(true)
  }
  const detailClose = ()=>{
    setProfileDetail(false)
    setAllDetailClose(false)
    setTicketDetail(false)
  }
  return (
    <div className='navbar'>
      <div className='frame'>
        <img src={require('../../images/logo/theater.png')} alt="" />
      </div>
      {
        props.logged ? 
        <div className='profile-logged'>
          <div className='ticket' onClick={ticketDetailOpen}>
            <BsTicketPerforated/>
            {props.ticket > 0 ?
              <div className='icon-notification'>
                {props.ticket}
              </div>
              : 
              <div></div>
            }
            <div className={ticketDetail ? 'ticket-detail ticket-detail-active' : 'ticket-detail'}>
              <div className='ticket-card'>
                <div className='ticket-card-name'>
                  <h2>Ticket Name</h2>
                  <p>KN: 0</p>
                </div>
                <div className='ticket-card-date'>
                  <p>00:00</p>
                  <p>0 Ocak 0000</p>
                </div>
              </div>
              <div className='ticket-card'>
                <div className='ticket-card-name'>
                  <h2>Ticket Name</h2>
                  <p>KN: 0</p>
                </div>
                <div className='ticket-card-date'>
                  <p>00:00</p>
                  <p>0 Ocak 0000</p>
                </div>
              </div>
              <div className='ticket-card'>
                <div className='ticket-card-name'>
                  <h2>Ticket Name</h2>
                  <p>KN: 0</p>
                </div>
                <div className='ticket-card-date'>
                  <p>00:00</p>
                  <p>0 Ocak 0000</p>
                </div>
              </div>
              <div className='ticket-card'>
                <div className='ticket-card-name'>
                  <h2>Ticket Name</h2>
                  <p>KN: 0</p>
                </div>
                <div className='ticket-card-date'>
                  <p>00:00</p>
                  <p>0 Ocak 0000</p>
                </div>
              </div>
              <div className='ticket-card'>
                <div className='ticket-card-name'>
                  <h2>Ticket Name</h2>
                  <p>KN: 0</p>
                </div>
                <div className='ticket-card-date'>
                  <p>00:00</p>
                  <p>0 Ocak 0000</p>
                </div>
              </div>
              <div className='ticket-card'>
                <div className='ticket-card-name'>
                  <h2>Ticket Name</h2>
                  <p>KN: 0</p>
                </div>
                <div className='ticket-card-date'>
                  <p>00:00</p>
                  <p>0 Ocak 0000</p>
                </div>
              </div>
              <div className='ticket-card'>
                <div className='ticket-card-name'>
                  <h2>Ticket Name</h2>
                  <p>KN: 0</p>
                </div>
                <div className='ticket-card-date'>
                  <p>00:00</p>
                  <p>0 Ocak 0000</p>
                </div>
              </div>
              <div className='ticket-card'>
                <div className='ticket-card-name'>
                  <h2>Ticket Name</h2>
                  <p>KN: 0</p>
                </div>
                <div className='ticket-card-date'>
                  <p>00:00</p>
                  <p>0 Ocak 0000</p>
                </div>
              </div>
              <div className='ticket-card'>
                <div className='ticket-card-name'>
                  <h2>Ticket Name</h2>
                  <p>KN: 0</p>
                </div>
                <div className='ticket-card-date'>
                  <p>00:00</p>
                  <p>0 Ocak 0000</p>
                </div>
              </div>
            </div>
          </div>
          <div className='profile-photo' onClick={profileDetailOpen}>
            <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="" />
            <div className={profileDetail ? 'profile-detail profile-detail-active' : 'profile-detail'}>
              <p><BsFillPersonFill className='detail-icon'/> Porfilim</p>
              <p><BsTicketPerforated className='detail-icon'/> Biletlerim</p>
              <p><BsFillSunFill className='detail-icon'/> Tema değiştir</p>
              <p><BsFillDoorOpenFill className='detail-icon'/> Çıkış yap</p>
            </div>
          </div>
        </div>
        :
        <div className='profile-notlogged'>
          <Link to="/profile" className='login'>Giriş yap</Link>
          <Link to="/profile" className='register'>Kayıt ol</Link>
        </div>
      }
      {allDetailClose && <button className='all-detail-close' onClick={detailClose}></button>}
    </div>
  )
}

export default PcNavbar