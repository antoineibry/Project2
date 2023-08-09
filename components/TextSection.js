
import React from 'react'
import Image from 'next/image'

const TextSection = ({SECTION_IMAGE, TEXT1, TEXT2, TEXT3, BUTTON}) => {
  return (
    <section className=" bg-gray-200">
            <div className="2xl:container mx-auto grid grid-flow-col grid-cols-2 justify-center px-2 py-14">
            <div className="flex items-center justify-center">
              <Image src={SECTION_IMAGE} alt="Antoine teaching" className="rounded-3xl" width={300} height={200}/>
            </div>

            <div className="text-left mt-14 font-medium text-black text-lg pl-6">
                <p><i>{TEXT1}</i></p>
                <p className="text-xl mt-7 font-bold">{TEXT2}</p>
                <p className="text-lg font-semibold mb-7">{TEXT3}</p>
                <a className="p-3 -ml-3 bg-myblue text-white rounded-3xl font-semibold border-none" href="#"><button>{BUTTON}</button></a>
            </div>
            </div>
    </section>
  )
}

export default TextSection