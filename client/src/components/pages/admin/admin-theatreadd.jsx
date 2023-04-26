import React, { useState } from 'react'
import '../../../styles/pages/admin/admin-main.css'
import '../../../styles/pages/admin/admin-theatreadd.css'
import AdminSidebar from './admin-sidebar'
import { BsFileEarmarkPlus,BsPlus } from "react-icons/bs";
function AdminTheatreAdd() {
  const date = new Date();
  let nowDate;
  if(date.getMonth() > 9 && date.getDate() > 9)
    nowDate = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
  else if(date.getMonth() > 9 && date.getDate() < 10)
    nowDate = date.getFullYear() + "-" + date.getMonth() + "-0" + date.getDate();
  else if(date.getMonth() < 10 && date.getDate() > 9)
    nowDate = date.getFullYear() + "-0" + date.getMonth() + "-" + date.getDate();
  else
    nowDate = date.getFullYear() + "-0" + date.getMonth() + "-0" + date.getDate();


  const [choosedDate,setChoosedDate] = useState(nowDate);
  const [choosedHour,setChoosedHour] = useState(0);
  const [choosedMinute,setChoosedMinute] = useState(0);
  
  let nowSession = {
    date: "",
    time: ""
  }
  const [sessionList,setSessionList] = useState([]);
  return (
    <div className='admin-theatreadd admin'>
        <AdminSidebar/>
        <div className="main">
          <h2 className='header'>TİYATRO EKLE</h2>
          <p className='description'>Yeni gösteriler ekle</p>
          <div className='theatre-add-form'>
            <div className='choose-image'>
              <BsFileEarmarkPlus/>
            </div>
            {/* <div className='choosed-image'>
              <img src="" alt="" />
            </div> */}
            <input className='form-item theatre-name' type="text" placeholder='Tiyatro adını giriniz..'/>
            <textarea className='form-item theatre-description' type="text" rows="5"  placeholder='Tiyatro açıklaması giriniz..'></textarea>
            <input className='form-item theatre-price' type="number" placeholder='Tiyatro fiyatı giriniz..'/>
            <div className='choose-session-panel'>
              <input type="date" min={nowDate} value={nowDate} onChange={(e)=>{setChoosedDate(e.target.value)}}/>
              <div>
                <input type="number" min="00" max="24" value={choosedHour} onChange={(e)=>{setChoosedHour(e.target.value)}}/>
                <span> : </span>
                <input type="number" min="00" max="60" value={choosedMinute} onChange={(e)=>{setChoosedMinute(e.target.value)}}/>
              </div>
              <button>SEANS EKLE</button>
            </div>
            <div className='sessions'>
              <h2>Seanslar</h2>
              <p>Seans: {choosedDate} - {choosedHour}:{choosedMinute}</p>
            </div>
            <div className='margin-bottom'></div>
          </div>
        </div>
    </div>
  )
}

export default AdminTheatreAdd