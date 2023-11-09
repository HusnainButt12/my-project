import React from "react";

const Footer = () => {
  return (
    <div>
      <div className=" flex flex-col md:flex-row justify-between bg-white border-2 border-lightText rounded-lg md:px-32 p-5">
        
      <div className=" text-center mt-4">
        <p>
          @copyright developed by
          <span className="text-brightGreen px-2">Study Coding</span>|
          All rights reserved
        </p>
      </div>
      </div>

    </div>
  );
};

export default Footer;
