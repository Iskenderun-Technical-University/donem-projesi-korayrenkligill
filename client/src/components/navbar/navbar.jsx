import '../../styles/navbar/pc-navbar.css'
import React, { useEffect, useState } from 'react'
import Logo from '../../images/logo/Logo.png'
import {NavLink,Link, useNavigate} from 'react-router-dom'
import { BsBarChartFill,BsFillSunFill,BsFillDoorOpenFill,BsTicketPerforatedFill,BsHouseDoor,BsHouseDoorFill,BsGeoAlt,BsGeoAltFill,BsInfoCircle,BsInfoCircleFill,BsPerson,BsPersonFill } from "react-icons/bs";

function Navbar(props){
    const navigate = useNavigate();

    const[ticketDetail,setTicketDetail] = useState("absolute-none");
    const[profileDetail,setProfileDetail] = useState("absolute-none");
    const[allCloseButton,setAllCloseButton] = useState("all-detail-close-none");

    const ticketDetailOpen = ()=>{
        setTicketDetail("absolute");
        setAllCloseButton("all-detail-close");
    }
    const profileDetailOpen = ()=>{
        setProfileDetail("absolute");
        setAllCloseButton("all-detail-close");
    }
    const allDetailClose = ()=>{
        setTicketDetail("absolute-none");
        setProfileDetail("absolute-none");
        setAllCloseButton("all-detail-close-none");
    }

    const [width, setWidth]   = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    
    
    if(width > 768)
        return (
        <div className='pc-navbar'>
            <div className='left'>
                <Link to="/" className="logo">
                    <img src={Logo} alt="" />
                    <span className='company-name'>Egetre</span>
                </Link>
                <NavLink to="/" className="navlink"><span>Gösteriler</span></NavLink>
                <NavLink to="/salonumuz" className="navlink"><span>Salonumuz</span></NavLink>
                <NavLink to="/hakkımızda" className="navlink"><span>Hakkımızda</span></NavLink>
            </div>
            <div className="right">
                {
                    props.isLogged ? 
                    <div className='logged'>
                        <div className='my-tickets' onClick={ticketDetailOpen}>
                            <BsTicketPerforatedFill/>
                            <div className={ticketDetail}>
                                <div className='ticket'>
                                    <div>
                                        <h2 className='ticket-name'>Ticket Name</h2>
                                        <p className='ticket-kn'>KN: C4</p>
                                    </div>
                                    <div>
                                        <p className='ticket-date'>0 Ock, 00:00</p>
                                    </div>
                                </div>
                                <div className='ticket'>
                                    <div>
                                        <h2 className='ticket-name'>Ticket Name</h2>
                                        <p className='ticket-kn'>KN: C4</p>
                                    </div>
                                    <div>
                                        <p className='ticket-date'>0 Ock, 00:00</p>
                                    </div>
                                </div>
                                <div className='ticket'>
                                    <div>
                                        <h2 className='ticket-name'>Ticket Name</h2>
                                        <p className='ticket-kn'>KN: C4</p>
                                    </div>
                                    <div>
                                        <p className='ticket-date'>0 Ock, 00:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='profile' onClick={profileDetailOpen}>
                            <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="" />
                            <div className={profileDetail}>
                                <button onClick={()=>{navigate("/profil")}}><BsPersonFill className='profile-detail-icon'/>Profile</button>
                                <button onClick={()=>{navigate("/admin")}}><BsBarChartFill className='profile-detail-icon'/>Yönetim Paneli</button>
                                <button><BsFillSunFill className='profile-detail-icon'/>Tema Değiştir</button>
                                <button><BsFillDoorOpenFill className='profile-detail-icon'/>Çıkış yap</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='not-logged'>
                        <Link to="/login-register" className='link login'>Giriş Yap</Link>
                        <Link to="/login-register" className='link register'>Ücretsiz Kayıt Ol</Link>
                    </div>
                }
            </div>
            <button className={allCloseButton} onClick={allDetailClose}></button>
        </div>
        )
    else
        return(
        <div className='mobile-navbar'>
            <NavLink to="/" className="link"><BsHouseDoor className='not-fill'/><BsHouseDoorFill className='fill'/><span>Gösteriler</span></NavLink>
            <NavLink to="/salonumuz" className="link"><BsGeoAlt className='not-fill'/><BsGeoAltFill className='fill'/><span>Salonumuz</span></NavLink>
            <NavLink to="/hakkımızda" className="link"><BsInfoCircle className='not-fill'/><BsInfoCircleFill className='fill'/><span>Hakkımızda</span></NavLink>
            <NavLink to="/profil" className="link"><BsPerson className='not-fill'/><BsPersonFill className='fill'/><span>Profil</span></NavLink>
        </div>
        )
}

export default Navbar