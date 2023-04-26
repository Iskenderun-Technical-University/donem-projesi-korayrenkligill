import React from 'react'
import '../../../styles/pages/admin/admin-main.css'
import '../../../styles/pages/admin/admin-userlist.css'
import AdminSidebar from './admin-sidebar'
import { BsThreeDotsVertical } from "react-icons/bs";
function AdminUserList() {
  return (
    <div className='admin-userlist admin'>
        <AdminSidebar/>
        <div className="main">
            <h2 className='header'>KULLANICI LİSTESİ</h2>
            <p className='description'>Kayıtlı kullanıcıların listesi</p>
            <div className='list'>
                <div className='list-header'>
                    <div className='user-column'>Kullanıcı</div>
                    <div className='status-column'>Yetki</div>
                    <div className='gender-column'>Cinsiyet</div>
                    <div className='contact-column'>İletişim</div>
                    <div className='actions-column'>Hareketler</div>
                </div>
                <div className="list-item">
                    <div className='list-column user-column'>
                        <img src="https://randomuser.me/api/portraits/men/11.jpg" alt=""/>
                        <span className="name-surname">Koray Renkligil</span>
                    </div>
                    <div className='list-column status-column'>
                        <div className='status-color admin-color'></div>Yönetici
                    </div>
                    <div className='list-column gender-column'>
                        Erkek
                    </div>
                    <div className='list-column contact-column'>
                        <a href="mailto:koray.renkligill@gmail.com">koray.renkligill@gmail.com</a>
                    </div>
                    <div className='list-column actions-column'>
                        <button>Hareketler</button>
                    </div>
                </div>
                <div className="list-item">
                    <div className='list-column user-column'>
                        <img src="https://randomuser.me/api/portraits/men/12.jpg" alt=""/>
                        <span className="name-surname">Mehmet İşbilen</span>
                    </div>
                    <div className='list-column status-column'>
                        <div className='status-color user-color'></div>Kullanıcı
                    </div>
                    <div className='list-column gender-column'>
                        Erkek
                    </div>
                    <div className='list-column contact-column'>
                        <a href="mailto:koray.renkligill@gmail.com">mehmet.isbilen@gmail.com</a>
                    </div>
                    <div className='list-column actions-column'>
                        <button>Hareketler</button>
                    </div>
                </div>
                <div className="list-item">
                    <div className='list-column user-column'>
                        <img src="https://randomuser.me/api/portraits/women/13.jpg" alt=""/>
                        <span className="name-surname">Beyza Akyürek</span>
                    </div>
                    <div className='list-column status-column'>
                        <div className='status-color user-color'></div>Kullanıcı
                    </div>
                    <div className='list-column gender-column'>
                        Kadın
                    </div>
                    <div className='list-column contact-column'>
                        <a href="mailto:koray.renkligill@gmail.com">beyza_akyurek@gmail.com</a>
                    </div>
                    <div className='list-column actions-column'>
                        <button>Hareketler</button>
                    </div>
                </div>
                <div className="list-item">
                    <div className='list-column user-column'>
                        <img src="https://randomuser.me/api/portraits/men/14.jpg" alt=""/>
                        <span className="name-surname">Muhammet Taşçı</span>
                    </div>
                    <div className='list-column status-column'>
                        <div className='status-color user-color'></div>Kullanıcı
                    </div>
                    <div className='list-column gender-column'>
                        Erkek
                    </div>
                    <div className='list-column contact-column'>
                        <a href="mailto:koray.renkligill@gmail.com">muhammet_tasci@gmail.com</a>
                    </div>
                    <div className='list-column actions-column'>
                        <button>Hareketler</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminUserList