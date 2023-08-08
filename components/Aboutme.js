
import React from 'react'
import Image from 'next/image'

const Aboutme = () => {
  return (
    <section className="bg-gray-200 flex justify-center px-2 py-14">
            <Image src="/images/antoine-teaching.png" alt="Antoine teaching" className="rounded-3xl" width={300} height={200}/>
            <div className="w-1/2 text-left mt-14 font-medium text-black text-lg pl-9">
                <p><i>"Any student can excel, they just need the proper guidance and the right support!"</i></p>
                <p className="text-xl mt-7 font-bold">Antoine Ibry</p>
                <p className="text-lg font-semibold mb-7">Private Tutor</p>
                <a className="p-3 -ml-3 bg-myblue text-white rounded-3xl font-semibold border-none" href="#"><button>Contact Antoine</button></a>
            </div>
    </section>
  )
}

export default Aboutme