import React, { useState } from 'react'
import Filter from '../filter'
import Footer from '../footer';
import '../../styles/pages/main-page.css'
function MainPage() {
    const [selectedCategory,setSelectedCategory] = useState("");
    const [selectedPrice,setSelectedPrice] = useState("");
    const [selectedDate,setSelectedDate] = useState("");

    const theatres = [
        {
            isim: "Tiyatro ismi 1",
            fiyat: 40,
            resim: "https://kdaidggt0f3v.merlincdn.net/Uploads/Films/gokhan-unver-stand-up-202331515557.jpg",
            categories: ["","drama"],
        },
        {
            isim: "Tiyatro ismi 2",
            fiyat: 40,
            resim: "https://kdaidggt0f3v.merlincdn.net/Uploads/Films/gokhan-unver-stand-up-202331515557.jpg",
            categories: ["","komedi"],
        },
        {
            isim: "Tiyatro ismi 3",
            fiyat: 40,
            resim: "https://kdaidggt0f3v.merlincdn.net/Uploads/Films/gokhan-unver-stand-up-202331515557.jpg",
            categories: ["","opera"],
        },
        {
            isim: "Tiyatro ismi 4",
            fiyat: 40,
            resim: "https://kdaidggt0f3v.merlincdn.net/Uploads/Films/gokhan-unver-stand-up-202331515557.jpg",
            categories: ["","müzikal"],
        },
        {
            isim: "Tiyatro ismi 5",
            fiyat: 40,
            resim: "https://kdaidggt0f3v.merlincdn.net/Uploads/Films/gokhan-unver-stand-up-202331515557.jpg",
            categories: ["","skeç"],
        },
        {
            isim: "Tiyatro ismi 6",
            fiyat: 40,
            resim: "https://kdaidggt0f3v.merlincdn.net/Uploads/Films/gokhan-unver-stand-up-202331515557.jpg",
            categories: ["","pandomim"],
        },
        {
            isim: "Tiyatro ismi 7",
            fiyat: 40,
            resim: "https://kdaidggt0f3v.merlincdn.net/Uploads/Films/gokhan-unver-stand-up-202331515557.jpg",
            categories: ["","skeç"],
        },
        {
            isim: "Tiyatro ismi 8",
            fiyat: 40,
            resim: "https://kdaidggt0f3v.merlincdn.net/Uploads/Films/gokhan-unver-stand-up-202331515557.jpg",
            categories: ["","müzikal"],
        },
        {
            isim: "Tiyatro ismi 9",
            fiyat: 40,
            resim: "https://kdaidggt0f3v.merlincdn.net/Uploads/Films/gokhan-unver-stand-up-202331515557.jpg",
            categories: ["","drama"],
        },
        {
            isim: "Tiyatro ismi 10",
            fiyat: 40,
            resim: "https://kdaidggt0f3v.merlincdn.net/Uploads/Films/gokhan-unver-stand-up-202331515557.jpg",
            categories: ["","pandomim"],
        },
        {
            isim: "Tiyatro ismi 11",
            fiyat: 40,
            resim: "https://kdaidggt0f3v.merlincdn.net/Uploads/Films/gokhan-unver-stand-up-202331515557.jpg",
            categories: ["","drama"],
        },
        {
            isim: "Tiyatro ismi 12",
            fiyat: 40,
            resim: "https://kdaidggt0f3v.merlincdn.net/Uploads/Films/gokhan-unver-stand-up-202331515557.jpg",
            categories: ["","müzikal"],
        },
        {
            isim: "Tiyatro ismi 13",
            fiyat: 40,
            resim: "https://kdaidggt0f3v.merlincdn.net/Uploads/Films/gokhan-unver-stand-up-202331515557.jpg",
            categories: ["","drama"],
        },
        {
            isim: "Tiyatro ismi 14",
            fiyat: 40,
            resim: "https://kdaidggt0f3v.merlincdn.net/Uploads/Films/gokhan-unver-stand-up-202331515557.jpg",
            categories: ["","skeç"],
        },
    ]
    console.log(theatres[0].categories.indexOf(selectedCategory), selectedCategory);
    return (
    <div className='main-page'>
        <Filter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} selectedPrice={selectedPrice} setSelectedPrice={setSelectedPrice} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
        <div className='theatres'>
            <svg className='header-wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,256L48,256C96,256,192,256,288,229.3C384,203,480,149,576,112C672,75,768,53,864,74.7C960,96,1056,160,1152,160C1248,160,1344,96,1392,64L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            <svg className='footer-wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,213.3C384,192,480,128,576,112C672,96,768,128,864,128C960,128,1056,96,1152,101.3C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            {theatres.map((theatre,key)=>{
                if(theatre.categories.indexOf(selectedCategory) >= 0)
                    return(
                    <div key={key} className='theatre'>
                        <img src={theatre.resim} alt=""/>
                        <div className='theatre-name'>
                            <h3>{theatre.isim}</h3>
                            <h3>{theatre.fiyat}₺</h3>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
    )
}

export default MainPage