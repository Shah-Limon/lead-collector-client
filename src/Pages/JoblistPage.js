import React from "react";

const JoblistPage = () => {
  return (
    <>
      <main className="main">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 col-lg-6 my-34 my-lg-80 my-xl-120 my-xxl-180 order-2 order-lg-1">
              <h1 className="heading-header-1 mb-0">
                Find your dream jobs through{" "}
                <span className="text-primary">Ziro</span> easily
              </h1>
              {/* /.heading-header */}
              <form
                className="ms-auto mt-60"
                role="search"
                action="#"
                method="get"
              >
                <div className="form-btn-inner shadow-2 rounded-pill">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search here..."
                  />
                  <button
                    className="btn btn-primary fw-semiBold py-12 px-20 px-lg-34 flex-nofill shadow-none"
                    type="submit"
                  >
                    Search Job
                  </button>
                </div>
              </form>
              {/* /.search-job-form */}
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start mt-34 gap-12">
                <a
                  href="#"
                  className="btn btn-suggestion fw-medium rounded-pill shadow-none"
                >
                  Web Dev
                </a>
                <a
                  href="#"
                  className="btn btn-suggestion fw-medium rounded-pill shadow-none"
                >
                  Mobile Dev
                </a>
                <a
                  href="#"
                  className="btn btn-suggestion fw-medium rounded-pill shadow-none"
                >
                  Design
                </a>
                <a
                  href="#"
                  className="btn btn-suggestion fw-medium rounded-pill shadow-none"
                >
                  Writing
                </a>
                <a
                  href="#"
                  className="d-none d-md-inline-block btn btn-suggestion fw-medium rounded-pill shadow-none"
                >
                  Admin Support
                </a>
                <a
                  href="#"
                  className="d-none d-md-inline-block btn btn-suggestion fw-medium rounded-pill shadow-none"
                >
                  Customer Service
                </a>
                <a
                  href="#"
                  className="d-none d-md-inline-blockbtn btn-suggestion fw-medium rounded-pill shadow-none"
                >
                  Marketing
                </a>
                <a
                  href="#"
                  className="d-none d-md-inline-block btn btn-suggestion fw-medium rounded-pill shadow-none"
                >
                  Accounting
                </a>
                <a
                  href="#"
                  className="btn btn-suggestion fw-medium rounded-pill shadow-none"
                >
                  View all categories
                </a>
              </div>
              {/* /.search-suggestion */}
            </div>
            {/* /.col */}
            <div className="col-12 col-lg-6 order-1 order-lg-2">
              <div className="position-relative h-lg-100">
                <img
                  src="./assets/pages/joblist/header/heroImage.png"
                  className="hero-image-img"
                  alt=""
                />
              </div>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
        {/* = /. Header Section = */}
        <div className="mt-43" />
        {/* = /. Gap Section = */}
        <div className="container-xxl">
          <div className="d-flex flex-column flex-xl-row align-items-xl-center gap-20">
            <h4 className="heading-section-4 text-dark mb-0">
              Showing 34 Jobs
            </h4>
            {/* /.heading-section */}
            <div className="d-flex flex-column flex-md-row align-items-md-center w-100 w-xl-auto ms-auto gap-15 gap-md-34">
              <div className="d-flex gap-43 py-15 overflow-auto">
                <div className="d-flex gap-25">
                  <div className="checkbox-type type-1">
                    <input
                      className="checkbox-type-input"
                      type="checkbox"
                      defaultValue=""
                      id="checkFulltime"
                    />
                    <label
                      className="checkbox-type-label"
                      htmlFor="checkFulltime"
                    >
                      <div className="checkbox-type-icon">
                        <img
                          src="./assets/icons/check-circle-stroke.svg"
                          className="svg-inject"
                          alt=""
                        />
                      </div>
                      <div className="checkbox-type-text fw-semiBold">
                        Fulltime
                      </div>
                    </label>
                  </div>
                  {/* /.checkbox-filter */}
                  <div className="checkbox-type type-1">
                    <input
                      className="checkbox-type-input"
                      type="checkbox"
                      defaultValue=""
                      id="checkFreelance"
                      defaultChecked=""
                    />
                    <label
                      className="checkbox-type-label"
                      htmlFor="checkFreelance"
                    >
                      <div className="checkbox-type-icon">
                        <img
                          src="./assets/icons/check-circle-stroke.svg"
                          className="svg-inject"
                          alt=""
                        />
                      </div>
                      <div className="checkbox-type-text fw-semiBold">
                        Freelance
                      </div>
                    </label>
                  </div>
                  {/* /.checkbox-filter */}
                </div>
                <div className="d-flex gap-25">
                  <div className="checkbox-switch checkbox-switch-end">
                    <input
                      className="checkbox-switch-input"
                      type="checkbox"
                      role="switch"
                      id="swicthCheckDetails"
                    />
                    <label
                      className="checkbox-switch-label"
                      htmlFor="swicthCheckDetails"
                    >
                      <div className="checkbox-switch" />
                      <div className="checkbox-switch-text fw-semiBold">
                        Details
                      </div>
                    </label>
                  </div>
                  {/* /.checkbox-swicth-fillter */}
                  <div className="checkbox-switch checkbox-switch-end">
                    <input
                      className="checkbox-switch-input"
                      type="checkbox"
                      role="switch"
                      id="switchCheckSalary"
                      defaultChecked=""
                    />
                    <label
                      className="checkbox-switch-label"
                      htmlFor="switchCheckSalary"
                    >
                      <div className="checkbox-switch" />
                      <div className="checkbox-switch-text fw-semiBold">
                        Salary
                      </div>
                    </label>
                  </div>
                  {/* /.checkbox-swicth-fillter */}
                </div>
              </div>
              <div className="d-flex gap-15 ms-auto">
                <button className="btn d-flex align-items-center fw-medium text-dark py-12 px-25 border border-1 border-platinum rounded-pill shadow-none">
                  Newest
                  <img
                    src="./assets/icons/chevron-down.svg"
                    className="svg-inject text-primary is-20 ms-15"
                    alt=""
                  />
                </button>
                {/* /.btn-newest */}
                <button
                  className="btn btn-rounded border border-1 border-platinum shadow-none"
                  role="button"
                >
                  <img
                    src="./assets/icons/filter.svg"
                    className="svg-inject svg-icon text-primary"
                    alt=""
                  />
                </button>
                {/* /.btn-filter */}
              </div>
            </div>
          </div>
          <div className="d-grid mt-60 gap-34">
            <div className="job-card-harizontal">
              <button
                className="btn btn-rounded btn-white position-absolute d-xl-none top-100 start-50 p-10 translate-middle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#jobInfoCardCollapse"
                aria-expanded="false"
                aria-controls="jobInfoCardCollapse"
              >
                <img
                  src="./assets/icons/chevron-down.svg"
                  className="svg-inject text-primary is-16"
                  alt=""
                />
              </button>
              <div className="job-info">
                <div className="job-image">
                  <img src="./assets/job-logo-image-80x80.png" alt="" />
                </div>
                <div className="job-info-inner">
                  <h5 className="job-title">
                    <a href="/jobdetail.html">Senior UX Designer</a>
                  </h5>
                  <div className="job-author">
                    <a href="#">Highspeed Studios</a>
                  </div>
                </div>
              </div>
              <div
                className="job-info-card-collapse collapse"
                id="jobInfoCardCollapse"
              >
                <div className="job-info-card">
                  <div className="info-card">
                    <div className="info-card-icon bg-ufo-green-100 rounded-pill">
                      <img
                        src="./assets/icons/sack-dollar.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="info-card-content">
                      <h6 className="info-card-title">$14,000 - $25,000</h6>
                      <div className="info-card-desc">Monthly Salary</div>
                    </div>
                  </div>
                  <div className="info-card">
                    <div className="info-card-icon bg-rajah rounded-pill">
                      <img
                        src="./assets/icons/mark.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="info-card-content">
                      <h6 className="info-card-title">London, England</h6>
                      <div className="info-card-desc">Location</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-action">
                <a
                  className="btn btn-apply flex-fill flex-md-nofill fw-semiBold py-12 px-43 rounded-pill"
                  href="/jobdetail.html"
                >
                  Apply Now
                </a>
                <button className="btn btn-rounded btn-book">
                  <img
                    src="./assets/icons/heart.svg"
                    className="svg-inject svg-icon is-20"
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* /.job-card-grid-harizontal-component */}
            <div className="job-card-harizontal">
              <button
                className="btn btn-rounded btn-white position-absolute d-xl-none top-100 start-50 p-10 translate-middle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#jobInfoCardCollapse2"
                aria-expanded="false"
                aria-controls="jobInfoCardCollapse2"
              >
                <img
                  src="./assets/icons/chevron-down.svg"
                  className="svg-inject text-primary is-16"
                  alt=""
                />
              </button>
              <div className="job-info">
                <div className="job-image">
                  <img src="./assets/job-logo-image-80x80.png" alt="" />
                </div>
                <div className="job-info-inner">
                  <h5 className="job-title">
                    <a href="/jobdetail.html">Intern UX Designer</a>
                  </h5>
                  <div className="job-author">
                    <a href="#">Maximoz Team</a>
                  </div>
                </div>
              </div>
              <div
                className="job-info-card-collapse collapse"
                id="jobInfoCardCollapse2"
              >
                <div className="job-info-card">
                  <div className="info-card">
                    <div className="info-card-icon bg-ufo-green-100 rounded-pill">
                      <img
                        src="./assets/icons/sack-dollar.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="info-card-content">
                      <h6 className="info-card-title">$500 - $1,000</h6>
                      <div className="info-card-desc">Monthly Salary</div>
                    </div>
                  </div>
                  <div className="info-card">
                    <div className="info-card-icon bg-rajah rounded-pill">
                      <img
                        src="./assets/icons/mark.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="info-card-content">
                      <h6 className="info-card-title">Manchester, England</h6>
                      <div className="info-card-desc">Location</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-action">
                <a
                  className="btn btn-apply flex-fill flex-md-nofill fw-semiBold py-12 px-43 rounded-pill"
                  href="/jobdetail.html"
                >
                  Apply Now
                </a>
                <button className="btn btn-rounded btn-book">
                  <img
                    src="./assets/icons/heart.svg"
                    className="svg-inject svg-icon is-20"
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* /.job-card-grid-harizontal-component */}
            <div className="job-card-harizontal">
              <button
                className="btn btn-rounded btn-white position-absolute d-xl-none top-100 start-50 p-10 translate-middle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#jobInfoCardCollapse3"
                aria-expanded="false"
                aria-controls="jobInfoCardCollapse3"
              >
                <img
                  src="./assets/icons/chevron-down.svg"
                  className="svg-inject text-primary is-16"
                  alt=""
                />
              </button>
              <div className="job-info">
                <div className="job-image">
                  <img src="./assets/job-logo-image-80x80.png" alt="" />
                </div>
                <div className="job-info-inner">
                  <h5 className="job-title">
                    <a href="/jobdetail.html">Junior UX Designer</a>
                  </h5>
                  <div className="job-author">
                    <a href="#">Vvibu Leu Boz Studios</a>
                  </div>
                </div>
              </div>
              <div
                className="job-info-card-collapse collapse"
                id="jobInfoCardCollapse3"
              >
                <div className="job-info-card">
                  <div className="info-card">
                    <div className="info-card-icon bg-ufo-green-100 rounded-pill">
                      <img
                        src="./assets/icons/sack-dollar.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="info-card-content">
                      <h6 className="info-card-title">$8,000 - $12,000</h6>
                      <div className="info-card-desc">Monthly Salary</div>
                    </div>
                  </div>
                  <div className="info-card">
                    <div className="info-card-icon bg-rajah rounded-pill">
                      <img
                        src="./assets/icons/mark.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="info-card-content">
                      <h6 className="info-card-title">Oxford, England</h6>
                      <div className="info-card-desc">Location</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-action">
                <a
                  className="btn btn-apply flex-fill flex-md-nofill fw-semiBold py-12 px-43 rounded-pill"
                  href="/jobdetail.html"
                >
                  Apply Now
                </a>
                <button className="btn btn-rounded btn-book">
                  <img
                    src="./assets/icons/heart.svg"
                    className="svg-inject svg-icon is-20"
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* /.job-card-grid-harizontal-component */}
            <div className="job-card-harizontal">
              <button
                className="btn btn-rounded btn-white position-absolute d-xl-none top-100 start-50 p-10 translate-middle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#jobInfoCardCollapse4"
                aria-expanded="false"
                aria-controls="jobInfoCardCollapse4"
              >
                <img
                  src="./assets/icons/chevron-down.svg"
                  className="svg-inject text-primary is-16"
                  alt=""
                />
              </button>
              <div className="job-info">
                <div className="job-image">
                  <img src="./assets/job-logo-image-80x80.png" alt="" />
                </div>
                <div className="job-info-inner">
                  <h5 className="job-title">
                    <a href="/jobdetail.html">Principal UX Designer</a>
                  </h5>
                  <div className="job-author">
                    <a href="#">Lowvoltages Team</a>
                  </div>
                </div>
              </div>
              <div
                className="job-info-card-collapse collapse"
                id="jobInfoCardCollapse4"
              >
                <div className="job-info-card">
                  <div className="info-card">
                    <div className="info-card-icon bg-ufo-green-100 rounded-pill">
                      <img
                        src="./assets/icons/sack-dollar.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="info-card-content">
                      <h6 className="info-card-title">$11,000 - $60,000</h6>
                      <div className="info-card-desc">Monthly Salary</div>
                    </div>
                  </div>
                  <div className="info-card">
                    <div className="info-card-icon bg-rajah rounded-pill">
                      <img
                        src="./assets/icons/mark.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="info-card-content">
                      <h6 className="info-card-title">London, England</h6>
                      <div className="info-card-desc">Location</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-action">
                <a
                  className="btn btn-apply flex-fill flex-md-nofill fw-semiBold py-12 px-43 rounded-pill"
                  href="/jobdetail.html"
                >
                  Apply Now
                </a>
                <button className="btn btn-rounded btn-book">
                  <img
                    src="./assets/icons/heart.svg"
                    className="svg-inject svg-icon is-20"
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* /.job-card-grid-harizontal-component */}
            <div className="job-card-harizontal">
              <button
                className="btn btn-rounded btn-white position-absolute d-xl-none top-100 start-50 p-10 translate-middle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#jobInfoCardCollapse5"
                aria-expanded="false"
                aria-controls="jobInfoCardCollapse5"
              >
                <img
                  src="./assets/icons/chevron-down.svg"
                  className="svg-inject text-primary is-16"
                  alt=""
                />
              </button>
              <div className="job-info">
                <div className="job-image">
                  <img src="./assets/job-logo-image-80x80.png" alt="" />
                </div>
                <div className="job-info-inner">
                  <h5 className="job-title">
                    <a href="/jobdetail.html">Senior UX Designer</a>
                  </h5>
                  <div className="job-author">
                    <a href="#">Highspeed Studios</a>
                  </div>
                </div>
              </div>
              <div
                className="job-info-card-collapse collapse"
                id="jobInfoCardCollapse5"
              >
                <div className="job-info-card">
                  <div className="info-card">
                    <div className="info-card-icon bg-ufo-green-100 rounded-pill">
                      <img
                        src="./assets/icons/sack-dollar.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="info-card-content">
                      <h6 className="info-card-title">$500 - $1,000</h6>
                      <div className="info-card-desc">Monthly Salary</div>
                    </div>
                  </div>
                  <div className="info-card">
                    <div className="info-card-icon bg-rajah rounded-pill">
                      <img
                        src="./assets/icons/mark.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="info-card-content">
                      <h6 className="info-card-title">London, England</h6>
                      <div className="info-card-desc">Location</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-action">
                <a
                  className="btn btn-apply flex-fill flex-md-nofill fw-semiBold py-12 px-43 rounded-pill"
                  href="/jobdetail.html"
                >
                  Apply Now
                </a>
                <button className="btn btn-rounded btn-book">
                  <img
                    src="./assets/icons/heart.svg"
                    className="svg-inject svg-icon is-20"
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* /.job-card-grid-harizontal-component */}
            <div className="job-card-harizontal">
              <button
                className="btn btn-rounded btn-white position-absolute d-xl-none top-100 start-50 p-10 translate-middle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#jobInfoCardCollapse6"
                aria-expanded="false"
                aria-controls="jobInfoCardCollapse6"
              >
                <img
                  src="./assets/icons/chevron-down.svg"
                  className="svg-inject text-primary is-16"
                  alt=""
                />
              </button>
              <div className="job-info">
                <div className="job-image">
                  <img src="./assets/job-logo-image-80x80.png" alt="" />
                </div>
                <div className="job-info-inner">
                  <h5 className="job-title">
                    <a href="/jobdetail.html">Principal UX Designer</a>
                  </h5>
                  <div className="job-author">
                    <a href="#">Lowvoltages Team</a>
                  </div>
                </div>
              </div>
              <div
                className="job-info-card-collapse collapse"
                id="jobInfoCardCollapse6"
              >
                <div className="job-info-card">
                  <div className="info-card">
                    <div className="info-card-icon bg-ufo-green-100 rounded-pill">
                      <img
                        src="./assets/icons/sack-dollar.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="info-card-content">
                      <h6 className="info-card-title">$11,000 - $60,000</h6>
                      <div className="info-card-desc">Monthly Salary</div>
                    </div>
                  </div>
                  <div className="info-card">
                    <div className="info-card-icon bg-rajah rounded-pill">
                      <img
                        src="./assets/icons/mark.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="info-card-content">
                      <h6 className="info-card-title">London, England</h6>
                      <div className="info-card-desc">Location</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-action">
                <a
                  className="btn btn-apply flex-fill flex-md-nofill fw-semiBold py-12 px-43 rounded-pill"
                  href="/jobdetail.html"
                >
                  Apply Now
                </a>
                <button className="btn btn-rounded btn-book">
                  <img
                    src="./assets/icons/heart.svg"
                    className="svg-inject svg-icon is-20"
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* /.job-card-grid-harizontal-component */}
            <div className="job-card-harizontal">
              <button
                className="btn btn-rounded btn-white position-absolute d-xl-none top-100 start-50 p-10 translate-middle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#jobInfoCardCollapse7"
                aria-expanded="false"
                aria-controls="jobInfoCardCollapse7"
              >
                <img
                  src="./assets/icons/chevron-down.svg"
                  className="svg-inject text-primary is-16"
                  alt=""
                />
              </button>
              <div className="job-info">
                <div className="job-image">
                  <img src="./assets/job-logo-image-80x80.png" alt="" />
                </div>
                <div className="job-info-inner">
                  <h5 className="job-title">
                    <a href="/jobdetail.html">Senior UX Designer</a>
                  </h5>
                  <div className="job-author">
                    <a href="#">Highspeed Studios</a>
                  </div>
                </div>
              </div>
              <div
                className="job-info-card-collapse collapse"
                id="jobInfoCardCollapse7"
              >
                <div className="job-info-card">
                  <div className="info-card">
                    <div className="info-card-icon bg-ufo-green-100 rounded-pill">
                      <img
                        src="./assets/icons/sack-dollar.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="info-card-content">
                      <h6 className="info-card-title">$500 - $1,000</h6>
                      <div className="info-card-desc">Monthly Salary</div>
                    </div>
                  </div>
                  <div className="info-card">
                    <div className="info-card-icon bg-rajah rounded-pill">
                      <img
                        src="./assets/icons/mark.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="info-card-content">
                      <h6 className="info-card-title">London, England</h6>
                      <div className="info-card-desc">Location</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-action">
                <a
                  className="btn btn-apply flex-fill flex-md-nofill fw-semiBold py-12 px-43 rounded-pill"
                  href="/jobdetail.html"
                >
                  Apply Now
                </a>
                <button className="btn btn-rounded btn-book">
                  <img
                    src="./assets/icons/heart.svg"
                    className="svg-inject svg-icon is-20"
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* /.job-card-grid-harizontal-component */}
            <div className="job-card-harizontal">
              <button
                className="btn btn-rounded btn-white position-absolute d-xl-none top-100 start-50 p-10 translate-middle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#jobInfoCardCollapse8"
                aria-expanded="false"
                aria-controls="jobInfoCardCollapse8"
              >
                <img
                  src="./assets/icons/chevron-down.svg"
                  className="svg-inject text-primary is-16"
                  alt=""
                />
              </button>
              <div className="job-info">
                <div className="job-image">
                  <img src="./assets/job-logo-image-80x80.png" alt="" />
                </div>
                <div className="job-info-inner">
                  <h5 className="job-title">
                    <a href="/jobdetail.html">Principal UX Designer</a>
                  </h5>
                  <div className="job-author">
                    <a href="#">Lowvoltages Team</a>
                  </div>
                </div>
              </div>
              <div
                className="job-info-card-collapse collapse"
                id="jobInfoCardCollapse8"
              >
                <div className="job-info-card">
                  <div className="info-card">
                    <div className="info-card-icon bg-ufo-green-100 rounded-pill">
                      <img
                        src="./assets/icons/sack-dollar.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="info-card-content">
                      <h6 className="info-card-title">$11,000 - $60,000</h6>
                      <div className="info-card-desc">Monthly Salary</div>
                    </div>
                  </div>
                  <div className="info-card">
                    <div className="info-card-icon bg-rajah rounded-pill">
                      <img
                        src="./assets/icons/mark.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="info-card-content">
                      <h6 className="info-card-title">London, England</h6>
                      <div className="info-card-desc">Location</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-action">
                <a
                  className="btn btn-apply flex-fill flex-md-nofill fw-semiBold py-12 px-43 rounded-pill"
                  href="/jobdetail.html"
                >
                  Apply Now
                </a>
                <button className="btn btn-rounded btn-book">
                  <img
                    src="./assets/icons/heart.svg"
                    className="svg-inject svg-icon is-20"
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* /.job-card-grid-harizontal-component */}
            <div className="job-card-harizontal">
              <button
                className="btn btn-rounded btn-white position-absolute d-xl-none top-100 start-50 p-10 translate-middle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#jobInfoCardCollapse9"
                aria-expanded="false"
                aria-controls="jobInfoCardCollapse9"
              >
                <img
                  src="./assets/icons/chevron-down.svg"
                  className="svg-inject text-primary is-16"
                  alt=""
                />
              </button>
              <div className="job-info">
                <div className="job-image">
                  <img src="./assets/job-logo-image-80x80.png" alt="" />
                </div>
                <div className="job-info-inner">
                  <h5 className="job-title">
                    <a href="/jobdetail.html">Senior UX Designer</a>
                  </h5>
                  <div className="job-author">
                    <a href="#">Highspeed Studios</a>
                  </div>
                </div>
              </div>
              <div
                className="job-info-card-collapse collapse"
                id="jobInfoCardCollapse9"
              >
                <div className="job-info-card">
                  <div className="info-card">
                    <div className="info-card-icon bg-ufo-green-100 rounded-pill">
                      <img
                        src="./assets/icons/sack-dollar.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="info-card-content">
                      <h6 className="info-card-title">$500 - $1,000</h6>
                      <div className="info-card-desc">Monthly Salary</div>
                    </div>
                  </div>
                  <div className="info-card">
                    <div className="info-card-icon bg-rajah rounded-pill">
                      <img
                        src="./assets/icons/mark.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="info-card-content">
                      <h6 className="info-card-title">London, England</h6>
                      <div className="info-card-desc">Location</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-action">
                <a
                  className="btn btn-apply flex-fill flex-md-nofill fw-semiBold py-12 px-43 rounded-pill"
                  href="/jobdetail.html"
                >
                  Apply Now
                </a>
                <button className="btn btn-rounded btn-book">
                  <img
                    src="./assets/icons/heart.svg"
                    className="svg-inject svg-icon is-20"
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* /.job-card-grid-harizontal-component */}
          </div>
          {/* /.job-list */}
          <div className="d-flex justify-content-center mt-60">
            <nav
              className="pagination-container"
              aria-label="Page navigation example"
            >
              <a href="#" className="page-link previous">
                <img
                  src="./assets/icons/angles-left.svg"
                  className="svg-inject"
                  alt=""
                />
                Previous
              </a>
              <ul className="pagination bg-lavender-web-100">
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
              </ul>
              <a href="#" className="page-link next">
                Next
                <img
                  src="./assets/icons/angles-right.svg"
                  className="svg-inject"
                  alt=""
                />
              </a>
            </nav>
          </div>
          {/* /.job-list-pagination */}
        </div>
        {/* /.container */}
        {/* = /. Job List Section = */}
        <div className="mt-80" />
        {/* = /. Gap Section = */}
        <div className="border-top border-alice-blue" />
        {/* = /. Gap Border Section = */}
        <div className="mt-80" />
        {/* = /. Gap Section = */}
        <div className="container-xxl py-60">
          <div className="d-flex flex-column flex-md-row align-items-md-center gap-20">
            <h4 className="heading-section-4 text-dark mb-0">
              Upcoming Events
            </h4>
            {/* /.heading-section */}
            <div className="d-flex align-items-center justify-content-between justify-content-md-start ms-md-auto gap-15">
              <button className="btn d-flex align-items-center fw-medium text-dark py-12 px-25 border border-1 border-platinum rounded-pill shadow-none">
                <img
                  src="./assets/icons/calendar.svg"
                  className="svg-inject text-primary is-20 me-15"
                  alt=""
                />
                Filter Date
                <img
                  src="./assets/icons/chevron-down.svg"
                  className="svg-inject text-primary is-20 ms-15"
                  alt=""
                />
              </button>
              {/* /.btn-filter-date */}
              <button className="btn d-flex align-items-center fw-medium text-dark py-12 px-25 border border-1 border-platinum rounded-pill shadow-none">
                Newest
                <img
                  src="./assets/icons/chevron-down.svg"
                  className="svg-inject text-primary is-20 ms-15"
                  alt=""
                />
              </button>
              {/* /.btn-newest */}
            </div>
          </div>
          <div className="row mt-60">
            <div className="col-12 col-md-6 col-xl-4 my-15">
              <div className="event-card complete">
                <div className="event-thumb">
                  <img src="./assets/event-image-515x250.png" alt="event-1" />
                </div>
                <div className="event-content">
                  <div className="event-content-header">
                    <div className="event-content-date-book">
                      <div className="event-date">
                        20
                        <span>NOV</span>
                      </div>
                      <button className="btn btn-event-book" type="button">
                        <img
                          src="./assets/icons/check-circle-stroke-full.svg"
                          className="svg-inject"
                          alt=""
                        />
                      </button>
                    </div>
                    <div className="event-content-info">
                      <div className="event-categories">
                        <a className="event-categories-link" href="#">
                          Mobile App
                        </a>
                      </div>
                      <h2 className="event-title">
                        <a className="event-title-link" href="#">
                          Global Android Programmer Meetup 2020
                        </a>
                      </h2>
                    </div>
                  </div>
                  <div className="event-content-footer">
                    <div className="event-summary">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.event-card-grid-component */}
            </div>
            {/* /.col */}
            <div className="col-12 col-md-6 col-xl-4 my-15">
              <div className="event-card">
                <div className="event-thumb">
                  <img src="./assets/event-image-515x250.png" alt="event-2" />
                </div>
                <div className="event-content">
                  <div className="event-content-header">
                    <div className="event-content-date-book">
                      <div className="event-date">
                        15
                        <span>NOV</span>
                      </div>
                      <button className="btn btn-event-book" type="button">
                        <img
                          src="./assets/icons/heart.svg"
                          className="svg-inject"
                          alt=""
                        />
                      </button>
                    </div>
                    <div className="event-content-info">
                      <div className="event-categories">
                        <a className="event-categories-link" href="#">
                          ART EXIBITHION
                        </a>
                      </div>
                      <h2 className="event-title">
                        <a className="event-title-link" href="#">
                          Paris Designer Meetup with Ziro Partner
                        </a>
                      </h2>
                    </div>
                  </div>
                  <div className="event-content-footer">
                    <div className="event-summary">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.event-card-grid-component */}
            </div>
            {/* /.col */}
            <div className="col-12 col-md-6 col-xl-4 my-15">
              <div className="event-card">
                <div className="event-thumb">
                  <img src="./assets/event-image-515x250.png" alt="event-3" />
                </div>
                <div className="event-content">
                  <div className="event-content-header">
                    <div className="event-content-date-book">
                      <div className="event-date">
                        07
                        <span>NOV</span>
                      </div>
                      <button className="btn btn-event-book" type="button">
                        <img
                          src="./assets/icons/heart.svg"
                          className="svg-inject"
                          alt=""
                        />
                      </button>
                    </div>
                    <div className="event-content-info">
                      <div className="event-categories">
                        <a className="event-categories-link" href="#">
                          Accounting
                        </a>
                      </div>
                      <h2 className="event-title">
                        <a className="event-title-link" href="#">
                          Bussiness Plan in Pandemic with Famous Native Speaker
                        </a>
                      </h2>
                    </div>
                  </div>
                  <div className="event-content-footer">
                    <div className="event-summary">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.event-card-grid-component */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row
           */}
          <div className="d-flex">
            <a
              className="btn btn-primary fw-semiBold py-12 px-43 mt-60 mx-auto rounded-pill"
              href="/eventlist.html"
              role="button"
            >
              View more
            </a>
            \{/* /.btn-view-more */}
          </div>
        </div>
        {/* = /. Upcoming Events Section = */}
        <div className="mt-43" />
        {/* = /. Gap Section = */}
        <div className="container py-60 py-lg-100">
          <div className="swiper image-slider client-logo-slider mx-xl-34 mx-xxl-80">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src="./assets/client-logo-image.png" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="./assets/client-logo-image.png" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="./assets/client-logo-image.png" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="./assets/client-logo-image.png" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="./assets/client-logo-image.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* = /. Logo Client Section = */}
      </main>
    </>
  );
};

export default JoblistPage;
