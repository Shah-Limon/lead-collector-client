import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-xl bg-ghost-white">
        <div className="container-xxl justify-content-md-start">
          <Link className="navbar-brand" to="/">
            <img src="./assets/logo.svg" alt="" />
          </Link>
          {/* /.navbar-brand */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img
              src="./assets/icons/bars.svg"
              className="svg-inject svg-icon"
              alt=""
            />
          </button>
          {/* /.navbar-toggler-mobile */}
          <div className="d-none d-md-flex d-xl-none ms-auto">
            <a
              className="btn btn-alice-blue text-dark fw-semiBold py-12 px-34 me-12 rounded-pill"
              href="/applicationform.html"
              role="button"
            >
              Log In
            </a>
            <a
              className="btn btn-primary fw-semiBold py-12 px-43 rounded-pill"
              href="/applicationform.html"
              role="button"
            >
              Sign Up
            </a>
          </div>
          {/* /.btn-login and btn-signup mobile */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="d-grid d-xl-flex align-items-xl-center pb-15 pb-xl-0 w-100 gap-20 gap-xl-0">
              <ul className="navbar-nav mx-xl-auto order-2 order-xl-1">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#pricing-section">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/joblist">
                    Job List
                  </Link>
                </li>
              </ul>
              {/* /.navbar-nav */}
              <form
                className="order-1 order-xl-2"
                role="search"
                action="#"
                method="get"
              >
                <div className="form-search">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search here..."
                    aria-label="Search"
                  />
                </div>
              </form>
              {/* /.form-search */}
              <div className="d-grid d-md-none d-xl-flex gap-15 gap-xl-0 order-3">
                <a
                  className="btn btn-alice-blue text-dark fw-semiBold py-12 px-xl-34 ms-xl-12 rounded-pill"
                  href="/applicationform.html"
                  role="button"
                >
                  Log In
                </a>
                <a
                  className="btn btn-primary fw-semiBold py-12 px-xl-43 ms-xl-12 rounded-pill"
                  href="/applicationform.html"
                  role="button"
                >
                  Sign Up
                </a>
              </div>
              {/* /.btn-login and btn-sign-up desktop */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
