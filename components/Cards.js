import React from 'react'
import Image from 'next/image'

function Card({card_img,card_text}){
    return(
        <div>
            <div className = "rounded-3xl col-span-1 m-5 bg-slate-300 flex flex-col items-center justify-center">
                <Image src={card_img} className="rounded-xl mt-6 " width={400} height={400}/>
                <div className="text-black font-medium m-5 text-lg">{card_text}</div> 
            </div>
        </div>
    );
}

const Cards = ({elements}) => {
    const cards = [];
    {elements.forEach((x) => {
        cards.push(<Card card_img={x.img} card_text={x.text} />);
    }
    )}

    return (
        <section>
            <div className=" grid grid-flow-row grid-cols-3">
                {cards}
            </div>
        </section>
    )
}

export default Cards