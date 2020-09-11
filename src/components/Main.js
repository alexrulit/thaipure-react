import React from 'react';
import Offer from './Offer'
import Advantages from './Advantages';
import Energy from './Energy';
import Lead from './Lead';
import Showcase from './Showcase';
import Options from './Options';
import Feedback from './Feedback';
import Order from './Order';

function Main() {
    return(
        <main className="content">
            <Offer />
            <Advantages />
            <Energy />
            <Lead />
            <Showcase />
            <Options />
            <Feedback />
            <Order />
        </main>
    );
}

export default Main;