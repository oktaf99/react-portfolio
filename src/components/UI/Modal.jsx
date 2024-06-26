import React from "react";

import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);

  return (
    <div className="w-full h-full fixed top-0 left-0 z-[99] bg-gray-900 bg-opacity-60">
      <div className=" w-11/12 md:full md:max-w-[600px] absolute top-1/2 left-1/2 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
        <div> 
          <figure>
            <img src={portfolio.imgUrl} alt="" className="rounded-[8px] h-[280px] w-full object-cover" />
          </figure>
        </div>

        <div>
          <h2 className="text-2xl text-headingColor font-[700] my-5">
            {portfolio.title}
          </h2>

          <p className="text-[15px] leading-7 text-smallTextColor">
            {portfolio.description}
          </p>

          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="text-headingColor text-[18px] text-[700]">
              technologies :
            </h4>

            {portfolio.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0"
              >
                {item}
              </span>
            ))}
          </div>

          <a href={portfolio.siteUrl}>
            <button className="bg-primaryColor text-white py-2 px-4 mt-8 rounded-[8px] font-[500] hover:bg-headingColor ease-in-out duration-300">
              Come Site
            </button>
          </a>
        </div>

        <button
          onClick={() => setShowModal(false)}
          className="w-[1.8rem] h-[1.8rem] bg-white absolute top-[2rem] right-[1.8rem] text-[25px] flex items-center justify-center leading-0 rounded-[3px] cursor-pointer ease-in duration-300"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
