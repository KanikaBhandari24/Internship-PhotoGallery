import { RxCross2 } from "react-icons/rx";
import React, { use, useState } from "react";

// const cate=['all', 'life', 'bts', 'founder', 'place', 'team'];

const Gallery = ({ images }) => {
  const [slidenumber, setslidenumber] = useState(0);
  const [Model, setModel] = useState(false);
  const [TempSrc, setTempSrc] = useState("");

  const getImg = (src) => {
    setTempSrc(src);
    setModel(true);
  };
  return (
    <>
      <div className={Model ? "model open" : "model"}>
        <div className="relative w-full h-full flex items-center justify-center">
          <img src={TempSrc} alt="" className="w-auto max-h-[90vh]" />
          <RxCross2
            size={30}
            onClick={() => setModel(false)}
            className="absolute top-3 right-4 cursor-pointer bg-black text-white m-2"
          />
        </div>
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 px-25 mb-20">
        {
          images.map((slide) => (
            <div key={slide.name} className="mb-2" onClick={() => getImg(slide.src)}>
              <img
                src={slide.src}
                alt={slide.name}
                className="hover:scale-90 w-full h-auto shadow-lg cursor-pointer transition-transform duration-500 hover:opacity-90 hover:rounded-3xl"
              />
            </div>
          ))}
          
      </div>
    </>
  );
};

export default Gallery;
