import React from 'react'
import error from '../../images/error.png';
import '../../styles/pages/error404.css'
function ErrorPage() {
  return (
    <div className='error'>
        <img src={error} alt="" />
    </div>
  )
}

export default ErrorPage