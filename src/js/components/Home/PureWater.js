import React, { useCallback } from "react";
import mobileImageUrl from "./pure-water.webp";

const PureWater = React.memo(() => {
  const scrollToNextSection = useCallback(() => {
    const nextSection = document.querySelector("#gurantee");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section id="pure" className="text-gray-600 body-font third-section">
      <div className="xl:px-10 px-4 mx-auto flex   pt-10  lg:flex-row flex-col  mb-3 lg:mb-6">
        <div className="lg:flex-grow lg:w-1/2   lg:px-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0  text-start lg:mx-auto">
          <div className="customer-need-wrap  ">
            <div className="lg:w-full w-full lg:pt-24 ">
              <img
                src={mobileImageUrl}
                alt="hero"
                className={`object-cover relative object-center rounded-3xl transition-transform duration-300 ease-in-out hover:-translate-y-2 max-w-full cursor-pointer w-full`}
              />
            </div>
          </div>
        </div>

        <div className="lg:w-1/2   ">
          <div className="customer-need-wrap    ">
            <div className="text-left font-bold  py-3 lg:max-w-fit w-fit mt-10 bg-white rounded-full shadow-lg relative customer-btn ">
              {" "}
              Pure water, smartly conserved{" "}
              <div className="elementor-icon absolute left-5 top-2 ">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                >
                  <path
                    d="M5.367 2.36968L0.839844 4.01463V8.20995C0.839844 12.0213 0.849325 12.4479 0.925172 12.9457C1.27597 15.1785 2.17192 16.9277 3.7979 18.5395C4.76496 19.5018 5.7652 20.2223 7.09727 20.9144C8.09751 21.4359 9.57654 22 9.93208 22C10.1122 22 11.2025 21.6302 11.814 21.36C13.3879 20.6679 14.7863 19.7578 15.8909 18.6959C17.7207 16.9419 18.7541 14.8134 18.9722 12.3294C19.0054 11.9407 19.0196 10.419 19.0101 7.87338L18.9959 4.00989L14.4687 2.36494C11.98 1.45951 9.93208 0.719999 9.91786 0.719999C9.90364 0.719999 7.85575 1.45951 5.367 2.36968ZM14.4924 8.34743L15.0139 8.86888L11.705 12.1777L8.4009 15.4818L6.61374 13.6947L4.82658 11.9075L5.35752 11.3719L5.88845 10.8362L7.14468 12.0924L8.4009 13.3486L11.1646 10.5849C12.6816 9.06798 13.933 7.82597 13.9473 7.82597C13.9615 7.82597 14.208 8.063 14.4924 8.34743Z"
                    fill="#1962F2"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="text-wrap xl:px-4 xl:mr-10">
            <h3 className="rt-textappear-line49 rt-textappear-line ml1 text-black text-3xl font-bold text-capitalize pt-8 pb-5 ">
              {" "}
              Water Purifier Just Got{" "}
              <span className="rt-heading-div">
                {" "}
                <span className="text-wrapper">
                  {" "}
                  <span className=" smarter">Smarter</span>{" "}
                  <span className="line line2"></span>{" "}
                </span>{" "}
              </span>{" "}
              <span className="after-text"></span>
            </h3>

            <p className=" leading-relaxed para ">
              The only purifier to recover 65% water, self-troubleshoot and do
              much more.
            </p>

            <div className="save-info-wrap flex  ">
              <div className="icon-check mt-2">
                <div className="elementor-icon">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99982 0C4.48655 0 0 4.48568 0 9.99965C0 15.5136 4.48626 20 9.99982 20C15.5143 20 19.9997 15.5139 19.9997 9.99965C19.9997 4.48568 15.5146 0 9.99982 0ZM14.3277 7.95082L9.09047 13.1881C8.93322 13.3451 8.72599 13.4244 8.52068 13.4244C8.31379 13.4244 8.10848 13.3452 7.9507 13.1881L5.67298 10.9103C5.35806 10.5951 5.35806 10.0853 5.67298 9.77046C5.98783 9.4556 6.49766 9.4556 6.81257 9.77046L8.52068 11.4791L13.1888 6.81076C13.503 6.49626 14.0128 6.49626 14.3277 6.81076C14.6426 7.12614 14.6426 7.63597 14.3277 7.95082Z"
                      fill="#39C69B"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="check-point">
                <p className="px-4">
                  <strong className="font-bold">Ultimate water saver:</strong>
                  &nbsp;Our premium, long lasting filters can help you save up
                  to&nbsp;<strong className="font-bold">15,000+</strong>
                  &nbsp;litres of water annually, making them a great choice for
                  water conservation.
                </p>
              </div>
            </div>
            <div className="save-info-wrap flex mt-6 ">
              <div className="icon-check mt-2">
                <div className="elementor-icon">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99982 0C4.48655 0 0 4.48568 0 9.99965C0 15.5136 4.48626 20 9.99982 20C15.5143 20 19.9997 15.5139 19.9997 9.99965C19.9997 4.48568 15.5146 0 9.99982 0ZM14.3277 7.95082L9.09047 13.1881C8.93322 13.3451 8.72599 13.4244 8.52068 13.4244C8.31379 13.4244 8.10848 13.3452 7.9507 13.1881L5.67298 10.9103C5.35806 10.5951 5.35806 10.0853 5.67298 9.77046C5.98783 9.4556 6.49766 9.4556 6.81257 9.77046L8.52068 11.4791L13.1888 6.81076C13.503 6.49626 14.0128 6.49626 14.3277 6.81076C14.6426 7.12614 14.6426 7.63597 14.3277 7.95082Z"
                      fill="#39C69B"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="check-point">
                <p className="px-4">
                  <span className="font-bold">
                    Track water consumption and much more:
                  </span>{" "}
                  Monitor the daily amount of water that is filtered and wasted
                  on your mobile phone. Also check TDS, flow rate, filters
                  status.
                </p>
              </div>
            </div>
            <div className="save-info-wrap flex mt-6 ">
              <div className="icon-check mt-2">
                <div className="elementor-icon">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99982 0C4.48655 0 0 4.48568 0 9.99965C0 15.5136 4.48626 20 9.99982 20C15.5143 20 19.9997 15.5139 19.9997 9.99965C19.9997 4.48568 15.5146 0 9.99982 0ZM14.3277 7.95082L9.09047 13.1881C8.93322 13.3451 8.72599 13.4244 8.52068 13.4244C8.31379 13.4244 8.10848 13.3452 7.9507 13.1881L5.67298 10.9103C5.35806 10.5951 5.35806 10.0853 5.67298 9.77046C5.98783 9.4556 6.49766 9.4556 6.81257 9.77046L8.52068 11.4791L13.1888 6.81076C13.503 6.49626 14.0128 6.49626 14.3277 6.81076C14.6426 7.12614 14.6426 7.63597 14.3277 7.95082Z"
                      fill="#39C69B"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="check-point">
                <p className="px-4">
                  <span className="font-bold">Auto-Troubleshooting:</span>{" "}
                  India’s only water purifier that can automatically detect
                  choking of filters and run troubleshooting programs to keep
                  the water clean and bacteria free without any manual
                  intervention.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={scrollToNextSection}
            className="rt-arrow-btn rounded-full bg-blue-500 w-fit  lg:px-12 px-10 lg:py-5 py-5 flex m-auto lg:mt-7 mt-6"
          >
            <a
              href="#gurantee"
              rel="nofollow"
              className="rt-readmore-btn text-white font-bold mx-auto"
            >
              Next: 100 Days Money Back
            </a>
          </button>
        </div>
      </div>
    </section>
  );
});

export default PureWater;
