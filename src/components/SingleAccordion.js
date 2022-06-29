import React, { useState } from "react";
import { VscAdd,VscChromeMinimize } from "react-icons/vsc";

function SingleAccordion({ title, text }) {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <li className="flex flex-col rounded-lg bg-white p-2 text-base shadow-xl shadow-black/5 ring-1 ring-slate-700/10  mb-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold">{title}</p>
        <button
          className="flex-none inline-block pointer-events-auto rounded-full bg-indigo-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 ml-4 min-w-[36px] "
          type="button"
          onClick={() => {
            setShow(!show);
          }}
        >
            {!show ? <VscAdd/> : <VscChromeMinimize/> }          
        </button>
      </div>
      {show && <p className="py-3">{text}</p>}
    </li>
  );
}

export default SingleAccordion;
