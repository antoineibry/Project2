
import React from 'react'
import Image from 'next/image'

const Aboutme = () => {
  return (
    <section className="intro">
            <Image src="/images/antoine-teaching.png" alt="Antoine teaching" className="imgantoine" width={300} height={200}/>
            <div className="abouttext">
                <p className="abouttext1"><i>"Any student can excel, they just need the proper guidance and the right support!"</i></p>
                <p className="abouttext2">Antoine Ibry</p>
                <p className="abouttext3">Private Tutor</p>
                <a className="cta" href="#"><button>Contact Antoine</button></a>
            </div>
    </section>
  )
}

export default Aboutme