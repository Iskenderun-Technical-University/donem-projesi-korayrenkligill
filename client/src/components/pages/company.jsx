import React, { useEffect, useState } from 'react'
import '../../styles/pages/company.css'
import Footer from '../footer';
function Company() {
    const [width, setWidth]   = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const [text,setText] = useState({
        name: "Merve",
        surname: "KAYHAN",
        job: "Tiyatro yöneticisi",
        text: "Merhabalar, ben Merve Egetre'de Tiyatro yöneticisi olarak çalışmaktayım görevim işlerin düzgün bir şekilde yürütülmesini sağlamak. Bilet satışı, pazarlama, bütçe yönetimi ve personel yönetimi gibi konularda kararlar almak ve uygulanmasını sağlamak.",
    });
    const [id,setId] = useState(0);

    const textList = [
        {
            name: "Merve",
            surname: "KAYHAN",
            job: "Tiyatro yöneticisi",
            text: "Merhabalar, ben Merve Egetre'de Tiyatro yöneticisi olarak çalışmaktayım görevim işlerin düzgün bir şekilde yürütülmesini sağlamak. Bilet satışı, pazarlama, bütçe yönetimi ve personel yönetimi gibi konularda kararlar almak ve uygulanmasını sağlamak.",
        },
        {
            name: "Semih",
            surname: "ÇARE",
            job: "Sanat yönetmeni",
            text: "Selamlar, ben Semih Egetre'de Sanat yönetmeni olarak çalışmaktayım. Tiyatroda sahnelenen oyunların seçiminden, yönetmen seçimine ve oyuncu seçimine kadar her aşamada görev almaktayım. Ayrıca, sahne tasarımı, kostüm, ışık ve ses efektleri gibi görsel ve işitsel unsurların tasarımına da katkıda bulunmaktayım.",
        },
        {
            name: "Polat",
            surname: "OLTA",
            job: "Muhasebe personeli",
            text: "Merhabalar, ben Polat Egetre'de Muhasebe personeli olarak çalışmaktayım tiyatro bütçesini hazırlar, gelir ve giderleri izler, faturaların ödenmesini sağlar ve diğer mali işlemlerle ilgilenirim.",
        },
        {
            name: "Elif",
            surname: "ÇOBAN",
            job: "Pazarlama personeli",
            text: "Herkese selam, ben Elif Egetre'de Pazarlama personeli olarak çalışmaktayım tiyatro etkinliklerinin tanıtımını yapar, reklam kampanyaları düzenler, basın bültenleri hazırlar ve diğer pazarlama faaliyetleriyle ilgilenirim.",
        },
    ]

    const handleClick = (id)=>{
        switch(id){
            case 0:
                setText(textList[0]);
                setId(0);
                break;
            case 1:
                setText(textList[1]);
                setId(1);
                break;
            case 2:
                setText(textList[2]);
                setId(2);
                break;
            case 3:
                setText(textList[3]);
                setId(3);
                break;
            default:
                setText(textList[0]);
                setId(0);
                break;
        }
    }
    return (
    <div className='company'>
        <div className='header'>
            <h2>Hakkımızda</h2>
        </div>
        <div className='who-are-we'>
            <div className="text">
                <h2>Biz Kimiz?</h2>
                <p>Egetre 2009'dan bu yana hizmet vermekte olan bir tiyatro salonudur. Gençlerimizi bu sanat hakkında bilgilendirmek, bu sanatı keşfetmelerini ve ilgi duymalarını sağlamayı amaçlamaktayız. <br/><br/>Ayrıca bölgemizdeki halkın günün stresinden bir nebze olsun uzaklaşmasını, başka şeyler düşünebilmesini ve rahatlaması için gösteriler vermekte sinema, spor faaliyetleri gibi bir aktivite seyri sunmaktayız.</p>
            </div>
            <div className="frame">
                <img src="https://www.thebalancemoney.com/thmb/frmG5-EqfKTdObh6ofTewOTI5N4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/group-of-young-adults-stood-in-office-environment-925260686-5b37905246e0fb00374456f0.jpg" alt="Toplu çalışan ekibi görseli" />
            </div>
            <svg className='header-wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L48,96C96,96,192,96,288,85.3C384,75,480,53,576,80C672,107,768,181,864,208C960,235,1056,213,1152,176C1248,139,1344,85,1392,58.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </div>
        <div className='aim'>
            <h2>Hedeflerimiz</h2>
            <ul>
                <li>İnsanların hayatını, toplumlarını ve dünyayı anlamalarına yardımcı olmak</li>
                <li>İnsanların düşünmelerine ve duygusal olarak etkilenmelerine neden olmak</li>
                <li>Gençler için bir hobi haline getirmek</li>
                <li>Halkın dertlerinden uzaklaşacağı bir kapı sağlamak</li>
                <li>İnsanları eğlendirmek, bilgilendirmek ve rahatlatmak</li>
            </ul>
        </div>
        {
            width > 570 ? 
            <div className='our-managers'>
                <h2 className='managers-header'>Çalışanlarımız</h2>
                <div className='flex'>
                    <div className='grid'>
                        <div className={id === 0 ? 'grid-item' : 'grid-item deactive'} onClick={()=>{handleClick(0)}}><div className='frame'><img src="https://xsgames.co/randomusers/assets/avatars/female/5.jpg" alt="" /></div></div>
                        <div className={id === 1 ? 'grid-item' : 'grid-item deactive'} onClick={()=>{handleClick(1)}}><div className='frame'><img src="https://xsgames.co/randomusers/assets/avatars/male/7.jpg" alt="" /></div></div>
                        <div className={id === 2 ? 'grid-item' : 'grid-item deactive'} onClick={()=>{handleClick(2)}}><div className='frame'><img src="https://xsgames.co/randomusers/assets/avatars/male/8.jpg" alt="" /></div></div>
                        <div className={id === 3 ? 'grid-item' : 'grid-item deactive'} onClick={()=>{handleClick(3)}}><div className='frame'><img src="https://xsgames.co/randomusers/assets/avatars/female/10.jpg" alt="" /></div></div>
                    </div>
                    <div className='texts'>
                        <h2>{text.name} <span className={id === 0 ? 'red' : id === 1 ? 'blue' : id === 2 ? 'green' : 'yellow'}>{text.surname}</span><span className='job'>{text.job}</span></h2>
                        <p>“ {text.text} ”</p>
                    </div>
                </div>
                <svg className='footer-wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L60,160C120,160,240,160,360,176C480,192,600,224,720,234.7C840,245,960,235,1080,218.7C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>
            :
            <div className='our-managers'>
                <h2 className='managers-header'>Çalışanlarımız</h2>
                <br></br>
                <div className='flex'>
                    <div className='texts'>
                        <h2><span>{textList[0].name} <span className="red">{textList[0].surname}</span></span><span className='job'>{textList[0].job}</span></h2>
                        <p>“ {textList[0].text} ”</p>
                        <br/>
                        <h2><span>{textList[1].name} <span className="blue">{textList[1].surname}</span></span><span className='job'>{textList[1].job}</span></h2>
                        <p>“ {textList[1].text} ”</p>
                        <br/>
                        <h2><span>{textList[2].name} <span className="green">{textList[2].surname}</span></span><span className='job'>{textList[2].job}</span></h2>
                        <p>“ {textList[2].text} ”</p>
                        <br/>
                        <h2><span>{textList[3].name} <span className="yellow">{textList[3].surname}</span></span><span className='job'>{textList[3].job}</span></h2>
                        <p>“ {textList[3].text} ”</p>
                    </div>
                </div>
                <svg className='footer-wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L60,160C120,160,240,160,360,176C480,192,600,224,720,234.7C840,245,960,235,1080,218.7C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>
        }
    </div>
  )
}

export default Company