import React from 'react';
import OptionsItem from './OptionsItem';
import AdvImg from '../images/advantage.svg';
import AdvBottle from '../images/bottle.png';

function Options() {
    return(
        <section className="options">
              <h2 className="options__title">Обязательно обрати внимание на&nbsp;<span className="accent">5&nbsp;полезных&nbsp;свойств</span> кокосового масла для своего организма </h2>
              <div className="options__container">
                <ul className="options__list">
                    <OptionsItem img={AdvImg} title="Лечебные свойства" text="Обладает антисептическими и противомикробными свойствами. Быстро заживляет раны" />
                    <OptionsItem img={AdvImg} title="Увлажнение" text="Превосходно увлажняет и тонизирует кожу. Защищает от солнечных ожогов" />
                    <OptionsItem img={AdvImg} title="Очищение" text="Смешай 1 столовую ложку масла и 1 столовую ложку кофе — получится скраб для тела" />
                    <OptionsItem img={AdvImg} title="Полезность" text="Нормализирует микрофлору, запускает процесс похудения и помогает работе головного мозга" />
                    <OptionsItem img={AdvImg} title="Смягчение" text="Cмягчает огрубевшие участки кожи и предохраняет от образования трещин" />
                </ul>
                <img className="options__image" src={AdvBottle} />
              </div>
          </section>
    );
}

export default Options;