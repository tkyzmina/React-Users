import React from "react";
import { IoLocationSharp } from "react-icons/io5";

function Box({text}) {
  return (
    <div className="flex items-center rounded-md p-1.5 bg-indigo-600 text-white mb-4">
      <IoLocationSharp className="mr-4" />
      <p className="text-sm">{text}</p>
    </div>
  );
}

export default Box;
