import Banner from "@components/Banner"
import Aboutme from "@components/Aboutme";
import Booking from "@components/Booking";

const image_src="/images/banner-index.png";

export default function Home() {
  return (
    <>
    <section>
      <Banner IMAGE_URL={image_src} heading="The best quality of education" paragraph="Learn with experts in the field"/>
    </section>

    <Aboutme />
    <Booking />

    </>
  )
}
