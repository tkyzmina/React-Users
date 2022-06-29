import React from "react";
import { VscGithub } from "react-icons/vsc";

function Footer() {
  return (
    <footer className="py-4 text-sm mt-auto">
      <div className="container mx-auto px-4 text-slate-400 flex justify-center items-center">
        <a
          className="hover:text-slate-500 mr-4"
          href="https://github.com/tkyzmina"
        >
          <VscGithub className="w-6 h-6" />
          <span class="sr-only">My GitHub</span>
        </a>
        <p>Tatyana Kyzmina, 2022.</p>
      </div>
    </footer>
  );
}

export default Footer;
