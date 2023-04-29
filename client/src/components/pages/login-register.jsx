import React, { useState } from 'react'
import loginImage from '../../images/login-page-4468581-3783954.png'
import '../../styles/pages/login-register.css'
function LoginRegister() {
    const [transform,setTransform] = useState(0)
    const backgroudItem = {
        transform: `translateX(${transform}px)`,
    };
    return (
    <div className='login-register'>
        <img src={loginImage} alt=""/>
        <div className='login-or-register'>
            <form action="" className='login' style={backgroudItem}>
                <h2>Giriş Yap</h2>
                <input type="text" placeholder='kullanıcı adı..' name="" id="" />
                <input type="password" placeholder='şifre..' name="" id="" />
                <button>Giriş yap</button>
                <p onClick={()=>{setTransform(-263)}}>hesap oluştur</p>
            </form>
            <form action="" className='register' style={backgroudItem}>
                <h2>Kayıt Ol</h2>
                <input type="text" placeholder='kullanıcı adı..' name="" id="" />
                <input type="email" placeholder='e-posta..' name="" id="" />
                <input type="password" placeholder='şifre..' name="" id="" />
                <input type="password" placeholder='şifre..' name="" id="" />
                <button>Giriş yap</button>
                <p onClick={()=>{setTransform(0)}}>hesabım var</p>
            </form>
        </div>
    </div>
    )
}

export default LoginRegister