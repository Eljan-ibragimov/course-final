import React from 'react'

const Footer = () => {
  return (
    <div>
    <div className='footer'>
      <div className="about-us last">
        <h3>HAQQIMIZDA</h3>
        <p>______</p>
        <p>Şirkətin əsas məqsədi, ölkə daxilində və xaricində sürətli yükdaşımasını həyata keçirmək, müştərilərin məmnuniyyətini təmin etmək, onlara daha peşəkar və operativ xidmət təklif etməkdir.</p>
        <ul className='download'>
          <p>Mobil tətbiqi yüklə</p>
          <li >
            <a href="#"><img src="https://winex.az/img/stores/app-story.png" alt="" /></a>
            <a href="https://play.google.com/store/apps/details?id=com.rasulovtech.winexaz"><img src="https://winex.az/img/stores/google-play.png" alt="" /></a>
          </li>

        </ul>
        <p>İş saatı: Bazar ertəsi - Şənbə 10:00 - 19:00</p>
        

      </div>
      <div className="menyu last">
        <h3>MENYU</h3>
        <p>___</p>
        <ul>
          <li>
            <a href="#">- Ana səhifə</a>
            <a href="#">- Haqqımızda</a>
            <a href="#">- Xidmətlər</a>
            <a href="#">- Tariflər</a>
            <a href="#">- Bizimlə əlaqə</a>
            
          </li>
        </ul>
      </div>
      <div className="service last">
        <h3>XIDMƏTLƏR</h3>
        <p>___</p>
        <ul>
          <li>
            <a href="#">-Sifariş et</a>
            <a href="#">- Bəyannamə göndər</a>
          </li>
        </ul>

      </div>
      <div className="call-us last">
        <h3>SİZƏ ZƏNG EDƏK?</h3>
        <p>___</p>
        <p>Əlaqə nömrənizi qeyd edin. Biz sizinlə əlaqə saxlayaq.</p>
       <input type="number"  placeholder='Əlaqə nömrəniz'/>
       <button>Göndər</button>

      </div>

    </div>
    <hr className='hr'/>
    <div className="mmc">
      <p>© Winex.az MMC / Bütün Hüquqlar Qorunur!</p>
    </div>
    </div>
  )
}

export default Footer
