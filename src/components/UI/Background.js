import React from "react";
import bg from '../../assets/bg.jpg'

function Background({ children, showImg }) {
  return (
    <section className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute h-screen	-top-28 bg-indigo-50 w-full -z-10 overflow-hidden">
        {showImg && (
          <div className="absolute top-0 left-0 -scale-x-100 sm:left-1/2 sm:-translate-y-[6%] sm:-translate-x-[98%] lg:-translate-x-[106%] xl:-translate-x-[122%]">
            <img src={bg} alt="backgound" decoding="async" />
          </div>
        )}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>
      </div>
      {children}
    </section>
  );
}

export default Background;
