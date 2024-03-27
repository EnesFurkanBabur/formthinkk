import React from 'react';

function Register() {
  return (
    <div>
      <h1>Kayıt Ol</h1>
      <form action="/register" method="POST">
        <input type="text" name="username" placeholder="Kullanıcı Adı" required />
        <input type="email" name="email" placeholder="E-posta" required />
        <input type="password" name="password" placeholder="Şifre" required />
        <button type="submit">Kayıt Ol</button>
      </form>
    </div>
  );
}

export default Register;
