import SplitSection from "../components/SplitSection.jsx";
import { venue } from "../data/content.js";
import "./PageStyles.css";

export default function Venue() {
  return (
    <SplitSection title={venue.title} image={venue.image} imageShape="landscape" background={venue.background}>
      <div className="venue-card">
        <h2 className="venue-card__name">{venue.name}</h2>
        <p className="venue-card__address">{venue.address}</p>
        {venue.paragraphs.map((text) => (
          <p className="venue-card__text" key={text.slice(0, 24)}>
            {text}
          </p>
        ))}
      </div>
    </SplitSection>
  );
}