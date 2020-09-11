import React from 'react';
import LeadImg from '../images/lead_image.svg';

function Lead() {
    return(
        <section className="lead">
              <h2 className="lead__title">Не ленись заниматься уходом за своим телом каждый день — закажи продукт Thai Pure</h2>
              <p className="lead__subtitle">Оставь свой номер телефона, чтобы наши консультанты смогли перезвонить</p>
              <form className="lead__form" action="#">
                  <input type="text" name="name" placeholder="Ваше имя" className="lead__input" />
                  <input type="text" name="phone" placeholder="Номер телефона" className="lead__input" />
                  <button type="submit" className="lead__button">Заказать</button>
                  <p className="lead__accept">Нажав&nbsp;на&nbsp;кнопку&nbsp;вы&nbsp;принимаете&nbsp;условия&nbsp;<a href="#" className="lead__form-link">Политики&nbsp;конфиденциальности</a> и даете сове согласие на обработку персональных данных</p>
              </form>
              <img className="lead__image" src={LeadImg} />
              <button type="button" className="lead__mobile-button">Заказать</button>
          </section>
    );
}

export default Lead;