import './style.css';
import hero from "../Advantages/hero.png";

function Advantages() {
  return (
    <main>
      <section className="section_one">
        <div className="container">
          <p className="subtitle">НАШИ ПРЕИМУЩЕСТВА</p>
          <h2 className="title">Преимущества TRUE FITNESS</h2>
          <h3 className="description">
            Благодаря которым мы являемся мировым лидером в производстве фитнес-оборудования
          </h3>

          <div className="advantages_grid">
            <div className="adv_item">
              <img src={hero} alt="Инновации" />
              <h4>Инновационные технологии</h4>
              <p>Высокое качество тренажеров - это визитная карточка TRUE. Кроме того, TRUE предоставляет до 5 лет полной гарантии на кардио тренажеры.</p>
            </div>

            <div className="adv_item">
              <img src={hero} alt="Надёжность" />
              <h4>Надёжность и качество</h4>
              <p>Высокое качество тренажеров - это визитная карточка TRUE. Кроме того, TRUE предоставляет до 5 лет полной гарантии на кардио тренажеры.</p>
            </div>

            <div className="adv_item">
              <img src={hero} alt="Комфорт" />
              <h4>Комфорт в каждой детали</h4>
              <p>Высокое качество тренажеров - это визитная карточка TRUE. Кроме того, TRUE предоставляет до 5 лет полной гарантии на кардио тренажеры.</p>
            </div>

            <div className="adv_item">
              <img src={hero} alt="Для всех" />
              <h4>Подходит для всех</h4>
              <p>Высокое качество тренажеров - это визитная карточка TRUE. Кроме того, TRUE предоставляет до 5 лет полной гарантии на кардио тренажеры.</p>
            </div>

            <div className="adv_item">
              <img src={hero} alt="Дизайн" />
              <h4>Современный дизайн</h4>
              <p>Высокое качество тренажеров - это визитная карточка TRUE. Кроме того, TRUE предоставляет до 5 лет полной гарантии на кардио тренажеры.</p>
            </div>

            <div className="adv_item">
              <img src={hero} alt="Экономия места" />
              <h4>Экономия места</h4>
              <p>Высокое качество тренажеров - это визитная карточка TRUE. Кроме того, TRUE предоставляет до 5 лет полной гарантии на кардио тренажеры.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='section_two'>
        <button>TOP 5</button>
        <h4>Бренд TRUE Fitness входит в ТОП 5 крупнейших производителей фитнес оборудования</h4>
      </section>

      <section className="offer">
        <div className="overlay">
          <div className="container">
            <p className="offer-subtitle">TRUE FITNESS</p>
            <h2 className="offer-title">
              ПОЛУЧИТЕ <span>ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ</span> НА ТРЕНАЖЕРЫ
              <span className="blue"> TRUE FITNESS</span>
            </h2>
            <p className="offer-desc">
              Мы будем рады проконсультировать вас и помочь с подбором оборудования
            </p>

            <form className="offer-form">
              <input type="text" placeholder="ИМЯ" required />
              <input type="tel" placeholder="+998 (99)-999-99-99" required />
              <input type="email" placeholder="E-MAIL" required />
              <button type="submit">ОТПРАВИТЬ</button>
            </form>

            <p className="offer-policy">
              *Нажимая на кнопку, вы даете согласие на обработку персональных данных и
              соглашаетесь с политикой конфиденциальности
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Advantages;
