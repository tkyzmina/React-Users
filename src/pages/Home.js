import React from "react";
import Background from "../components/UI/Background";

function Home() {
  return (
    <Background showImg={true}>
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
    </Background>
  );
}

export default Home;
