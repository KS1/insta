import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-main" to="/">
            <h1 className="m-0 meet-font">Meet ME</h1>
          </Link>
          <p className="m-0 text-light">Share the things you love as a Brand Ambassador</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="text-main" to="/me" style={{ cursor: 'pointer' }}>
                {Auth.getProfile().data.username}
              </Link>
              <p className="text-main" style={{ cursor: 'pointer' }} onClick={logout}>
                Logout
              </p>
            </>
          ) : (
            <>
              {/* <Link className="btn mainColor btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn subColor  btn-lg btn-light m-2" to="/signup">
                Signup
              </Link> */}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
