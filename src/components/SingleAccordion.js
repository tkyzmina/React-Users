import React, { useState } from "react";
import { VscAdd, VscChromeMinimize } from "react-icons/vsc";
import Card from "./UI/Card";

function SingleAccordion({ title, text }) {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <Card classStyle="mb-4 p-2">
      <div className="flex items-center justify-between">
        <p className="font-semibold">{title}</p>
        <button
          className="flex-none inline-block pointer-events-auto rounded-full bg-indigo-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 ml-4 min-w-[36px] "
          type="button"
          onClick={() => {
            setShow(!show);
          }}
        >
          {!show ? <VscAdd /> : <VscChromeMinimize />}
        </button>
      </div>
      {show && <p className="py-3">{text}</p>}
    </Card>
  );
}

export default SingleAccordion;
