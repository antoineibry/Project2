import Banner from "@components/Banner"
import TextSection from "@components/TextSection";

const image_src="/images/banner-pricing.png";
const section_src="/images/pricing.jpeg";
const text_1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor est laborum.";
const text_2="";
const text_3="Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const button_1="";

export default function Home() {
  return (
    <section>
      <Banner IMAGE_URL={image_src} heading="Pricing" paragraph="Subtitle"/>
      <TextSection SECTION_IMAGE={section_src} TEXT1={text_1} TEXT2={text_2} TEXT3={text_3} BUTTON={button_1}/>
    </section>
  )
}
