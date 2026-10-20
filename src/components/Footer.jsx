import { contacts, wedding } from "../data/content.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__title">{wedding.couple}</p>
        <p className="footer__lead">Spørsmål? Ta gjerne kontakt med en av oss.</p>
        <ul className="footer__contacts">
          {contacts.map((person) => (
            <li className="footer__contact" key={person.name}>
              <span className="footer__name">{person.name}</span>
              <a href={`tel:${person.phone.replace(/\s/g, "")}`}>{person.phone}</a>
              <a href={`mailto:${person.email}`}>{person.email}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}