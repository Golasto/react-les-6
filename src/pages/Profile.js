import React, { useContext } from 'react';
import { AutContext } from '../components/AuthContext';
import { Link, Navigate } from 'react-router-dom';

function Profile() {
  const value = useContext(AutContext);

  if (value.auth.isAuth) {
    return (
      <>
        <h1>Profielpagina</h1>
        <section>
          <h2>Gegevens</h2>
          <p><strong>Gebruikersnaam:</strong> {value.auth.username} </p>
          <p><strong>Email:</strong> {value.auth.email} </p>
        </section>
        <section>
          <h2>Strikt geheime profiel-content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
        </section>
        <p>Terug naar de <Link to="/">Homepagina</Link></p>
      </>
    );
  }

  return <Navigate to='/signin' replace />
}

export default Profile;