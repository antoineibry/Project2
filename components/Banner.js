import Image from "next/image";

const Banner = ({IMAGE_URL,heading,paragraph}) => {
  return (
    <div className="heroWrapper">
        <div className="imageWrapper">
            <Image 
                priority
                src = {IMAGE_URL}
                layout="fill"
                objectFit="cover"
                objectPosition = "center"
                alt = "hero image example"
            />
                    
        </div>

        <div className="heroContent">
            <h1>{heading}</h1>
            <p>{paragraph}</p>
        </div>
    </div>
  );
};

export default Banner