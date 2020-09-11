import React from 'react';
import Instagram from '../images/insta.svg';
import Vk from '../images/VK.svg';

function Footer() {
    return(
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__title">
                    <p className="footer__logo">Thaipure</p>
                    <p className="footer__about">Прямые поставки сертифицированного кокосового масла от производителя</p>
                </div>
                <p className="footer__copyrating">&copy; 2020 Thaipure</p>
                <a href="#" className="footer__link">Политика конфиденциальности</a>
            </div>
            <div className="footer__contact">
                <p className="footer__phone">+7 (999) 777-88-99</p>
                <a href="#" className="footer__phone-link">Заказать звонок</a>
                <div className="footer__social">
                    <img className="footer__icon" src={Instagram} />
                    <img className="footer__icon" src={Vk} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;