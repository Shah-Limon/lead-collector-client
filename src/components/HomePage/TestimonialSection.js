import React from "react";

const TestimonialSection = () => {
  return (
    <>
      <div className="container-xxl py-60">
        <div className="d-grid gap-12 w-md-50 w-xl-34 mb-80 mx-auto">
          <h2 className="heading-section-3 text-dark text-center mb-0">
            What our Customer Says
          </h2>
          <div className="heading-text-2 lh-base text-dark text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </div>
        </div>
        {/* /.heading-section */}
        <div className="testimonial-slider w-xl-85 mx-auto">
          <div className="testimonial-slider-image">
            <div className="swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="./assets/profile-avatar-image-300x300.png" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src="./assets/profile-avatar-image-300x300.png" alt="" />
                </div>
              </div>
            </div>
            <img
              src="./assets/pages/index/testimonial/figure-1.svg"
              className="svg-inject position-absolute testimonial-figure-1 text-dark z-index-1"
              alt=""
            />
            <img
              src="./assets/pages/index/testimonial/figure-2.svg"
              className="svg-inject position-absolute testimonial-figure-2 text-primary z-index-1"
              alt=""
            />
          </div>
          <div className="swiper testimonial-slider-content">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-content-item">
                  <div className="testimonial-header">
                    <div className="testimonial-info">
                      <h5 className="testimonial-name">William Smith</h5>
                      <div className="testimonial-desc">
                        CEO of True Love Studios
                      </div>
                    </div>
                    <div className="testimonial-rating">
                      <div className="testimonial-rating-icon">
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
                      <div className="testimonial-rating-number">4.8</div>
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p className="testimonial-says">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-content-item">
                  <div className="testimonial-header">
                    <div className="testimonial-info">
                      <h5 className="testimonial-name">William Smith</h5>
                      <div className="testimonial-desc">
                        CEO of True Love Studios
                      </div>
                    </div>
                    <div className="testimonial-rating">
                      <div className="testimonial-rating-icon">
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
                      <div className="testimonial-rating-number">4.8</div>
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p className="testimonial-says">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-footer">
              <div className="testimonial-nav">
                <div className="testimonial-btn-prev">
                  <img
                    src="./assets/icons/long-arrow-left.svg"
                    className="svg-inject svg-icon"
                    alt=""
                  />
                </div>
                {/* /.testimonial-btn-previous */}
                <div className="testimonial-btn-next">
                  <img
                    src="./assets/icons/long-arrow-right.svg"
                    className="svg-inject svg-icon"
                    alt=""
                  />
                </div>
                {/* /.testimonial-btn-next */}
              </div>
              <div className="avatar-group">
                <div className="avatar" href="#">
                  <img src="./assets/profile-avatar-image-51x51.png" alt="" />
                </div>
                <div className="avatar" href="#">
                  <img src="./assets/profile-avatar-image-51x51.png" alt="" />
                </div>
                <div className="avatar" href="#">
                  <img src="./assets/profile-avatar-image-51x51.png" alt="" />
                </div>
                <div className="avatar" href="#">
                  <img src="./assets/profile-avatar-image-51x51.png" alt="" />
                </div>
                <div
                  className="avatar avatar-text bg-primary text-white"
                  href="#"
                >
                  21k+
                </div>
              </div>
              {/* /.avatar-group-component */}
            </div>
          </div>
        </div>
        {/* /.testimonial-slider-component */}
      </div>
      <div className="mt-xl-60" />
    </>
  );
};

export default TestimonialSection;
