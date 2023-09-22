import { aboutPageCard } from "../constants"

const AboutPageCard = () => {
  return (
    <div>
      {aboutPageCard.map((card, index) => (
        <div key={index} className="p-4 border rounded-lg border-cc-green mb-10">
          <h2 className="text-6xl text-cc-green mb-3 font-montserrat font-semibold">{card.header}</h2>
          <p className="text-white-shades leading-normal font-light">{card.paragraph}</p>
        </div>
      ))}
    </div>
  )
}

export default AboutPageCard