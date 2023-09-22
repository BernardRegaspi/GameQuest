import { aboutIcon } from "../assets/icons";
import { aboutParagraph } from "../constants";

const About = () => {
  return (
    <section className="max-container relative w-full h-full mx-auto">
      <div className="flex">
        <div className="flex-1 mt-24">
          <h2 className="text-7xl">10,000</h2>
          <p>Join our community and start enjoying together!</p>
          <h1 className="text-[150px] border-b-2 border-cc-white uppercase font-montserrat font-medium">
            About
          </h1>
        </div>
        <div className="flex-1">
          <img src={aboutIcon} alt="About Icon" className="max-w-lg mx-10" />
        </div>
      </div>
      <div className="mt-10">
        {aboutParagraph.map((paragraph, index) => (
          <p key={index} className="pb-7 leading-normal text-white-shades">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default About;
