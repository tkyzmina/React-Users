import React from "react";
import { Link } from "react-router-dom";
import Background from "../components/UI/Background";

function Error() {
  return (
    <Background>
      <div className="container mx-auto px-4 max-w-2xl lg:max-w-4xl lg:px-12">
        <h1 className="font-bold tracking-tighter text-blue-600 text-5xl sm:text-7xl">
          404
        </h1>
        <h2 className="mt-6 font-display text-2xl tracking-tight text-blue-900 mb-4">
          There are no such page.
        </h2>
        <Link
          className="pointer-events-auto rounded-md bg-indigo-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500"
          to="/"
        >
          Go to Home page
        </Link>
      </div>
    </Background>
  );
}

export default Error;
