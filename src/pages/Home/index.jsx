


import "./style.css";
import rasm from "./.././/..//assets/Video.png"
import rasm2 from ".//..//..//assets/slider.png"
import rasm3 from "..//..//assets/run.png"


export default function App() {
  return (
    <div className="container">
  
      <header className="header">
        <div className="logo">TRUE</div>
        <nav className="nav">
          <a href="#">Главная</a>
          <a href="#">О компании</a>
          <a href="#">Продукты</a>
          <a href="#">Контакты</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <img src={rasm} alt="" />
        </div>
      </section>

  
      <section className="banner">
       
      </section>

      <section className="product">
        <div className="product-text">
          <img src={rasm2} alt="" />
         </div>
      </section>
  <div className="container">
      <div className="grid">
        <div className="card card-image">
          <div className="overlay">
            <h2>ЛУЧШИЕ ХАРАКТЕРИСТИКИ</h2>
            <p>
              Наши тренажеры имеют самые совершенные характеристики. 
              Начиная от более мощных технических показателей 
              до расширенных функциональных возможностей
            </p>
          </div>
        </div>

        <div className="card card-blue">
          <h2>НИЗКАЯ СТОИМОСТЬ ВЛАДЕНИЕ</h2>
          <p>
            Надежность Оборудования Обеспечивает Низкие Затраты 
            На Сервисное Обслуживание, Так По Стоимости Затрат На 
            Эксплуатацию TRUE Выигрывает У Конкурентов.
          </p>
        </div>

        <div className="card card-blue">
          <h2>ВЫСОКОЕ КАЧЕСТВО И НАДЕЖНОСТЬ</h2>
          <p>
            Высокое Качество Тренажеров - Это Визитная Карточка TRUE. 
            Кроме Того TRUE Предоставляет До 5 Лет Гарантии На Кардиотренажеры.
          </p>
        </div>

        <div className="card card-image second">
          <div className="overlay">
            <h2>КАЧЕСТВЕННЫЕ И ОПЕРАТИВНЫЙ СЕРВИС</h2>
            <p>
              Оборудование Должно Работать Бесперебойно, Поэтому мы 
              Уделяем Особое Внимание Наличию Всех Необходимых Запчастей 
              И Высокой Срочности Технического Реагирования.
            </p>
          </div>
        </div>
      </div>
    </div>  
     <div className="services">
      <div className="services-left">
        <h2>
          МЫ ПРЕДЛАГАЕМ <br /> ПОЛНЫЙ КОМПЛЕКС УСЛУГ
        </h2>

        <div className="grid">
          <div className="service-item">
            <div className="icon">🎧</div>
            <div>
              <h3>КОНСАЛТИНГ</h3>
              <p>
                Поможем в разработке концепции клуба, зонировании, оснащении и
                расчете финансовых показателей.
              </p>
            </div>
          </div>

          <div className="service-item">
            <div className="icon">▶️</div>
            <div>
              <h3>МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ</h3>
              <p>
                Полный цикл пуско-наладочных работ, а также сервисного
                обслуживания тренажеров.
              </p>
            </div>
          </div>

          <div className="service-item">
            <div className="icon">📦</div>
            <div>
              <h3>ПОДБОР ОБОРУДОВАНИЯ И 3D ПРОЕКТ</h3>
              <p>
                Поможем подобрать оборудование, сделать расстановку на плане и
                показать 3D визуализацию вашего будущего проекта.
              </p>
            </div>
          </div>

          <div className="service-item">
            <div className="icon">🏠</div>
            <div>
              <h3>ФИРМЕННЫЙ SHOW-ROOM</h3>
              <p>
                Пройдите тест-драйв оборудования перед приобретением.
              </p>
            </div>
          </div>

          <div className="service-item">
            <div className="icon">⚙️</div>
            <div>
              <h3>ПОСТАВКА ЗАПЧАСТЕЙ</h3>
              <p>
                Поставка как гарантийных, так и постгарантийных запчастей.
              </p>
            </div>
          </div>

          <div className="service-item">
            <div className="icon">🚚</div>
            <div>
              <h3>ДОСТАВКА ПО ВСЕМУ УЗБЕКИСТАНУ</h3>
              <p>Мы доставляем оборудование по всему Узбекистану.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="services-right">
        <img src={rasm3} alt="" />
      </div>
    </div>
  );
      <section className="features">
        <div className="feature-card">Высокое качество и надёжность</div>
        <div className="feature-card">Идеальная совместимость и дизайн</div>
        <div className="feature-card">Продвинутая эргономика и комфорт</div>
      </section>
 <div className="page">
      {/* Orqa fon rasm */}
      <div className="hero">
        <img
          src="https://images.unsplash.com/photo-1594737625785-c32f4b52a6a0"
          alt="fitness"
          className="hero-bg"
        />

        {/* Form */}
        <div className="form-box">
          <h2>
            ПОЛУЧИТЕ ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ НА ТРЕНАЖЕРЫ TRUE FITNESS
          </h2>
          <p>
            Мы будем рады проконсультировать вас и помочь с подбором оборудования
          </p>

          <form>
            <input type="text" placeholder="ИМЯ" />
            <input type="email" placeholder="EMAIL" />
            <input type="tel" placeholder="+998 (99)-999-99-99" />

            <button type="submit">ОТПРАВИТЬ</button>
          </form>

          <span className="privacy">
            Нажимая на кнопку, вы даете согласие на обработку персональных данных
            и соглашаетесь с политикой конфиденциальности
          </span>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-grid">
          <div>
            <h4>КАТАЛОГ ТОВАРОВ</h4>
            <ul>
              <li>Кардио тренажеры</li>
              <li>Composite Strength</li>
              <li>True Stretch</li>
              <li>Сайклинг</li>
              <li>Групповые тренировки</li>
              <li>Силовые тренажеры</li>
              <li>Консоли</li>
            </ul>
          </div>

          <div>
            <h4>ИНФОРМАЦИЯ</h4>
            <ul>
              <li>О бренде</li>
              <li>Преимущества</li>
              <li>Открыть клуб</li>
              <li>Продукция</li>
              <li>Контакты</li>
            </ul>
          </div>

          <div>
            <h4>КОНТАКТЫ</h4>
            <ul>
              <li>Политика конфиденциальности</li>
              <li>Контакты</li>
            </ul>
          </div>

          <div>
            <h4>ПОДПИСАТЬСЯ НА НОВОСТИ И АКЦИИ</h4>
          </div>
        </div>

        <p className="copy">© TRUE FITNESS</p>
      </footer>
    </div>
  

    </div>
  );
}
