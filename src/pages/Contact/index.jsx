import rasm from "..//..//assets/zal.png"
import karta from "..//..//assets/karta.png"

import './style.css'


function Contact() {
    return (
        <main>
            <h1>Contact</h1>
            <div className="top-1">
                <h5>Контакты</h5><br />
                <h3>ШОУ РУМ TRUE В ТАШКЕНТЕ </h3> <br />
                <h4>ПОСЕТИТЕ НАШ ВЫСТАВОЧНЫЙ ЗАЛ В  ТАШКЕНТ СИТИ, BOULEVARD</h4>

            </div>
            <div className="dv-rasm">
                <img src={rasm} alt="" />
            </div>
            <div>
            <div className="orash">
            <div className="left">
                  <img className="karta" src={karta} alt="" />
           
                        </div>
                        <div className="right">
                            <h1><b>Официальный Дистрибьютер <br /> в Узбекистане - ProWellness</b> </h1><br /><br /><br />
                            <h4>+998 (90)-606-66-66</h4><br />
                            <a className="ayubxon-a" href="https://www.powellness.org/">INFO@PROWELLNESS.UZ</a> <br /><br />
                             <h3>Адрес: Ташкент Сити, Булевард, <br /> ул. Фурката 2А</h3>  <br /><br /><br />
                            <h3><b>ПН-СБ с 9:00-19:00 <br />
                                ВС НЕ РАБОЧИЙ</b></h3>
                        </div>
                </div>
            </div>
        </main>
    );
}

export default Contact;

