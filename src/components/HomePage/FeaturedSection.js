import React from "react";

const FeaturedSection = () => {
  return (
    <>
      <div className="container-xxl py-60">
        <div className="row align-items-center">
          <div className="col-8">
            <h4 className="heading-section-4 text-dark mb-0">
              Featured profile this week
            </h4>
          </div>
          {/* /.col */}
          <div className="col-4 text-end">
            <span className="ms-auto">
              <a
                className="text-primary fw-semiBold text-decoration-none"
                href="/freelancerlist.html"
              >
                View More
              </a>
            </span>
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
        {/* /.heading-section */}
        <div className="position-relative profile-card-slider mt-lg-25">
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="profile-card-slide">
                  <div className="d-flex">
                    <div className="profile-image">
                      <img
                        src="./assets/profile-avatar-image-83x83.png"
                        alt=""
                      />
                      <div className="profile-online-status online" />
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <h6 className="profile-name">
                        <a href="/freelancerlist.html">David Hutapea</a>
                      </h6>
                      <div className="profile-work">
                        <a href="#">UI/UX Designer</a>
                      </div>
                    </div>
                  </div>
                  <div className="profile-action">
                    <div className="profile-rating">
                      <div className="profile-rating-icon">
                        <img
                          src="./assets/icons/star.svg"
                          className="svg-inject svg-icon checked"
                          alt=""
                        />
                        <img
                          src="./assets/icons/star.svg"
                          className="svg-inject svg-icon checked"
                          alt=""
                        />
                        <img
                          src="./assets/icons/star.svg"
                          className="svg-inject svg-icon checked"
                          alt=""
                        />
                        <img
                          src="./assets/icons/star.svg"
                          className="svg-inject svg-icon checked"
                          alt=""
                        />
                        <img
                          src="./assets/icons/star.svg"
                          className="svg-inject svg-icon"
                          alt=""
                        />
                      </div>
                      <div className="profile-rating-number">4.3</div>
                    </div>
                    <span className="profile-price-badge">$84/hr</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="profile-card-slide">
                  <div className="d-flex">
                    <div className="profile-image">
                      <img
                        src="./assets/profile-avatar-image-83x83.png"
                        alt="avatar-2"
                      />
                      <div className="profile-online-status online" />
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <h6 className="profile-name">
                        <a href="/freelancerlist.html">Henry Simatupang</a>
                      </h6>
                      <div className="profile-work">
                        <a href="#">Photogapher</a>
                      </div>
                    </div>
                  </div>
                  <div className="profile-action">
                    <div className="profile-rating">
                      <div className="profile-rating-icon">
                        <img
                          src="./assets/icons/star.svg"
                          className="svg-inject svg-icon checked"
                          alt=""
                        />
                        <img
                          src="./assets/icons/star.svg"
                          className="svg-inject svg-icon checked"
                          alt=""
                        />
                        <img
                          src="./assets/icons/star.svg"
                          className="svg-inject svg-icon checked"
                          alt=""
                        />
                        <img
                          src="./assets/icons/star.svg"
                          className="svg-inject svg-icon checked"
                          alt=""
                        />
                        <img
                          src="./assets/icons/star.svg"
                          className="svg-inject svg-icon"
                          alt=""
                        />
                      </div>
                      <div className="profile-rating-number">4.8</div>
                    </div>
                    <span className="profile-price-badge">$95/hr</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="profile-card-slide">
                  <div className="d-flex">
                    <div className="profile-image">
                      <img
                        src="./assets/profile-avatar-image-83x83.png"
                        alt="avatar-3"
                      />
                      <div className="profile-online-status" />
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <h6 className="profile-name">
                        <a href="/freelancerlist.html">Jennie Smith</a>
                      </h6>
                      <div className="profile-work">
                        <a href="#">Content Writer</a>
                      </div>
                    </div>
                  </div>
                  <div className="profile-action">
                    <div className="profile-rating">
                      <div className="profile-rating-icon">
                        <img
                          src="./assets/icons/star.svg"
                          className="svg-inject svg-icon checked"
                          alt=""
                        />
                        <img
                          src="./assets/icons/star.svg"
                          className="svg-inject svg-icon checked"
                          alt=""
                        />
                        <img
                          src="./assets/icons/star.svg"
                          className="svg-inject svg-icon checked"
                          alt=""
                        />
                        <img
                          src="./assets/icons/star.svg"
                          className="svg-inject svg-icon checked"
                          alt=""
                        />
                        <img
                          src="./assets/icons/star.svg"
                          className="svg-inject svg-icon"
                          alt=""
                        />
                      </div>
                      <div className="profile-rating-number">4.6</div>
                    </div>
                    <span className="profile-price-badge">$86/hr</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="profile-card-slide">
                  <div className="d-flex">
                    <div className="profile-image">
                      <img
                        src="./assets/profile-avatar-image-83x83.png"
                        alt="avatar-4"
                      />
                      <div className="profile-online-status online" />
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <h6 className="profile-name">
                        <a href="/freelancerlist.html">Louis Anderson</a>
                      </h6>
                      <div className="profile-work">
                        <a href="#">Customer Service</a>
                      </div>
                    </div>
                  </div>
                  <div className="profile-action">
                    <div className="profile-rating">
                      <div className="profile-rating-icon">
                        <img
                          src="./assets/icons/star.svg"
                          className="svg-inject svg-icon checked"
                          alt=""
                        />
                        <img
                          src="./assets/icons/star.svg"
                          className="svg-inject svg-icon checked"
                          alt=""
                        />
                        <img
                          src="./assets/icons/star.svg"
                          className="svg-inject svg-icon checked"
                          alt=""
                        />
                        <img
                          src="./assets/icons/star.svg"
                          className="svg-inject svg-icon checked"
                          alt=""
                        />
                        <img
                          src="./assets/icons/star.svg"
                          className="svg-inject svg-icon"
                          alt=""
                        />
                      </div>
                      <div className="profile-rating-number">4.3</div>
                    </div>
                    <span className="profile-price-badge">$27/hr</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-card-button-next">
            <img
              src="./assets/icons//long-arrow-right.svg"
              className="svg-inject svg-icon"
              alt=""
            />
          </div>
          {/* /.profile-slider-btn-next */}
          <div className="profile-card-button-prev">
            <img
              src="./assets/icons//long-arrow-left.svg"
              className="svg-inject svg-icon"
              alt=""
            />
          </div>
          {/* /.profile-slider-btn-previous */}
        </div>
      </div>
      <div className="mt-xl-43" />
    </>
  );
};

export default FeaturedSection;
