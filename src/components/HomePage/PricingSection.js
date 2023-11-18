import React from 'react';

const PricingSection = () => {
    return (
        <>
        <div className="container-xxl py-60">
          <div className="d-grid gap-12 w-md-50 w-xl-34 mb-60 mx-auto">
            <h2 className="heading-section-3 text-dark text-center mb-0">
              Pricing Plan
            </h2>
            <div className="heading-text-2 lh-base text-dark text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua
            </div>
          </div>
          {/* /.heading-section */}
          <div className="row w-xl-90 w-xxl-75 mx-auto">
            <div className="col-12 col-md-6 col-xl-4 my-12">
              <div className="pricing-card">
                <h4 className="pricing-title">Free</h4>
                <div className="pricing-price">
                  <div className="pricing-price-inner">
                    <span className="pricing-price-currency">$</span>0
                  </div>
                  <div className="pricing-price-period">per month</div>
                </div>
                <ul className="pricing-detail">
                  <li className="pricing-detail-item">
                    <div className="pricing-detail-icon">
                      <img
                        src="./assets/icons/check-circle.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="pricing-detail-text">
                      Lorem ipsum dolor sit ame
                    </div>
                  </li>
                  <li className="pricing-detail-item">
                    <div className="pricing-detail-icon">
                      <img
                        src="./assets/icons/check-circle.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="pricing-detail-text">
                      Consectetur adipiscing elit, sed Do
                    </div>
                  </li>
                  <li className="pricing-detail-item">
                    <div className="pricing-detail-icon">
                      <img
                        src="./assets/icons/check-circle.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="pricing-detail-text">
                      eiusmod tempor incididunt
                    </div>
                  </li>
                </ul>
                <a
                  className="btn btn-apply fw-semiBold py-12 px-43 rounded-pill"
                  href="/applicationform.html"
                >
                  Learn More
                </a>
              </div>
              {/* /.pricing-card-component */}
            </div>
            {/* /.col */}
            <div className="col-12 col-md-6 col-xl-4 my-12">
              <div className="pricing-card">
                <h4 className="pricing-title">Premium</h4>
                <div className="pricing-price">
                  <div className="pricing-price-inner">
                    <span className="pricing-price-currency">$</span>
                    175
                  </div>
                  <div className="pricing-price-period">per month</div>
                </div>
                <ul className="pricing-detail">
                  <li className="pricing-detail-item">
                    <div className="pricing-detail-icon">
                      <img
                        src="./assets/icons/check-circle.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="pricing-detail-text">
                      Lorem ipsum dolor sit ame
                    </div>
                  </li>
                  <li className="pricing-detail-item">
                    <div className="pricing-detail-icon">
                      <img
                        src="./assets/icons/check-circle.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="pricing-detail-text">
                      Consectetur adipiscing elit, sed Do
                    </div>
                  </li>
                  <li className="pricing-detail-item">
                    <div className="pricing-detail-icon">
                      <img
                        src="./assets/icons/check-circle.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="pricing-detail-text">
                      eiusmod tempor incididunt
                    </div>
                  </li>
                </ul>
                <a
                  className="btn btn-apply fw-semiBold py-12 px-43 rounded-pill"
                  href="/applicationform.html"
                >
                  Learn More
                </a>
              </div>
              {/* /.pricing-card-component */}
            </div>
            {/* /.col */}
            <div className="col-12 col-md-6 offset-md-3 col-xl-4 offset-xl-0 my-12">
              <div className="pricing-card">
                <h4 className="pricing-title">Platinum</h4>
                <div className="pricing-price">
                  <div className="pricing-price-inner">
                    <span className="pricing-price-currency">$</span>
                    500
                  </div>
                  <div className="pricing-price-period">per month</div>
                </div>
                <ul className="pricing-detail">
                  <li className="pricing-detail-item">
                    <div className="pricing-detail-icon">
                      <img
                        src="./assets/icons/check-circle.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="pricing-detail-text">
                      Lorem ipsum dolor sit ame
                    </div>
                  </li>
                  <li className="pricing-detail-item">
                    <div className="pricing-detail-icon">
                      <img
                        src="./assets/icons/check-circle.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="pricing-detail-text">
                      Consectetur adipiscing elit, sed Do
                    </div>
                  </li>
                  <li className="pricing-detail-item">
                    <div className="pricing-detail-icon">
                      <img
                        src="./assets/icons/check-circle.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="pricing-detail-text">
                      eiusmod tempor incididunt
                    </div>
                  </li>
                </ul>
                <a
                  className="btn btn-apply fw-semiBold py-12 px-43 rounded-pill"
                  href="/applicationform.html"
                >
                  Learn More
                </a>
              </div>
              {/* /.pricing-card-component */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        <div className="mt-xl-43" />
      </>
      
    );
};

export default PricingSection;