import Banner from "@components/Banner"
import TextSection from "@components/TextSection";

const image_src="/images/banner-booking.png";
const section_src="/images/booking.png";
const text_1="Lorem Ipsum";
const text_2="";
const text_3="lorem";
const button_1="BOOK NOW";

export default function Home() {
  return (
  <>
    <section>
      <Banner IMAGE_URL={image_src} heading="Booking" paragraph="Subtitle"/>
    </section>

    <TextSection SECTION_IMAGE={section_src} TEXT1={text_1} TEXT2={text_2} TEXT3={text_3} BUTTON={button_1}/>
    </>
  )
}
