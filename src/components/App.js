import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupOrder from './PopupOrder';
import api from '../utils/api';

function App() {
  const [openOrder, setOrder] = useState(false);
  const [openCall, setCall] = useState(false);
  const closeOrderModal = () => setOrder(false);
  const openOrderModal = () => setOrder(true);
  const closeCallModal = () => setCall(false);
  const openCallModal = () => setCall(true);

  const handleSubmit = (name, phone) => {
    api.newOrder(phone, name)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      closeOrderModal();
      closeCallModal();
    })
  }

  return (
    <div className="page">
     <Header openCall={openCallModal} />
     <Main openOrder={openOrderModal} />
     <Footer openCall={openCallModal} />
     <PopupOrder open={openOrder} onSubmit={handleSubmit} onClose={closeOrderModal}>Закажи кокосовое масло Thai Pure прямо сейчас</PopupOrder>
     <PopupOrder open={openCall} onSubmit={handleSubmit} onClose={closeCallModal}>Мы сами тебе позвоним</PopupOrder>
    </div>
  );
}

export default App;
