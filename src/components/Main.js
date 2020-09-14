import React from 'react';
import Offer from './Offer'
import Advantages from './Advantages';
import Energy from './Energy';
import Lead from './Lead';
import Showcase from './Showcase';
import Options from './Options';
import Feedback from './Feedback';
import Order from './Order';

function Main(props) {
    return(
        <main className="content">
            <Offer openOrder={props.openOrder} />
            <Advantages />
            <Energy />
            <Lead />
            <Showcase openOrder={props.openOrder} />
            <Options />
            <Feedback />
            <Order />
        </main>
    );
}

export default Main;