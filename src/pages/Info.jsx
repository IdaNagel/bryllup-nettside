import Polaroid from "../components/Polaroid.jsx";
import { info } from "../data/content.js";
import "./PageStyles.css";

export default function Info() {
  return (
    <section className="info">
      <h1 className="info__title">{info.title}</h1>
      <div className="info__grid">
        <div className="info__photos">
          {info.photos.map((photo) => (
            <Polaroid key={photo.alt} {...photo} />
          ))}
        </div>
        <div className="info__items">
          {info.items.map((item) => (
            <article className="info-item" key={item.title}>
              <h2 className="info-item__title">{item.title}</h2>
              <div className="info-item__body">
                {item.paragraphs.map((text) => (
                  <p key={text.slice(0, 24)}>{text}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}