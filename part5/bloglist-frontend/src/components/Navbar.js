import React, { useState } from "react";

const Navbar = userinfo => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark">
      <a className="navbar-brand" href="goog.com">
        Blogs Application
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="goog.com">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="goog.com">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="goog.com">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="goog.com"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
