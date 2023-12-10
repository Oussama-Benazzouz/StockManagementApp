import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark p-3">
          <div>
            <Link to={"/"} className="navbar-brand m-5">
              Parts Management System
            </Link>
          </div>
          <div className="navbar-nav ml-auto">
            <Link to="/parts" className="nav-item nav-link">
              Parts
            </Link>
            <Link to="/clients" className="nav-item nav-link">
              Clients
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
