import React, { useState, useEffect } from "react";
import Image from "next/image";
import data from "../../data.json";
import { ImageData, DataArray } from "../../types/data";
import { DialogBasicImage } from "../DialogContextType/DialogContextType";
import { DialogTitle, DialogDescription } from "../core/dialog";
import { XIcon } from "lucide-react";

interface ContentProps {
  selected: string;
}

const Content: React.FC<ContentProps> = ({ selected }) => {
  const [imageData, setImageData] = useState<DataArray>([]);

  useEffect(() => {
    const updatedData: DataArray = (data as DataArray).map((item, index) => ({
      ...item,
      id: data.length - index,
    }));
    setImageData(updatedData);
  }, []);

  const listOfImages =
    selected === "all"
      ? imageData
      : imageData.filter((data) => data.type.includes(selected));

  return (
    <>
      {listOfImages.map((data, index) => (
        <div
          key={`${data.id}-${data.title}`}
          className="block my-12 sm:my-6 relative"
        >
          <DialogBasicImage src={data.url} alt={data.alt}>
            <div className="cursor-pointer">
              <div className="relative w-full object-contain aspect-square bg-slate-100 transition-all duration-150 hover:bg-[#EDF1F7]">
                <Image
                  className="object-contain w-full h-full transition-all duration-150 hover:translate-y-1 p-8"
                  fill={true}
                  src={data.url}
                  alt={data.alt}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
                />
                {data.type.includes("want") && (
                  <div className="absolute top-2 right-2 bg-pink-400 text-white text-xs px-2 py-1 rounded">
                    Reciente
                  </div>
                )}
              </div>
              <div className="block gap-2">
                <div className="flex justify-between mt-4">
                  <p className="text-sm text-slate-800 mr-4">{data.title}</p>
                  <p className="text-sm text-slate-800">{data.id}</p>
                </div>
                <p className="text-sm text-gray-400 pb-4">{data.description}</p>
              </div>
            </div>
            <div className="hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                <div className="aspect-square bg-slate-100">
                  <Image
                    src={data.url}
                    alt={data.alt}
                    className="object-contain w-full h-full p-12 max-w-[90vw] rounded-[4px] lg:h-[90vh]"
                    width={500}
                    height={500}
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <DialogTitle className="text-xl font-bold text-slate-800 mb-2">
                    {data.id} / {data.title}
                  </DialogTitle>
                  <DialogDescription className="text-md text-slate-400 mb-6">
                    {data.description}
                  </DialogDescription>
                  <p className="text-sm text-slate-800 mb-4">{data.body}</p>
                  <p className="text-sm text-slate-400 mb-2">
                    {data.storeLink ? (
                      <a
                        href={data.storeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {data.notes}
                      </a>
                    ) : (
                      data.notes
                    )}
                  </p>
                </div>
              </div>
            </div>
          </DialogBasicImage>
        </div>
      ))}
    </>
  );
};

export default Content;
