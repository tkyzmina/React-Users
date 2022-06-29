import React from "react";
import bg from "../assets/bg.jpg";

function Home() {
  return (
    <section className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute h-screen	-top-28 bg-indigo-50 w-full -z-10 overflow-hidden">
        <div class="absolute top-0 left-0 -scale-x-100 sm:left-1/2 sm:-translate-y-[6%] sm:-translate-x-[98%] lg:-translate-x-[106%] xl:-translate-x-[122%]">
          <img src={bg} alt="backgound" decoding="async"/>
        </div>
        <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"></div>
        <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>
      </div>
      <div className="container mx-auto px-4 max-w-2xl lg:max-w-4xl lg:px-12">
        <h1 className="font-bold tracking-tighter text-blue-600 text-5xl sm:text-7xl">
          Simply Users App
        </h1>
        <p className="mt-6 font-display text-2xl tracking-tight text-blue-900">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
          quasi impedit alias maxime nesciunt corrupti laboriosam blanditiis
          ullam repudiandae! Culpa eum repellendus temporibus vero sit pariatur
          nulla qui in velit!
        </p>
      </div>
    </section>
  );
}

export default Home;
