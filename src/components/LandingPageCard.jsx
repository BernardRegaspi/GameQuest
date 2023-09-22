import { landingPageCard } from "../constants";

const LandingPageCard = () => {
  return (
    <div className="">
      {/* <div className="flex-1 p-5 rounded-xl mx-2 bg-cc-green-4">
        <h1 className="text-xl text-cc-green">Create</h1>
        <p className="text-[8px]">and invite them on your quest</p>
      </div> */}
      {landingPageCard.map((card, index) => (
        <div
          key={index}
          className={`${index % 2 === 0 ? "bg-cc-green-4" : "border border-cc-green"} flex-1 p-3 rounded-xl mb-4`}
        >
          <h2 className="text-xl font-semibold text-cc-green">{card.header}</h2>
          <p className="text-xs">{card.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default LandingPageCard;
