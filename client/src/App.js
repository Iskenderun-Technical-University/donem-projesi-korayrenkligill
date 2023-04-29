import React, { useEffect, useState } from 'react'
import './app.css'
import Navbar from './components/navbar/navbar'
import { Route,Routes } from 'react-router-dom'
import MainPage from './components/pages/main-page'
import Company from './components/pages/company'
import Footer from './components/footer'
import ErrorPage from './components/pages/error404'
import Place from './components/pages/place'
import Profile from './components/pages/profile'
import AdminDashboard from './components/pages/admin/admin-dashboard'
import AdminUserList from './components/pages/admin/admin-userlist'
import AdminTheatreList from './components/pages/admin/admin-theatrelist'
import AdminTheatreAdd from './components/pages/admin/admin-theatreadd'
import TheatreDetails from './components/pages/theatre-details'
import axios from 'axios'
import LoginRegister from './components/pages/login-register'
function App() {
  const [theatres, setTheatres] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:3001/theatres")
        .then((response) => {
          setTheatres(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  return (
    <div className='app'>
      <div>
        <Navbar isLogged={true}/>
        <Routes>
          <Route path='/' element={<MainPage theatres={theatres}/>}/>
          <Route path='/hakkımızda' element={<Company/>}/>
          <Route path='/salonumuz' element={<Place/>}/>
          <Route path='/profil' element={<Profile/>}/>
          <Route path='/admin' element={<AdminDashboard/>}/>
          <Route path='/admin/user-list' element={<AdminUserList/>}/>
          <Route path='/admin/theatre-list' element={<AdminTheatreList/>}/>
          <Route path='/admin/theatre-add' element={<AdminTheatreAdd/>}/>
          <Route path='/theatre/detail/:id' element={<TheatreDetails theatres={theatres}/>}/>
          <Route path='/login-register' element={<LoginRegister/>}/>
          <Route path='/*' element={<ErrorPage/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App