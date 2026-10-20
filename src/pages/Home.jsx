import { Link } from "react-router-dom";
import Countdown from "../components/Countdown.jsx";
import Polaroid from "../components/Polaroid.jsx";
import { home, rsvp, wedding } from "../data/content.js";
import "./Home.css";

export default function Home() {
  const { introPhotos, hero, schedule, gallery } = home;

  return (
    <>
      {/* 1. Navn, bilder, dato og sted */}
      <section className="intro">
        <h1 className="intro__names">{wedding.couple}</h1>
        <div className="photo-row">
          {introPhotos.map((photo) => (
            <Polaroid key={photo.alt} {...photo} />
          ))}
        </div>
        <div className="intro__meta">
          <p>{wedding.dateLabel}</p>
          <p>{wedding.venueLabel}</p>
        </div>
      </section>

      {/* 2. Stort bilde med RSVP */}
      <section className="hero" style={{ backgroundImage: `url(${hero.image})` }}>
        <div className="hero__content">
          <h2 className="hero__heading">{hero.heading}</h2>
          <Link to={rsvp.path} className="hero__button">
            {rsvp.buttonLabel}
          </Link>
          <Countdown target={wedding.ceremonyStart} className="hero__countdown" />
          <p className="hero__deadline">{rsvp.deadline}</p>
        </div>
      </section>

      {/* 3. Tidsplan */}
      <section className="schedule">
        <div className="schedule__photos">
          {schedule.photos.map((photo) => (
            <Polaroid key={photo.alt} {...photo} className="schedule__photo" />
          ))}
        </div>
        <header className="schedule__header">
          <h2 className="schedule__title">{schedule.title}</h2>
          <p className="schedule__date">{schedule.date}</p>
        </header>
        <ol className="schedule__list">
          {schedule.items.map((item) => (
            <li className="schedule__item" key={item.time}>
              <time className="schedule__time">{item.time}</time>
              <div>
                <h3 className="schedule__event">{item.title}</h3>
                <p className="schedule__text">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 4. Bildegalleri */}
      <section className="gallery">
        <h2 className="gallery__heading">{gallery.heading}</h2>
        <div className="photo-row">
          {gallery.photos.map((photo) => (
            <Polaroid key={photo.alt} {...photo} />
          ))}
        </div>
      </section>
    </>
  );
}