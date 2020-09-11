import React from 'react';
import AdvantagesItem from './AdvantagesItem';
import AdvBg from '../images/adv_bg.svg';
import Hand from '../images/Beauty-Hand-Cream.svg';
import Moisturizer from '../images/Beauty-Moisturizer-Cream.svg';
import Face from '../images/Beauty-Face.svg';
import Salat from '../images/salat.svg';
import Massage from '../images/massage.svg';
import Glass from '../images/glass.svg';


function Advantages() {
    return(
        <section className="advantages">
              <div className="advantages__title-section">
                <div className="advantages__title-text">
                    <h2 className="advantages__title">Неспроста <span className="accent">кокосовое масло</span> легко обнаружить в составе самых известных средств по уходу за телом</h2>
                    <p className="advantages__subtitle">Его преимущества можно использовать по своему усмотрению:</p>
                </div>
                <img className="advantages__image" src={AdvBg} />
              </div>
              <ul className="advantages__list">
                  <AdvantagesItem img={Hand} text="Это питательный состав, устраняющий сухость кожи и снимающий раздражение" />
                  <AdvantagesItem img={Moisturizer} text="Способствует омоложению&nbsp;кожи" />
                  <AdvantagesItem img={Face} text="Станет эффективной увлажняющей маской для волос" />
                  <AdvantagesItem img={Salat} text="Используется как вкусный витаминизированный компонент для ежедневных блюд" />
                  <AdvantagesItem img={Massage} text="Подходит для массажистов в качестве великолепного массажного масла" />
                  <AdvantagesItem img={Glass} text="Благодаря устойчивому противодействию ультрафиолетовым лучам применяется как средство от солнечных ожогов" />
              </ul>
          </section>
    );
}

export default Advantages;