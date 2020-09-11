import React from 'react';

function Header() {
    return(
        <header className="header">
          <div className="header__title">
            <p className="header__logo">Thaipure</p>
            <p className="header__about">Прямые поставки сертифицированного кокосового масла от производителя</p>
            <button type="button" className="header__button" />
          </div>
          <div className="header__contact">
            <p className="header__phone">+7 (999) 777-88-99</p>
            <a href="#" className="header__link">Заказать звонок</a>
          </div>
      </header>
    );
}

export default Header;