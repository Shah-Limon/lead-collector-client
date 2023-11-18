import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer bg-black">
        <div className="container-xxl">
          <div className="row py-25 py-lg-43 py-xl-80 align-items-md-center">
            <div className="col-12 col-md-6">
              <h2 className="heading-section-2 text-white mb-0">
                Don't miss our weekly updates about freelancer career
              </h2>
              {/* /.newsletter-heading */}
            </div>
            {/* /.col */}
            <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mt-25 mt-md-0">
              <form className="ms-auto" action="#">
                <div className="form-btn-inner form-newsletter rounded-pill">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Enter your email address..."
                  />
                  <button
                    className="btn btn-accent text-white text-uppercase fw-semiBold py-12 px-20 px-lg-34 shadow-none"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              {/* /.newsletter-form */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          <div className="row py-20 py-xl-80">
            <div className="col-12 col-xl-4 footer-widget about">
              <div className="footer-brand">
                <img src="./assets/logo-footer.svg" alt="logo" />
              </div>
              <p className="footer-description mt-34">
                Ziro is a Freelance Landing Website lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud
              </p>
              <ul className="social-btn-group mt-34">
                <li className="social-item">
                  <a className="social-link" href="#">
                    <img
                      src="./assets/icons/facebook-f.svg"
                      className="svg-inject svg-icon"
                      alt=""
                    />
                  </a>
                </li>
                <li className="social-item">
                  <a className="social-link" href="#">
                    <img
                      src="./assets/icons/twitter.svg"
                      className="svg-inject svg-icon"
                      alt=""
                    />
                  </a>
                </li>
                <li className="social-item">
                  <a className="social-link" href="#">
                    <img
                      src="./assets/icons/youtube.svg"
                      className="svg-inject svg-icon"
                      alt=""
                    />
                  </a>
                </li>
                <li className="social-item">
                  <a className="social-link" href="#">
                    <img
                      src="./assets/icons/linkedin.svg"
                      className="svg-inject svg-icon"
                      alt=""
                    />
                  </a>
                </li>
                <li className="social-item">
                  <a className="social-link" href="#">
                    <img
                      src="./assets/icons/instagram.svg"
                      className="svg-inject svg-icon"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
              {/* /.social-btn-component */}
            </div>
            {/* /.col */}
            <div className="col-12 col-lg-4 col-xl footer-widget link-list mt-34 mt-xl-0">
              <h6 className="footer-title">Ziro</h6>
              <ul className="footer-link-list">
                <li className="link-item">
                  <a className="link" href="#">
                    Why Ziro
                  </a>
                </li>
                <li className="link-item">
                  <a className="link" href="#">
                    Enterprise
                  </a>
                </li>
                <li className="link-item">
                  <a className="link" href="#">
                    Customer Story
                  </a>
                </li>
                <li className="link-item">
                  <a className="link" href="#">
                    Security
                  </a>
                </li>
                <li className="link-item">
                  <a className="link" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            {/* /.col */}
            <div className="col-12 col-lg-4 col-xl footer-widget link-list mt-34 mt-xl-0">
              <h6 className="footer-title">Resources</h6>
              <ul className="footer-link-list">
                <li className="link-item">
                  <a className="link" href="#">
                    Download
                  </a>
                </li>
                <li className="link-item">
                  <a className="link" href="#">
                    Help Center
                  </a>
                </li>
                <li className="link-item">
                  <a className="link" href="#">
                    Events
                  </a>
                </li>
                <li className="link-item">
                  <a className="link" href="#">
                    Guides
                  </a>
                </li>
                <li className="link-item">
                  <a className="link" href="#">
                    Partner
                  </a>
                </li>
                <li className="link-item">
                  <a className="link" href="#">
                    Directories
                  </a>
                </li>
              </ul>
            </div>
            {/* /.col */}
            <div className="col-12 col-lg-4 col-xl footer-widget link-list mt-34 mt-xl-0">
              <h6 className="footer-title">Company</h6>
              <ul className="footer-link-list">
                <li className="link-item">
                  <a className="link" href="#">
                    About us
                  </a>
                </li>
                <li className="link-item">
                  <a className="link" href="#">
                    Contact us
                  </a>
                </li>
                <li className="link-item">
                  <a className="link" href="#">
                    Products
                  </a>
                </li>
                <li className="link-item">
                  <a className="link" href="#">
                    Login
                  </a>
                </li>
                <li className="link-item">
                  <a className="link" href="#">
                    Sign Up
                  </a>
                </li>
                <li className="link-item">
                  <a className="link" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            {/* /.col */}
            <div className="col-12 col-xl-3 footer-widget link-list _icon mt-34 mt-xl-0">
              <h6 className="footer-title">Get in Touch with Us</h6>
              <ul className="footer-link-list _icon">
                <li className="link-item">
                  <img
                    src="./assets/icons/mark-stroke.svg"
                    className="svg-inject svg-icon"
                    alt=""
                  />
                  <a className="link" href="#">
                    <span>
                      832 Thompson Drive, San Fransisco CA 94107, United States
                    </span>
                  </a>
                </li>
                <li className="link-item">
                  <img
                    src="./assets/icons/phone-stroke.svg"
                    className="svg-inject svg-icon"
                    alt=""
                  />
                  <a className="link" href="#">
                    <span>+123 345123 556</span>
                  </a>
                </li>
                <li className="link-item">
                  <img
                    src="./assets/icons/envelope-stroke.svg"
                    className="svg-inject svg-icon"
                    alt=""
                  />
                  <a className="link" href="#">
                    <span>support@ziro.id</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
        <div className="border border-arsenic border-end-0 border-bottom-0 border-start-0">
          <div className="container-xxl d-grid d-lg-flex gap-12 gap-xl-0 justify-content-lg-between py-25">
            <div className="fs-14 text-white text-center">
              Ziro Freelancer Landing Website - © 2020 All Rights Reserved
            </div>
            <div className="fs-14 text-white text-center">
              Made with ♥ by Peterdraw
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
