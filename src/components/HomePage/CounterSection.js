import React from 'react';

const CounterSection = () => {
    return (
        <>
  <div className="container-xxl py-60">
    <div className="counter">
      <div className="count-item">
        <div className="count-number" data-count={36789}>
          0
        </div>
        <div className="count-title">Talented Freelancer</div>
      </div>
      <div className="count-item">
        <div className="count-number" data-count={458973}>
          0
        </div>
        <div className="count-title">VIsitors</div>
      </div>
      <div className="count-item">
        <div className="count-number" data-count={56461}>
          0
        </div>
        <div className="count-title">Contract Made</div>
      </div>
      <div className="count-item">
        <div className="count-number" data-count={852000}>
          0
        </div>
        <div className="count-title">Companies</div>
      </div>
      <figure>
        <img
          src="./assets/pages/index/counter/figure-1.svg"
          className="svg-inject position-absolute figure-1 text-ocean-blue text-opacity-33"
          alt=""
        />
        <img
          src="./assets/pages/index/counter/figure-2.svg"
          className="svg-inject position-absolute figure-2 text-majorelle-blue-200"
          alt=""
        />
        <img
          src="./assets/pages/index/counter/figure-3.svg"
          className="svg-inject position-absolute figure-3 text-ocean-blue"
          alt=""
        />
        <img
          src="./assets/pages/index/counter/figure-4.svg"
          className="svg-inject position-absolute figure-4 text-white"
          alt=""
        />
        <img
          src="./assets/pages/index/counter/figure-5.svg"
          className="svg-inject position-absolute figure-5 text-majorelle-blue-200"
          alt=""
        />
        <img
          src="./assets/pages/index/counter/figure-6.svg"
          className="svg-inject position-absolute figure-6 text-white text-opacity-17"
          alt=""
        />
      </figure>
    </div>
    {/* /.counter-component */}
  </div>
  <div className="mt-xl-60" />
</>

    );
};

export default CounterSection;