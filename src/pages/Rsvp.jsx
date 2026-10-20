import { rsvp } from "../data/content.js";
import "./PageStyles.css";

export default function Rsvp() {
  return (
    <section className="rsvp-page">
      <h1 className="rsvp-page__title">{rsvp.navLabel}</h1>
      <p className="rsvp-page__deadline">{rsvp.deadline}</p>

      {rsvp.formUrl ? (
        <iframe className="rsvp-page__form" src={rsvp.formUrl} title="Svarskjema">
          Laster inn skjema …
        </iframe>
      ) : (
        <p className="rsvp-page__placeholder">Svarskjemaet kommer snart.</p>
      )}
    </section>
  );
}