import Image from "next/image";

const Banner = ({ IMAGE_URL, heading, paragraph }) => {
  return (
    <div className="relative h-[80vh]">
      <div className="-z-1"> {/* Set the height here */}
        <Image
          priority
          src={IMAGE_URL}
          layout="fill"
          alt="hero image example"
          className="absolute h-full w-full left-0 top-0 right-0 object-cover object-center"
        />
      </div>

      <div className="absolute flex flex-col items-center text-white justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold">
        <h1 className="text-4xl font-bold">{heading}</h1> {/* Fixed typo in class name */}
        <p className="text-3xl mt-6">{paragraph}</p>
      </div>
      
    </div>
  );
};

export default Banner;
