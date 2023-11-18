import React from "react";

const LogoClientSection = () => {
  return (
    <>
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
      <div className="mt-43"></div>
    </>
  );
};

export default LogoClientSection;
