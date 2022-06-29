import React from "react";

function Background({ children }) {
  return (
    <section className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute h-screen	-top-28 bg-indigo-50 w-full -z-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>
      </div>
      {children}
    </section>
  );
}

export default Background;
