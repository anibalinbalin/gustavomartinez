import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex items-start md:flex-row md:justify-between md:px-8 md:pt-12 w-full sm:flex-col sm:px-0 sm:pb-4">
      {/* <p className="text-sm text-slate-500">
        Built with{" "}
        <a
          className="hover:text-slate-600"
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js{" "}
        </a>
        and{" "}
        <a
          className="hover:text-slate-800"
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind
        </a>
      </p> */}
      <p className="text-sm text-slate-500 mt-0 sm:mt-2">
        {/* Say hello @{" "} */}
        <a
          className="hover:text-slate-800"
          href="https://gustavomartinez.homes"
          target="_blank"
          rel="noopener noreferrer"
        >
          gustavomartinez.homes
        </a>
      </p>
    </div>
  );
};

export default Footer;
