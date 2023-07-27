import Banner from "@components/Banner"

const image_src="/images/banner-index.png";

export default function Home() {
  return (
    <section>
      <Banner IMAGE_URL={image_src} heading="HERO IMAGE" paragraph="Subtitle"/>
    </section>
  )
}
