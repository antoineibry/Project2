import Banner from "@components/Banner"
import TextSection from "@components/TextSection";
import Booking from "@components/Booking";

const image_src="/images/banner-index.png";
const section_src="/images/antoine-teaching.png";
const text_1="Any student can excel, they just need the proper guidance and the right support!";
const text_2="Antoine Ibry";
const text_3="Private Tutor";
const button_1="Contact Antoine";

export default function Home() {
  return (
    <>
    <section>
      <Banner IMAGE_URL={image_src} heading="The best quality of education" paragraph="Learn with experts in the field"/>
    </section>

    <TextSection SECTION_IMAGE={section_src} TEXT1={text_1} TEXT2={text_2} TEXT3={text_3} BUTTON={button_1}/>
    <Booking />

    </>
  )
}
