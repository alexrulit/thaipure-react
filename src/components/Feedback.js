import React from 'react';
import Arrow from '../images/arrov.svg';
import Arrow2 from '../images/arrow2.svg'
import Photo from '../images/foto.png';
import Otzovik from '../images/otzovik.svg';
import Rating from '../images/rating.png';
import Slides from '../images/slides.png';

function Feedback() {
    return(
        <section className="feedback">
              <h2 className="feedback__title">Отзывы</h2>
              <p className="feedback__subtitle">Что пишут о кокосовом масле Thai Pure на просторах интеренета</p>
              <div className="feedback__items">
                  <img className="feedback__arrow" src={Arrow} />
                  <div className="feedback__item">
                      <img className="feedback__image" src={Photo} />
                      <div className="feedback__container">
                        <div className="feedback__title-container">
                          <img className="feedback__icon" src={Otzovik} />
                          <p className="feedback__username">Косточка</p>
                          <p className="feedback__region">Россия, Омск</p>
                        </div>
                        <img className="feedback__rating" src={Rating} />
                        <h3 className="feedback__item-title">Любите ли вы Рафаэлло так, как люблю его Я? Масло&nbsp;&mdash;&nbsp;спаситель!</h3>
                        <p className="feedback__paragraph">Когда моя мама поехала отдыхать в Тайланд, я попросила её только об в одном: "А привези ко мне мамочка маслице кокосовое!". Желание моё осуществилась, кокосовое масло оказалось у меня в руках.</p>
                        <p className="feedback__paragraph">Огорчил меня размер флакона - и огорчает до сих пор - я хотела большую банку масла, а получила...</p>
                        <a href="https://otzovik.com/review_6783088.html" target="blank" className="feedback__link">читать весь отзыв на “Отзовике”</a>
                      </div>
                  </div>
                  <img className="feedback__arrow" src={Arrow2} />
              </div>
              <img className="feedback__slide" src={Slides} />
          </section>
    );
}

export default Feedback;