import React from 'react';
import EnergyImg from '../images/energy.jpg';
import EnergyIcon from '../images/energy_icon.svg';

function Energy() {
    return(
        <section className="energy">
              <h2 className="energy__title">Кокосовое масло Thai Pure&nbsp;&mdash; это&nbsp;колоссальный <span className="accent">природный энергетик</span></h2>
              <p className="energy__subtitle">Благодаря сбалансированным свойствам кокосовое масло, поставляемое к нам из Азии, используется косметологами для производства различного мыла, масок, кремов и шампуня</p>
              <div className="energy__container">
                  <img className="energy__image" src={EnergyImg} />
                  <div className="energy__text-container">
                    <p className="energy__text">Увлажнение волос и кожи головы — это одно из основных качеств продукта Thai Pure. Уникальный состав жиров делает наружное и внутреннее употребление масла необходимым для здоровья человека.</p>
                  </div>
                  <img className="energy__icon" src={EnergyIcon} />
              </div>
          </section>
    );
}

export default Energy;