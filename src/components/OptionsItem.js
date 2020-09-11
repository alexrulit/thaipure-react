import React from 'react';

function OptionsItem(props) {
    return(
        <li className="options__item">
            <img className="options__icon" src={props.img} />
            <div className="options__item-container">
                <h3 className="options__item-title">{props.title}</h3>
                <p className="options__item-subtitle">{props.text}</p>
            </div>
        </li>
    );
}

export default OptionsItem;