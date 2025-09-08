


import './style.css'
import logo from '../../assets/gmrr.png'
import ozb from '../../assets/ozb.png'


function OpenClub() {
    return (
        <main>

            <div className='div'>
                <p>КЛУБ TRUE</p>
                <h1>Открыть клуб вместе с TRUE</h1>
            </div>

            <section className='section'>
                <img src={logo} alt="" />
            </section>







            <section className='sectionn'>

                <h1 className='g'>Отправить заявку</h1>

                <div className="div1">
                    <h4>Ваше имя</h4>
                    <h4 className='h1' >имя</h4>
                </div>

                <div className="div1">
                    <h4>Е-mail:</h4>
                    <h4 className='h1' >Е-mail:</h4>
                </div>

                <div className="div1">
                    <h4>Номер телефона</h4>
                    <h4 className='h1' > <img src={ozb} alt="" /> +998 (99)-999-99-99</h4>
                </div>

                <div className="div1">
                    <h4>Город</h4>
                    <h4 className='h1' >Город</h4>
                </div>
            </section>

        </main>
    );
}

export default OpenClub;

