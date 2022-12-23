import React, { useContext } from 'react';
import logo from '../assets/banana-01.png';
import { Link, useNavigate } from 'react-router-dom';
import { AutContext } from '../context/AuthContext';

function NavBar() {
  const navigate = useNavigate();
  const value = useContext(AutContext);

  return (
      <nav>
        <Link to="/">
        <span className="logo-container">
          <img src={logo} alt="logo" />
          <h3>
            Banana Security
          </h3>
        </span>
        </Link>
        {value.auth.isAuth === false &&
            <div>
              <button
                  type="button"
                  onClick={() => navigate('/signin')}
              >
                Log in
              </button>
              <button
                  type="button"
                  onClick={() => navigate('/signup')}
              >
                Registreren
              </button>
            </div>
        }
        {value.auth.isAuth === true &&
            <div>
              <button
                  type="button"
                  onClick={value.logOut}
              >
                Log out
              </button>
            </div>
        }
      </nav>
  );
}
export default NavBar;