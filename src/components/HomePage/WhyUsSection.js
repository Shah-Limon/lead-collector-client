import React from "react";

const WhyUsSection = () => {
  return (
    <>
      <div className="container-xxl py-60">
        <div className="d-grid w-md-50 w-xl-34 mb-60 mx-auto gap-12">
          <h2 className="heading-section-3 text-dark text-center mb-0">
            Why Choose Us
          </h2>
          <div className="heading-text-2 lh-base text-dark text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </div>
        </div>
        {/* /.heading-section */}
        <div className="row w-xl-85 mx-auto">
          <div className="col-12 col-md-6 col-lg-4 my-12">
            <div className="card card-icon">
              <div className="card-box-icon bg-outrageous-orange text-white">
                <img
                  src="./assets/icons/compas.svg"
                  className="svg-inject svg-icon"
                  alt=""
                />
              </div>
              <h5 className="card-title">Trusted</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            {/* /.card-icon-component */}
          </div>
          {/* /.col */}
          <div className="col-12 col-md-6 col-lg-4 my-12">
            <div className="card card-icon">
              <div className="card-box-icon bg-medium-orchid text-white">
                <img
                  src="./assets/icons/compas.svg"
                  className="svg-inject svg-icon"
                  alt=""
                />
              </div>
              <h5 className="card-title">Easy to Use</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            {/* /.card-icon-component */}
          </div>
          {/* /.col */}
          <div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-0 my-12">
            <div className="card card-icon">
              <div className="card-box-icon bg-picton-blue text-white">
                <img
                  src="./assets/icons/compas.svg"
                  className="svg-inject svg-icon"
                  alt=""
                />
              </div>
              <h5 className="card-title">Faster</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            {/* /.card-icon-component */}
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
      </div>
      <div className="mt-xl-43" />
    </>
  );
};

export default WhyUsSection;
