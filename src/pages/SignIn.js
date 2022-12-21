import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AutContext } from '../components/AuthContext';

function SignIn() {
  const value = useContext(AutContext);

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={value.logIn}>
        <input id="username" type="text" placeholder="username" required />
        <input id="email" type="email" placeholder="email" required />
        <input type="password" placeholder="password" required />
        <button>Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;