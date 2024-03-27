import React from 'react';

function Login() {
  return (
    <div>
      <h1>Giriş Yap</h1>
      <form action="/login" method="POST">
        <input type="email" name="email" placeholder="E-posta" required />
        <input type="password" name="password" placeholder="Şifre" required />
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
}

export default Login;
