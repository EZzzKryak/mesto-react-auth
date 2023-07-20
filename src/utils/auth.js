class Auth {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  registerUser({ email, password }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        return res;
      })
      .catch(err => console.log(err));
  }

  authorizeUser({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email, 
        password,
      })
    })
    .then((res => res.json()))
    .then((data) => {
      if (data.token){
        localStorage.setItem('jwt', data.token);
        return data;
      }
    })
    .catch(err => console.log(err))
  }

  getContent(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(res => res.json())
    .then(data => {
      return data})
  }
}

const auth = new Auth("https://auth.nomoreparties.co");

export default auth;
