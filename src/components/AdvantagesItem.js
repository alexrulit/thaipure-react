import React from 'react';

function AdvantagesItem(props) {
    return(
        <li className="advantages__item">
            <img className="advantages__icon" src={props.img} />
            <p className="advantages__text">{props.text}</p>
        </li>
    );
}

export default AdvantagesItem;