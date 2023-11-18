import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const [topBanners, setTopBanners] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/top-banner`)
      .then((res) => res.json())
      .then((info) => setTopBanners(info));
  }, []);

  return (
    <>
      <div className="bg-ghost-white">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 col-lg-6 col-xl-5 d-flex align-items-center my-34 my-lg-60 my-xl-120 order-2 order-lg-1">
              <div className="swiper header-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <h1 className="heading-header-1 mb-0">
                      Find out{" "}
                      <span className="text-primary">talented freelancer</span>{" "}
                      with better review faster
                    </h1>
                    <div className="heading-text-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <h1 className="heading-header-1">
                      Flexible <span className="text-primary">job</span> with
                      reasonable payment
                    </h1>
                    <div className="heading-text-2">
                      Make your website more attractive and marketable to
                      attract more audiences, freelancers, and employers
                    </div>
                  </div>
                </div>
                {/* /.header-slider-content */}
                <div className="d-flex flex-wrap align-items-center mt-60 gap-20">
                  <a
                    className="btn btn-primary fw-semiBold py-12 px-34 rounded-pill"
                    href="/joblist.html"
                    role="button"
                  >
                    Discover Now
                  </a>
                  <a
                    className="d-flex align-items-center fw-medium text-dark text-decoration-none"
                    data-fslightbox="gallery"
                    href="https://www.youtube.com/embed/pj5LRL3nwBg"
                  >
                    <div
                      href="#"
                      className="btn btn-rounded btn-white border border-alice-blue"
                    >
                      <img
                        src="./assets/icons/play-stroke.svg"
                        className="svg-inject svg-icon text-primary is-20"
                        alt=""
                      />
                    </div>
                    <span className="ms-20">Watch video</span>
                  </a>
                </div>
                {/* /.btn-discover-now and watch-video */}
                <div className="pagination-slider pagination-line header-slider-pagination mt-60" />
                {/* /.header-slider-pagination */}
              </div>
              {/* /.header-slider */}
            </div>
            {/* /.col */}
            <div className="col-12 col-lg-6 col-xl-7 order-1 order-lg-2">
              <div className="position-relative h-lg-100">
                <img
                  src="./assets/pages/index/header/heroImage.png"
                  className="hero-image-img"
                  alt=""
                />
                {/* /. hero-image */}
              </div>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
    </>
  );
};

export default Banner;
