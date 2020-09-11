import React from 'react';

function ShowcaseItem(props) {
    return(
        <li className="showcase__item">
            <h3 className="showcase__item-title">{props.title}</h3>
            <img className="showcase__icon" src={props.img} />
            <p className="showcase__item-subtitle">{props.subtitle}</p>
            <p className="showcase__price">{props.price}</p>
            <button type="button" className="showcase__button">Заказать</button>
        </li>
    );
}

export default ShowcaseItem;