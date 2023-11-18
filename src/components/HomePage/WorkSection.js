import React from 'react';

const WorkSection = () => {
    return (
        <>
           <>
  <div className="container-xxl py-60 overflow-hidden overflow-xxl-visible">
    <div className="row">
      <div className="col-12 col-lg-6 col-xxl-5 order-2 order-lg-1">
        <div className="d-grid gap-12 w-md-75 w-lg-100">
          <div className="heading-text-1 text-primary">How it works</div>
          <h2 className="heading-section-1 text-dark mb-0">
            Start find a job you love with us easily
          </h2>
        </div>
        {/* /.heading-section */}
        <div
          className="accordion accordion-number mt-43"
          id="accordion-how-it-works"
        >
          <div className="accordion-item">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div className="position-relative d-flex w-100">
                <div className="accordion-number bg-blue-violet bg-opacity-10 text-blue-violet">
                  1
                </div>
                <div className="accordion-content">
                  <h2 className="accordion-header" id="headingOne">
                    Complete Profile
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordion-how-it-works"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-arrow">
                <img
                  src="./assets/icons/chevron-down.svg"
                  className="svg-inject svg-icon"
                  alt=""
                />
              </div>
            </button>
          </div>
          {/* /.accordion-item */}
          <div className="accordion-item">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <div className="position-relative d-flex w-100">
                <div className="accordion-number bg-persian-blue bg-opacity-10 text-persian-blue">
                  2
                </div>
                <div className="accordion-content">
                  <h2 className="accordion-header" id="headingTwo">
                    Search Vacancies
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordion-how-it-works"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-arrow">
                <img
                  src="./assets/icons/chevron-down.svg"
                  className="svg-inject svg-icon"
                  alt=""
                />
              </div>
            </button>
          </div>
          {/* /.accordion-item */}
          <div className="accordion-item">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              <div className="position-relative d-flex w-100">
                <div className="accordion-number bg-ufo-green bg-opacity-10 text-ufo-green">
                  3
                </div>
                <div className="accordion-content">
                  <h2 className="accordion-header" id="headingThree">
                    Apply Jobs
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordion-how-it-works"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-arrow">
                <img
                  src="./assets/icons/chevron-down.svg"
                  className="svg-inject svg-icon"
                  alt=""
                />
              </div>
            </button>
          </div>
          {/* /.accordion-item */}
        </div>
        {/* /.accordion-number-component */}
      </div>
      {/* /.col */}
      <div className="col-12 col-lg-6 offset-xxl-1 d-flex align-items-end mb-34 mb-lg-0 order-1 order-lg-2">
        <div className="position-relative">
          <img
            src="./assets/how-it-work-image.png"
            className="how-it-work-image-img rounded-40"
            alt=""
          />
          <img
            src="./assets/pages/index/how-it-work/figure-1.svg"
            className="svg-inject position-absolute how-it-work-figure-1"
            alt=""
          />
          <img
            src="./assets/pages/index/how-it-work/figure-2.svg"
            className="svg-inject position-absolute how-it-work-figure-2"
            alt=""
          />
          <img
            src="./assets/pages/index/how-it-work/figure-3.svg"
            className="svg-inject position-absolute how-it-work-figure-3"
            alt=""
          />
        </div>
      </div>
      {/* /.col */}
    </div>
    {/* /.row */}
  </div>
  <div className="mt-xl-43" />
</>
 
        </>
    );
};

export default WorkSection;