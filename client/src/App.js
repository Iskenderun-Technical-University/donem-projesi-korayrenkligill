import React from 'react'
import Navbar from './components/navbar/navbar'
import { Route,Routes } from 'react-router-dom'
import MainPage from './components/pages/main-page'
import Company from './components/pages/company'
import Footer from './components/footer'
import ErrorPage from './components/pages/error404'
function App() {
  return (
    <div className='app'>
      <Navbar isLogged={true}/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/hakkımızda' element={<Company/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App