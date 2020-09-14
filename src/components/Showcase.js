import React from 'react';
import ShowcaseItem from './ShowcaseItem';
import ml100 from '../images/100ml.png';
import ml250 from '../images/250ml.png';
import ml500 from '../images/500ml.png';
import ml1000 from '../images/1000ml.png';

function Showcase(props) {
    return(
        <section className="showcase">
              <h2 className="showcase__title">Подберите для себя <span className="accent">подходящий объем упаковки</span> масла Thai Pure</h2>
              <ul className="showcase__list">
                  <ShowcaseItem title="100 мл" img={ml100} subtitle="Натуральное кокосовое масло Thai Pure" price="200 руб" openOrder={props.openOrder} />
                  <ShowcaseItem title="250 мл" img={ml250} subtitle="Натуральное кокосовое масло Thai Pure" price="250 руб" openOrder={props.openOrder} />
                  <ShowcaseItem title="500 мл" img={ml500} subtitle="Натуральное кокосовое масло Thai Pure" price="800 руб" openOrder={props.openOrder} />
                  <ShowcaseItem title="1000 мл" img={ml1000} subtitle="Натуральное кокосовое масло Thai Pure" price="1500 руб" openOrder={props.openOrder} />
              </ul>
          </section>
    );
}

export default Showcase;