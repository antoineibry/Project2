import React from "react";
import Image from "next/image";

const TextSection = ({ SECTION_IMAGE, TEXT1, TEXT2, TEXT3, BUTTON }) => {
  return (
    <section className=" bg-gray-200">
      <div className="2xl:container mx-auto grid lg:grid-flow-col lg:grid-cols-3 sm:grid-flow-row sm:grid-row-3 justify-center sm:px-32 px-5 py-14">
        <div className="flex items-center justify-center">
          <Image
            src={SECTION_IMAGE}
            alt="Antoine teaching"
            className="rounded-3xl"
            width={350}
            height={200}
          />
        </div>

        <div className="lg:text-left text-center mt-14 font-medium text-black text-lg sm:pl-6 row-span-2 lg:col-span-2">
          <p>
            <i>{TEXT1}</i>
          </p>
          <p className="text-xl mt-7 font-bold">{TEXT2}</p>
          <p className="text-lg font-semibold mb-7">{TEXT3}</p>
          {BUTTON == "" ? (
            <div></div>
          ) : (
            <a
              className="p-3 -ml-3 bg-myblue text-white rounded-3xl font-semibold border-none"
              href="#"
            >
              <button>{BUTTON}</button>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default TextSection;
