import React from 'react';
import OfferItem from './OfferItem';
import MainImg from '../images/main.png'
import AdvantageImg from '../images/advantage.svg'

function Offer() {
    return(
        <section className="offer">
              <div className="offer__lead">
                <h1 className="offer__title">Кокосовое&nbsp;масло &mdash; секрет&nbsp;твоей <span className="accent">молодости и&nbsp;изумительной внешности</span></h1>
                <p className="offer__subtitle">Ищешь универсальное питательное средство для волос, ухода за телом или новый ингредиент для добавления вкуса в основные блюда? Тебе нужен качественный продукт без консервантов</p>
                <button className="offer__button">Заказать</button>
              </div>
              <div className="offer__container">
                <img className="offer__image" src={MainImg} />
                <ul className="offer__advantages">
                    <OfferItem img={AdvantageImg} text="100% натурально" />
                    <OfferItem img={AdvantageImg} text="Без консервантов" />
                    <OfferItem img={AdvantageImg} text="Гипоаллергенно" />
                </ul>
              </div>
          </section>
    );
}

export default Offer;