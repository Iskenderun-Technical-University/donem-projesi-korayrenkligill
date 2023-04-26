import React from 'react'
import '../../../styles/pages/admin/admin-main.css'
import '../../../styles/pages/admin/admin-dashboard.css'
import AdminSidebar from './admin-sidebar'
import { BsFillPersonPlusFill,BsTicketPerforatedFill,BsCurrencyDollar } from "react-icons/bs";
function AdminDashboard() {
  return (
    <div className='admin-dashboard admin'>
        <AdminSidebar/>
        <div className='main'>
          <h2 className='header'>GÖSTERGE PANELİ</h2>
          <p className='description'>Detaylı bilgiler</p>
          <div className='dashboard-grid'>
            <div className='dashboard-grid-item'>
              <div>
                <h2>0000</h2>
                <p>Kullanıcı kaydı</p>
              </div>
              <BsFillPersonPlusFill className='dashboard-icon'/>
            </div>
            <div className='dashboard-grid-item'>
              <div>
                <h2>0000</h2>
                <p>Satılan bilet</p>
              </div>
              <BsTicketPerforatedFill className='dashboard-icon'/>
            </div>
            <div className='dashboard-grid-item'>
              <div>
                <h2>0000</h2>
                <p>Elde edilen gelir</p>
              </div>
              <BsCurrencyDollar className='dashboard-icon'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AdminDashboard