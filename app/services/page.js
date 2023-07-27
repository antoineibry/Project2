import Banner from "@components/Banner"

const image_src="/images/banner-services.png";

export default function Home() {
  return (
    <section>
      <Banner IMAGE_URL={image_src} heading="Services" paragraph="Subtitle"/>
    </section>
  )
}
