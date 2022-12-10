import React from 'react'

const price = () => {
    return (
        <div className='price'>
            <div className="left-price ">
                <h2>Tariflər</h2>
                <p>Adi və Maye məhsullar üçün<br /> <br />0.0 qramdan-0.200 qrama-dək-<small>0.80$</small> 
                <br /> <br />0.200 qramdan yuxarı bütün bağlamalar <small>3.99$ Qrama-qram </small> hesablanır.
                <br /><br />Misal üçün 0.303qr * 3.99$ = 1.21$</p>
                <br />
                <h4>Qeyd:</h4>
                <br />
                <small className='note'>*Bağlama birləşdirilməsi yəni Qrama-qram Bakı üçün 1 kq 3.99$
                    <br />Filial və Məntəqələr üçün 4.99$ hesablanacaq.
                    <br />Bağlama birləşdirilməsi 200 qramadək bağlamalara şamil edilmir.</small>
            </div>
            <div className="right-price">
                <img src="https://winex.az/upload/about_tariffs/1667200674851a8f3b6e9e55d4fd9d9f04edf72b50.jpg" alt="" />
            </div>

        </div>
    )
}

export default price
