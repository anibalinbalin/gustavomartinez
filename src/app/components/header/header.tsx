import React, { useState } from "react";
import data from "../../data.json";
import { ImageData, DataArray } from "../../types/data";

interface HeaderProps {
  selected: string;
  setSelected: (value: string) => void;
}

interface TotalCount {
  [key: string]: number;
}

const Header: React.FC<HeaderProps> = ({ selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Calculate total counts for each type
  const total: TotalCount = (data as DataArray).reduce(
    (acc: TotalCount, item: ImageData) => {
      item.type.forEach((type: string) => {
        if (acc[type]) {
          acc[type]++;
        } else {
          acc[type] = 1;
        }
      });
      return acc;
    },
    {}
  );

  const logo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-circle"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );

  const toggleMenu = () => setIsOpen(!isOpen);

  // Define the new filter options based on data.json
  const filterOptions = [
    "all",
    "Baño",
    "Exteriores",
    "Cocina",
    "Pisos",
    "Luminaria",
    "Terminaciones",
  ];

  return (
    <header className="fixed top-0 start-0 z-50 w-full bg-slate-50 flex justify-between items-center md:py-8 md:px-12 sm:py-6 sm:px-6">
      <h1 className="flex gap-4 text-lg items-center md:mb-0">
        {logo} Gustavo Martinez
      </h1>
      <div className="relative">
        <button
          onClick={toggleMenu}
          className="rounded-md bg-slate-100 py-2 px-4 text-sm text-slate-900 hover:bg-slate-200"
        >
          Filtrar
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg transition-transform transform ease-out duration-200">
            {filterOptions.map((category) => (
              <button
                key={category}
                className={`${
                  selected === category ? "text-slate-900" : "text-slate-400"
                } block w-full text-left px-4 py-2 text-sm hover:bg-slate-100 hover:text-slate-800`}
                onClick={() => {
                  setSelected(category);
                  toggleMenu();
                }}
              >
                <div className="flex justify-between">
                  <p>
                    {category === "all"
                      ? "Todo"
                      : category.charAt(0).toUpperCase() + category.slice(1)}
                  </p>
                  {total[category] || 0}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
