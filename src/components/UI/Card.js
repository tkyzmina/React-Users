import React from "react";

function Card({ children, classStyle }) {
  return (
    <article className={`flex flex-col rounded-lg bg-white text-base shadow-xl shadow-black/5 ring-1 ring-slate-700/10 ${classStyle}`}>
      {children}
    </article>
  );
}

export default Card;
