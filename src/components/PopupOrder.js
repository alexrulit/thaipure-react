import React from 'react';
import Popup from 'reactjs-popup';
import PopupIcon from '../images/popup-icon.png';

function PopupOrder(props) {

    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit(name, phone);
    }

    return(
        <Popup open={props.open} closeOnDocumentClick onClose={props.onClose} >
            <div className="popup">
                <a className="popup__close" onClick={props.onClose} />
                <h2 className="popup__title">{props.children}</h2>
                <p className="popup__subtitle">Оставь свой контактный номер телефона, и мы перезвоним</p>
                <form action="#" className="popup__form" onSubmit={handleSubmit}>
                    <input className="popup__input" name="name" onChange={handleChangeName} placeholder="Ваше имя" />
                    <input className="popup__input" name="phone" onChange={handleChangePhone} placeholder="Номер телефона" />
                    <button type="submit" className="popup__button">Заказать</button>
                    <p className="popup__accept">Нажав&nbsp;на&nbsp;кнопку&nbsp;вы&nbsp;принимаете&nbsp;условия <a href="#" className="popup__form-link">Политики&nbsp;конфиденциальности</a> и даете сове согласие на обработку персональных данных</p>
                </form>
                <img className="popup__icon" src={PopupIcon} />
            </div>
        </Popup>
    );
}

export default PopupOrder;