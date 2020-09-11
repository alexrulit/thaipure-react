import React from 'react';

function OfferItem(props) {
    return(
        <li className="offer__advantage">
            <img className="offer__advantage-icon" src={props.img} />
            <p className="offer__advantage-text">{props.text}</p>
        </li>
    );
}

export default OfferItem;