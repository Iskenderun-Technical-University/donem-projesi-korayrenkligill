import React, { useState } from 'react'
import { BsPencilSquare,BsXLg,BsCheck2 } from "react-icons/bs";

function ProfileSettings() {
    const [settings,setSettings] = useState(false);

    const [name,setName] = useState("Koray");
    const [surname,setSurname] = useState("Renkligil");
    const [dateDay,setDateDay] = useState(5);
    const [dateMonth,setDateMonth] = useState(1);
    const [dateYear,setDateYear] = useState(2003);

    const [unapprovedName,setUnapprovedName] = useState("Koray");
    const [unapprovedSurname,setUnapprovedSurname] = useState("Renkligil");
    const [unapprovedDate,setUnapprovedDate] = useState(dateYear+"-"+dateMonth+"-"+dateYear);

    function dateChange(date){
        var split = date.split('-');
        setDateDay(split[2]);
        setDateMonth(split[1]);
        setDateYear(split[0]);
    }
    function Check(){
        setName(unapprovedName);
        setSurname(unapprovedSurname);
        dateChange(unapprovedDate);
        setSettings(false);
    }
    if(!settings)
        return (
        <div className='profile-notchange'>
            <div className='profile-frame'>
                <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="" />
            </div>
            <div className='texts'>
                <h2>{name} {surname}</h2>
                <p>{dateDay}/{dateMonth}/{dateYear}</p>
            </div>
            <div className='buttons'>
                <button onClick={()=>{setSettings(true)}}><BsPencilSquare className='profile-edit-icon'/></button>
            </div>
        </div>
        )
    else
        return(
        <div className='profile-change'>
            <div className='profile-frame'>
                <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="" />
                <input id='file' type="file" accept='image/png , image/jpeg , image/webp'/>
                <label htmlFor='file'>profil resmini güncelle</label>
            </div>
            <div className='texts'>
                <div>
                    <input className='name' type="text" value={unapprovedName} onChange={(e)=>{setUnapprovedName(e.target.value)}}/>
                    <input className='surname' type="text" value={unapprovedSurname} onChange={(e)=>{setUnapprovedSurname(e.target.value)}}/>
                </div>
                <div>
                    <input type="date" onChange={(e)=>{setUnapprovedDate(e.target.value)}}/>
                </div>
            </div>
            <div className="buttons">
                <button onClick={Check}><BsCheck2 className='profile-edit-icon'/></button>
                <button onClick={()=>{setSettings(false)}}><BsXLg className='profile-edit-icon'/></button>
            </div>
        </div>
        )
}

export default ProfileSettings