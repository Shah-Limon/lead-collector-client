import React from "react";

const Dashboard = () => {
  return (
    <div>
      <main className="main position-relative">
        <div className="detail-header-background">
          <img src="./assets/detail-header-image-2560x330.png" alt="" />
        </div>
        {/* /.detail-background */}
        <div className="container-xxl">
          <div className="position-relative py-43 py-lg-80">
            <div className="d-grid gap-10 text-center">
              <h4 className="heading-section-4 text-white mb-0">Apply Job</h4>
              <div className="heading-text-2 text-white">
                <a className="text-white text-decoration-none" href="#">
                  Jobs
                </a>{" "}
                /{" "}
                <a className="text-white text-decoration-none" href="#">
                  Highspeed Studios
                </a>{" "}
                /{" "}
                <a className="text-white text-decoration-none" href="#">
                  UI Designer
                </a>
              </div>
            </div>
            {/* /.heading-header */}
            <a
              className="position-absolute btn btn-rounded btn-white top-0 top-md-50 top-md start-0 translate-middle-md-y p-10 mt-15 mt-md-0"
              href="/"
            >
              <img
                src="./assets/icons/long-arrow-left.svg"
                className="svg-inject text-dark is-20"
                alt=""
              />
            </a>
            {/* /.btn-back */}
          </div>
        </div>
        {/* /.container */}
        {/* = /. Header Section = */}
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 col-lg-8 col-xl-9 order-lg-2">
              <div className="d-grid d-xl-flex bg-white p-20 p-md-34 p-xxl-43 gap-34 rounded-20 shadow-2">
                <div className="d-flex align-items-center">
                  <div className="d-grid gap-10">
                    <h2 className="heading-section-4 text-dark mb-0">
                      Lead UI/UX Designer
                    </h2>
                    <div className="fs-14">Experience 2-5 years</div>
                  </div>
                  {/* /.job-title and job-meta */}
                </div>
                <div className="d-flex flex-column flex-xl-row gap-15 gap-xl-34 gap-xl-60 py-10 py-lg-20 ms-xl-auto overflow-auto">
                  <div className="info-card">
                    <div className="info-card-icon bg-ufo-green-100 rounded-pill">
                      <img
                        src="./assets/icons/sack-dollar.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="info-card-content flex-nofill">
                      <h6 className="info-card-title">$14,000 - $25,000</h6>
                      <div className="info-card-desc">Monthly Salary</div>
                    </div>
                  </div>
                  {/* /.info-card-component */}
                  <div className="info-card">
                    <div className="info-card-icon bg-rajah rounded-pill">
                      <img
                        src="./assets/icons/mark.svg"
                        className="svg-inject svg-icon"
                        alt=""
                      />
                    </div>
                    <div className="info-card-content flex-nofill">
                      <h6 className="info-card-title">London, England</h6>
                      <div className="info-card-desc">Location</div>
                    </div>
                  </div>
                  {/* /.info-card-component */}
                </div>
              </div>
              <div className="d-grid bg-white p-20 p-md-34 p-xxl-43 mt-24 gap-34 rounded-20 shadow-2">
                <h2 className="heading-section-4 text-dark mb-0">
                  Fill the job applications
                </h2>
                <form action="#" className="row">
                  <div className="col-md-6 col-xl-4 my-15 my-xl-24">
                    <label htmlFor="inputFirstname" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      id="inputFirstname"
                      placeholder="Type here"
                    />
                  </div>
                  {/* /.col */}
                  <div className="col-md-6 col-xl-4 my-15 my-xl-24">
                    <label htmlFor="inputMiddlename" className="form-label">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      id="inputMiddlename"
                      placeholder="Type here"
                    />
                  </div>
                  {/* /.col */}
                  <div className="col-md-6 col-xl-4 my-15 my-xl-24">
                    <label htmlFor="inputLastname" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      id="inputLastname"
                      placeholder="Type here"
                    />
                  </div>
                  {/* /.col */}
                  <div className="col-md-6 col-xl-4 my-15 my-xl-24">
                    <label htmlFor="inputBirthdate" className="form-label">
                      Birth Date
                    </label>
                    <input
                      type="text"
                      className="form-control input-date rounded-pill"
                      id="inputBirthdate"
                      placeholder="MM DD, YYYY"
                    />
                  </div>
                  {/* /.col */}
                  <div className="col-md-6 col-xl-4 my-15 my-xl-24">
                    <label htmlFor="inputEmailaddress" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control rounded-pill"
                      id="inputEmailaddress"
                      placeholder="Type here"
                    />
                  </div>
                  {/* /.col */}
                  <div className="col-md-6 col-xl-4 my-15 my-xl-24">
                    <label htmlFor="inputPhonenumber" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className="form-control rounded-pill"
                      id="inputPhonenumber"
                      placeholder="Type here"
                    />
                  </div>
                  {/* /.col */}
                  <div className="col-12 my-15 my-xl-24">
                    <label htmlFor="textareaAboutyou" className="form-label">
                      About You
                    </label>
                    <textarea
                      className="form-control"
                      id="textareaAboutyou"
                      rows={5}
                      placeholder="Type here"
                      defaultValue={""}
                    />
                  </div>
                  {/* /.col */}
                  <div className="col-12 my-15 my-xl-24">
                    <label className="form-label">Attach your resume</label>
                    <div className="form-upload">
                      <div className="upload-item upload-zone">
                        <div className="upload-icon">
                          <img
                            src="./assets/icons/cloud-arrow-up.svg"
                            className="svg-inject svg-icon"
                            alt=""
                          />
                        </div>
                        <div className="file-info">
                          <div className="file-info-title">Upload Files</div>
                          <div className="file-indo-detail">
                            PDF, DOC, PPT, JPG, PNG
                          </div>
                        </div>
                      </div>
                      <div className="upload-item">
                        <div className="upload-icon">
                          <img
                            src="./assets/icons/file.svg"
                            className="svg-inject svg-icon"
                            alt=""
                          />
                        </div>
                        <div className="file-info">
                          <div className="file-info-title">
                            Contact_2020.pdf
                          </div>
                          <div className="file-info-detail">456 KB</div>
                        </div>
                        <button className="action-delete">
                          <img
                            src="./assets/icons/x.svg"
                            className="svg-inject svg-icon"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                    {/* /.form-upload */}
                  </div>
                  {/* /.col */}
                  <div className="col-12 d-flex my-15 my-xl-24">
                    <button
                      type="submit"
                      className="btn btn-primary fw-semiBold py-12 px-24 px-md-60 rounded-pill"
                      role="button"
                    >
                      Submit
                    </button>
                    {/* /.btn-submit */}
                    <a
                      className="btn btn-cultured text-philippine-gray fw-semiBold py-12 px-20 ms-auto rounded-pill"
                      href="#"
                      role="button"
                    >
                      Cancel
                    </a>
                    {/* /.btn-cancel */}
                  </div>
                  {/* /.col */}
                </form>
                {/* /.row */}
              </div>
            </div>
            {/* /.col */}
            <div className="col-12 col-lg-4 col-xl-3 mt-20 mt-lg-0 order-lg-1">
              <div className="d-grid gap-34 bg-white p-20 py-43 rounded-20 shadow-2">
                <div className="d-grid text-center gap-34 mx-auto">
                  <img
                    src="./assets/company-logo-120x120.png"
                    className="img-avatar mx-auto rounded-pill"
                    alt="job-logo-1"
                  />
                  {/* /.company-image */}
                  <div className="d-grid gap-10">
                    <h6 className="heading-text-1 fw-medium mb-0">
                      <a className="text-dark text-decoration-none" href="#">
                        Highspeed Studios
                      </a>
                    </h6>
                    <div className="fs-14">
                      <a className="text-gray text-decoration-none" href="#">
                        Creative Design Agency
                      </a>
                    </div>
                  </div>
                  {/* /.company-info */}
                  <button className="btn btn-primary fw-semiBold py-12 rounded-pill">
                    + Follow
                  </button>
                  {/* /.btn-follow */}
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="info-card">
                      <div className="info-card-icon bg-blue-violet">
                        <img
                          src="./assets/icons/user.svg"
                          className="svg-inject is-16"
                          alt=""
                        />
                      </div>
                      <div className="info-card-content gap-5 flex-fill">
                        <h6 className="info-card-title fw-semiBold">
                          80 - 100
                        </h6>
                        <div className="info-card-desc">Employee</div>
                      </div>
                    </div>
                    {/* /.info-card-component */}
                  </div>
                  {/* /.col */}
                  <div className="col-6">
                    <div className="info-card">
                      <div className="info-card-icon bg-mikado-yellow">
                        <img
                          src="./assets/icons/star.svg"
                          className="svg-inject is-16"
                          alt=""
                        />
                      </div>
                      <div className="info-card-content gap-5 flex-fill">
                        <h6 className="info-card-title fw-semiBold">4.5</h6>
                        <div className="info-card-desc">Reviews</div>
                      </div>
                    </div>
                    {/* /.info-card-component */}
                  </div>
                  {/* /.col */}
                  <div className="col-12 mt-25">
                    <div className="info-card">
                      <div className="info-card-icon bg-bright-gray text-gray-100">
                        <img
                          src="./assets/icons/mark.svg"
                          className="svg-inject is-16"
                          alt=""
                        />
                      </div>
                      <div className="info-card-content gap-5 flex-fill">
                        <h6 className="info-card-title fw-semiBold">
                          London, England
                        </h6>
                        <div className="info-card-desc">Location</div>
                      </div>
                    </div>
                    {/* /.info-card-component */}
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
                <div className="border-top" />
                {/* /.gap-border */}
                <div className="d-grid gap-15">
                  <h6 className="fs-15 mb-0">About Company</h6>
                  <div className="fs-14">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in
                    </p>
                  </div>
                </div>
                {/* /.company-about */}
                <div className="d-flex align-items-center gap-15">
                  <a
                    href="#"
                    className="btn btn-apply fw-semiBold py-12 w-100 rounded-pill"
                  >
                    23 Vacancy
                  </a>
                  {/* /.btn-vacancy */}
                  <a
                    href="#"
                    className="btn btn-white text-dark fw-semiBold py-12 w-100 border border-platinum rounded-pill shadow-none"
                  >
                    More Detail
                  </a>
                  {/* /.btn-more-detail */}
                </div>
              </div>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
        {/* = /. Main Section = */}
        <div className="mt-xl-43" />
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
    </div>
  );
};

export default Dashboard;
