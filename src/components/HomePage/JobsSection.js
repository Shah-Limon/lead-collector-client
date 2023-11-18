import React from 'react';

const JobsSection = () => {
    return (
        <>
  <div className="container-xxl py-60">
    <div className="d-grid gap-12 w-md-50 w-xl-34 mb-60 mx-auto">
      <h2 className="heading-section-3 text-dark text-center mb-0">
        Featured Jobs
      </h2>
      <div className="heading-text-2 lh-base text-dark text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </div>
    </div>
    {/* /.heading-section */}
    <div className="row">
      <div className="col-12 col-md-4 col-xxl-3 my-12">
        <div className="job-card-grid mx-xxl-15">
          <div className="job-dropdown">
            <button
              className="job-dropdown-btn"
              type="button"
              id="job-featured-dropdown"
              data-bs-display="static"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="./assets/icons/ellipsis.svg"
                className="svg-inject svg-icon"
                alt=""
              />
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="job-featured-dropdown"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Dropdown 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Dropdown 2
                </a>
              </li>
            </ul>
          </div>
          <div className="job-info">
            <div className="job-image">
              <img src="./assets/job-logo-image-115x115.png" alt="" />
            </div>
            <h5 className="job-title">
              <a href="/jobdetail.html">Database Programmer</a>
            </h5>
            <div className="job-author">
              <a href="#">Maximoz Team</a>
            </div>
          </div>
          <ul className="job-detail">
            <li className="job-detail-item">
              <div className="job-detail-start">
                <img
                  src="./assets/icons/sack-dollar.svg"
                  className="svg-inject svg-icon"
                  alt=""
                />
              </div>
              <div className="job-detail-center">
                <div className="job-detail-text">$14,000 - $25,000</div>
              </div>
              <div className="job-detail-end">
                <div className="job-detail-text" href="#">
                  /monthly
                </div>
              </div>
            </li>
            <li className="job-detail-item">
              <div className="job-detail-start">
                <img
                  src="./assets/icons/mark.svg"
                  className="svg-inject svg-icon"
                  alt=""
                />
              </div>
              <div className="job-detail-center">
                <div className="job-detail-text">London, England</div>
              </div>
              <div className="job-detail-end">
                <a className="job-detail-text" href="#">
                  View Maps
                </a>
              </div>
            </li>
          </ul>
          <div className="job-action">
            <button className="btn btn-rounded btn-book">
              <img
                src="./assets/icons/heart.svg"
                className="svg-inject svg-icon"
                alt=""
              />
            </button>
            <a
              className="btn btn-apply fw-semiBold py-12 px-43 rounded-pill"
              href="/jobdetail.html"
            >
              Apply Now
            </a>
          </div>
        </div>
        {/* /.job-card-component */}
      </div>
      {/* /.col */}
      <div className="col-12 col-md-4 col-xxl-3 my-12">
        <div className="job-card-grid mx-xxl-15">
          <div className="job-dropdown">
            <button
              className="job-dropdown-btn"
              type="button"
              id="job-featured-dropdown"
              data-bs-display="static"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="./assets/icons/ellipsis.svg"
                className="svg-inject svg-icon"
                alt=""
              />
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="job-featured-dropdown"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Dropdown 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Dropdown 2
                </a>
              </li>
            </ul>
          </div>
          <div className="job-info">
            <div className="job-image">
              <img src="./assets/job-logo-image-115x115.png" alt="" />
            </div>
            <h5 className="job-title">
              <a href="/jobdetail.html">UI/UX Designer</a>
            </h5>
            <div className="job-author">
              <a href="#">Colo Colo Studios</a>
            </div>
          </div>
          <ul className="job-detail">
            <li className="job-detail-item">
              <div className="job-detail-start">
                <img
                  src="./assets/icons/sack-dollar.svg"
                  className="svg-inject svg-icon"
                  alt=""
                />
              </div>
              <div className="job-detail-center">
                <div className="job-detail-text">$14,000 - $25,000</div>
              </div>
              <div className="job-detail-end">
                <div className="job-detail-text" href="#">
                  /monthly
                </div>
              </div>
            </li>
            <li className="job-detail-item">
              <div className="job-detail-start">
                <img
                  src="./assets/icons/mark.svg"
                  className="svg-inject svg-icon"
                  alt=""
                />
              </div>
              <div className="job-detail-center">
                <div className="job-detail-text">London, England</div>
              </div>
              <div className="job-detail-end">
                <a className="job-detail-text" href="#">
                  View Maps
                </a>
              </div>
            </li>
          </ul>
          <div className="job-action">
            <button className="btn btn-rounded btn-book">
              <img
                src="./assets/icons/heart.svg"
                className="svg-inject svg-icon"
                alt=""
              />
            </button>
            <a
              className="btn btn-apply fw-semiBold py-12 px-43 rounded-pill"
              href="/jobdetail.html"
            >
              Apply Now
            </a>
          </div>
        </div>
        {/* /.job-card-component */}
      </div>
      {/* /.col */}
      <div className="col-12 col-md-4 col-xxl-3 my-12">
        <div className="job-card-grid mx-xxl-15">
          <div className="job-dropdown">
            <button
              className="job-dropdown-btn"
              type="button"
              id="job-featured-dropdown"
              data-bs-display="static"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="./assets/icons/ellipsis.svg"
                className="svg-inject svg-icon"
                alt=""
              />
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="job-featured-dropdown"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Drodpown 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Drodpown 2
                </a>
              </li>
            </ul>
          </div>
          <div className="job-info">
            <div className="job-image">
              <img src="./assets/job-logo-image-115x115.png" alt="" />
            </div>
            <h5 className="job-title">
              <a href="/jobdetail.html">Content Writer</a>
            </h5>
            <div className="job-author">
              <a href="#">Faster WOY Crew</a>
            </div>
          </div>
          <ul className="job-detail">
            <li className="job-detail-item">
              <div className="job-detail-start">
                <img
                  src="./assets/icons/sack-dollar.svg"
                  className="svg-inject svg-icon"
                  alt=""
                />
              </div>
              <div className="job-detail-center">
                <div className="job-detail-text">$14,000 - $25,000</div>
              </div>
              <div className="job-detail-end">
                <div className="job-detail-text" href="#">
                  /monthly
                </div>
              </div>
            </li>
            <li className="job-detail-item">
              <div className="job-detail-start">
                <img
                  src="./assets/icons/mark.svg"
                  className="svg-inject svg-icon"
                  alt=""
                />
              </div>
              <div className="job-detail-center">
                <div className="job-detail-text">London, England</div>
              </div>
              <div className="job-detail-end">
                <a className="job-detail-text" href="#">
                  View Maps
                </a>
              </div>
            </li>
          </ul>
          <div className="job-action">
            <button className="btn btn-rounded btn-book">
              <img
                src="./assets/icons/heart.svg"
                className="svg-inject svg-icon"
                alt=""
              />
            </button>
            <a
              className="btn btn-apply fw-semiBold py-12 px-43 rounded-pill"
              href="/jobdetail.html"
            >
              Apply Now
            </a>
          </div>
        </div>
        {/* /.job-card-component */}
      </div>
      {/* /.col */}
      <div className="d-none d-xxl-block col-xxl-3 my-12">
        <div className="job-card-grid mx-xxl-15">
          <div className="job-dropdown">
            <button
              className="job-dropdown-btn"
              type="button"
              id="job-featured-dropdown"
              data-bs-display="static"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="./assets/icons/ellipsis.svg"
                className="svg-inject"
                alt=""
              />
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="job-featured-dropdown"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Dropdown 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Dropdown 2
                </a>
              </li>
            </ul>
          </div>
          <div className="job-info">
            <div className="job-image">
              <img src="./assets/job-logo-image-115x115.png" alt="" />
            </div>
            <h5 className="job-title">
              <a href="/jobdetail.html">Database Programmer</a>
            </h5>
            <div className="job-author">
              <a href="#">Snailination Studios</a>
            </div>
          </div>
          <ul className="job-detail">
            <li className="job-detail-item">
              <div className="job-detail-start">
                <img
                  src="./assets/icons/sack-dollar.svg"
                  className="svg-inject svg-icon"
                  alt=""
                />
              </div>
              <div className="job-detail-center">
                <div className="job-detail-text">$14,000 - $25,000</div>
              </div>
              <div className="job-detail-end">
                <div className="job-detail-text" href="#">
                  /monthly
                </div>
              </div>
            </li>
            <li className="job-detail-item">
              <div className="job-detail-start">
                <img
                  src="./assets/icons/mark.svg"
                  className="svg-inject svg-icon"
                  alt=""
                />
              </div>
              <div className="job-detail-center">
                <div className="job-detail-text">London, England</div>
              </div>
              <div className="job-detail-end">
                <a className="job-detail-text" href="#">
                  View Maps
                </a>
              </div>
            </li>
          </ul>
          <div className="job-action">
            <button className="btn btn-rounded btn-book">
              <img
                src="./assets/icons/heart.svg"
                className="svg-inject svg-icon"
                alt=""
              />
            </button>
            <a
              className="btn btn-apply fw-semiBold py-12 px-43 rounded-pill"
              href="/jobdetail.html"
            >
              Apply Now
            </a>
          </div>
        </div>
        {/* /.job-card-component */}
      </div>
      {/* /.col */}
    </div>
    {/* /.row */}
    <div className="d-flex">
      <a
        className="btn btn-primary fw-semiBold py-12 px-43 mt-60 mx-auto rounded-pill"
        href="/jobdetail.html"
        role="button"
      >
        View more
      </a>
    </div>
    {/* /.btn-more */}
  </div>
  <div className="mt-xl-43" />
</>

    );
};

export default JobsSection;