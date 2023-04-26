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