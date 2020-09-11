import React from 'react';
import OrderImg from '../images/order.svg';
import OrderIcon from '../images/order_icon.svg';

function Order() {
    return(
        <section className="order">
              <h2 className="order__title"><span className="accent">Хочешь сделать заказ?</span> Это просто — заполни нашу форму для обратной связи:</h2>
              <div className="order__container">
                <img className="order__cert" src={OrderImg} />
                <form action="#" className="order__form">
                    <h3 className="order__form-title">Оставь свой контактный номер телефона, и мы свяжемся с тобой для уточнения заказа</h3>
                    <input type="text" name="name" placeholder="Ваше имя" className="order__input" />
                    <input type="text" name="phone" placeholder="Номер телефона" className="order__input" />
                    <button type="submit" className="order__button">Заказать</button>
                    <p className="order__accept">Нажав&nbsp;на&nbsp;кнопку&nbsp;вы&nbsp;принимаете&nbsp;условия <a href="#" className="order__form-link">Политики&nbsp;конфиденциальности</a> и даете сове согласие на обработку персональных данных</p>
                    <img className="order__icon" src={OrderIcon} />
                </form>
                <button type="button" className="order__mobile-button">Заказать</button>
              </div>
          </section>
    );
}

export default Order;