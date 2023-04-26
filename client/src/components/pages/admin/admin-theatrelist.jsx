import React from 'react'
import '../../../styles/pages/admin/admin-main.css'
import '../../../styles/pages/admin/admin-theatrelist.css'
import AdminSidebar from './admin-sidebar'

function AdminTheatreList() {
  return (
    <div className='admin-theatrelist admin'>
        <AdminSidebar/>
        <div className="main">
          <h2 className='header'>TİYATRO LİSTESİ</h2>
          <p className='description'>Gösterilerin listesi</p>
          <div className='list'>
                <div className='list-header'>
                    <div className='image-column'>Görsel</div>
                    <div className='name-column'>Adı</div>
                    <div className='description-column'>Açıklaması</div>
                    <div className='price-column'>Fiyatı</div>
                    <div className='actions-column'>Hareketler</div>
                </div>
                <div className="list-item">
                    <div className='list-column image-column'>
                        <img src="https://kdaidggt0f3v.merlincdn.net/Uploads/Films/gokhan-unver-stand-up-202331515557.jpg" alt=""/>
                    </div>
                    <div className='list-column name-column'>
                      <span className="name">Gökhan Ünver : Çok Tanıdık</span>
                    </div>
                    <div className='list-column description-column'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro dolores magni tempore esse dignissimos accusantium reprehenderit nulla pariatur cum.
                    </div>
                    <div className='list-column price-column'>
                        200₺
                    </div>
                    <div className='list-column actions-column'>
                        <button>Hareketler</button>
                    </div>
                </div>
                <div className="list-item">
                    <div className='list-column image-column'>
                        <img src="https://kdaidggt0f3v.merlincdn.net/Uploads/Films/gokhan-unver-stand-up-202331515557.jpg" alt=""/>
                    </div>
                    <div className='list-column name-column'>
                      <span className="name">Gökhan Ünver : Çok Tanıdık</span>
                    </div>
                    <div className='list-column description-column'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro dolores magni tempore esse dignissimos accusantium reprehenderit nulla pariatur cum.
                    </div>
                    <div className='list-column price-column'>
                        200₺
                    </div>
                    <div className='list-column actions-column'>
                        <button>Hareketler</button>
                    </div>
                </div>
                <div className="list-item">
                    <div className='list-column image-column'>
                        <img src="https://kdaidggt0f3v.merlincdn.net/Uploads/Films/gokhan-unver-stand-up-202331515557.jpg" alt=""/>
                    </div>
                    <div className='list-column name-column'>
                      <span className="name">Gökhan Ünver : Çok Tanıdık</span>
                    </div>
                    <div className='list-column description-column'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro dolores magni tempore esse dignissimos accusantium reprehenderit nulla pariatur cum.
                    </div>
                    <div className='list-column price-column'>
                        200₺
                    </div>
                    <div className='list-column actions-column'>
                        <button>Hareketler</button>
                    </div>
                </div>
                <div className="list-item">
                    <div className='list-column image-column'>
                        <img src="https://kdaidggt0f3v.merlincdn.net/Uploads/Films/gokhan-unver-stand-up-202331515557.jpg" alt=""/>
                    </div>
                    <div className='list-column name-column'>
                      <span className="name">Gökhan Ünver : Çok Tanıdık</span>
                    </div>
                    <div className='list-column description-column'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro dolores magni tempore esse dignissimos accusantium reprehenderit nulla pariatur cum.
                    </div>
                    <div className='list-column price-column'>
                        200₺
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

export default AdminTheatreList