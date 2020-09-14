class Api {
    constructor(endpoint, contentType, token) {
        this._endpoint = endpoint;
        this._contentType = contentType;
        this._token = token;
    }

    newOrder(phone, name) {
        this._headers = new Headers({ 
           'charset': 'UTF-8',
            'X-API-KEY': this._token,
            'Content-type': this._contentType
        });

        this._requestInit = { 
            method: 'POST',
            headers: this._headers
        };
        this._order = JSON.stringify({
            firstName: name,
            phone: phone
        });
        return fetch(`${this._endpoint}/orders/create?order=${encodeURIComponent(this._order)}`, this._requestInit)
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          });
    }
}

const api = new Api('https://thaipure.retailcrm.ru/api/v5', 'application/x-www-form-urlencoded', 'uUmBB7n7weEZXmfRJJS7c5bJ31pkhmHh');

export default api;