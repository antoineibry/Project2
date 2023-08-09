import Banner from "@components/Banner"
import TextSection from "@components/TextSection";

const image_src="/images/banner-services.png";
const section_src="/images/services.jpeg";
const text_1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const text_2="Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const text_3="";
const button_1="";

export default function Home() {
  return (
    <section>
      <Banner IMAGE_URL={image_src} heading="Services" paragraph="Subtitle"/>
      <TextSection SECTION_IMAGE={section_src} TEXT1={text_1} TEXT2={text_2} TEXT3={text_3} BUTTON={button_1}/>

    </section>
  )
}
