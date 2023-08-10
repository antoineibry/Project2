import React from "react";
import Image from "next/image";
{
  /*xl:m-1 sm:mx-24*/
}
function Card({ card_img, card_text }) {
  return (
    <div>
      <div className=" h-[500px] rounded-3xl lg:col-span-1 row-span-1 sm:px-8 sm:mx-24 my-4 lg:my-0 lg:m-1 bg-slate-300 flex flex-col items-center">
        <Image
          src={card_img}
          className="rounded-xl mt-6 h-64 w-[90%]"
          width={400}
          height={400}
        />
        <div className="text-black font-medium m-5 text-lg">{card_text}</div>
      </div>
    </div>
  );
}

const Cards = ({ elements }) => {
  const cards = [];
  {
    elements.forEach((x) => {
      cards.push(<Card card_img={x.img} card_text={x.text} />);
    });
  }

  return (
    <section>
      <div className="grid lg:grid-flow-row lg:grid-cols-3 grid-flow-col grid-rows-3">
        {cards}
      </div>
    </section>
  );
};

export default Cards;
