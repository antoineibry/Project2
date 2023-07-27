import Banner from "@components/Banner"

const image_src="/images/banner-booking.png";

export default function Home() {
  return (
    <section>
      <Banner IMAGE_URL={image_src} heading="Booking" paragraph="Subtitle"/>
    </section>
  )
}
