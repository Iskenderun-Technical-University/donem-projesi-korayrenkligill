import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BsClockHistory,BsFillPersonLinesFill,BsFillGridFill } from "react-icons/bs";
import { MdEventSeat,MdOutlineEventSeat } from "react-icons/md";
import '../../styles/pages/theatre-detail.css'

function TheatreDetails(props) {
    let { id } = useParams();
    const divRef = useRef(null);
    const [height, setHeight] = useState(0);
    const [selectedSession, setSelectedSession] = useState(0);

    const backgroudItem = {
        backgroundColor: "#0099ff",
        width: "100%",
        height: height,
        position: "absolute",
        left: "0px",
        top: "0px",
        zIndex: "-5"
    };

    useEffect(() => {
        if (divRef.current) {
          setHeight(divRef.current.offsetHeight-50 + "px");
        }
      }, [divRef]);
    return (
    <div className='detail-page'>
        <div style={backgroudItem}>
            
        </div>
        <div ref={divRef} className='details'>
            <div className='frame'>
                <img src={props.theatres[id-1].image} alt="" />
            </div>
            <div className='right'>
                <div className='first-row'>
                    <div className='header'>
                        <h1>{props.theatres[id-1].name.toLocaleUpperCase()}</h1>
                        <p><BsClockHistory className='icon'/> {props.theatres[id-1].time}dk</p>
                    </div>
                    <h2>{props.theatres[id-1].price}₺</h2>
                </div>
                <p className='trailer'>
                    {props.theatres[id-1].trailer}
                </p>
                <p className='cast'>
                    <BsFillPersonLinesFill className='icon'/> Oyuncu Kadrosu:{" "}
                    {JSON.parse(props.theatres[id-1].cast).map((castItem,castKey)=>{return(
                        <span key={castKey} className='cast-span'>
                            {castItem}
                            {castKey === JSON.parse(props.theatres[id-1].cast).length - 1 ? "" : ", "}
                            {" "}
                        </span>
                    )})}
                </p>
                <p className='categories'>
                    <BsFillGridFill className='icon'/> Kategoriler: {" "}
                    {JSON.parse(props.theatres[id-1].categories).map((category,categoryKey)=>{return(
                        <span key={categoryKey} className='category-span'>
                            {category}
                            {categoryKey === JSON.parse(props.theatres[id-1].categories).length - 1 ? "" : ", "}
                            {" "}
                        </span>
                    )})}
                </p>
            </div>
        </div>
        <div className='rules'>
            <h2>Etkinlik Kuralları</h2>
            <ul>
                <li>Gününde ve saatinde kullanılmayan biletler geçersiz olup, bilet bedeli ve hizmet bedeli iadesi ve/ veya değişiklik yapılması mümkün değildir. Gün ve saatinde kullanılmayan biletlerin iadesi için iade talebinde bulunulamaz.</li>
                <li>Biletiniz mücbir sebep ya da etkinliğin iptali haricinde herhangi bir sebeple kullanılamayacak ise, en geç etkinlik saatinden 1 saat önceye kadar, Egetre ile irtibata geçmenizi rica ederiz, aksi takdirde biletinizin iptal işlemi gerçekleştirilememektedir.</li>
                <li>Organizasyon sahibi kurum ve/veya kuruluşlar gösteri verilecek alanlarda ve/veya gösteri salonlarında oturum düzeni ve planında uygun gördüğü durumlarda yer değişikliği yapma hakkına sahiptir.</li>
                <li>Etkinliğe ait indirimli bilet tanımı olması ve indirimli bilet seçeneği ile bilet satın alınması durumunda Kullanıcı bu indirimli bilete tabi olduğu kabul ve tahaahüt eder. İndirimli biletler için satın alınan biletin etkinlik mekanında kimlik ibrazı zorunlu olacaktır.</li>
                <li>Etkinlik saatine geç kalınması durumunda Egetre kullanıcının etkinlik mekanına alınması konusunda hiçbir şekilde sorumlu değildir.</li>
            </ul>
        </div>
        <div className='sessions'>
            <div className='sessions-date'>
                {JSON.parse(props.theatres[id-1].sessions).map((session,sessionsKey)=>{return(
                    <button className={selectedSession === sessionsKey ? "selected" : ""} key={sessionsKey} onClick={()=>{setSelectedSession(sessionsKey)}}>
                        {session.date} / {session.time}
                    </button>
                )})}
            </div>
            <div className='seats'>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                {JSON.parse(props.theatres[id-1].sessions)[selectedSession].seats.map((seat,seatKey)=>{return(
                    <div key={seatKey} className={(seatKey+1)%5 === 0 && (seatKey+1)%10 !== 0 ? "seat-margin seat" : seatKey === 0 ? "seat seat-d" : seatKey === 10 ? "seat seat-c" : seatKey === 20 ? "seat seat-b" : seatKey === 30 ? "seat seat-a" :  "seat"}>
                        {seat === 0 ? <MdOutlineEventSeat className='empty-seat'/> : <MdEventSeat className='sold-seat'/>}
                    </div>
                )})}
            </div>
        </div>
    </div>
    )
}

export default TheatreDetails