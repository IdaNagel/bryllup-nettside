import SplitSection from "../components/SplitSection.jsx";
import { gifts } from "../data/content.js";
import "./PageStyles.css";

export default function Gifts() {
  return (
    <SplitSection title={gifts.title} image={gifts.image} imageShape="portrait" background={gifts.background}>
      <ul className="gift-list">
        {gifts.lists.map((list) => (
          <li className="gift-list__item" key={list.name}>
            <h2 className="gift-list__name">{list.name}</h2>
            <a className="gift-list__link" href={list.url} target="_blank" rel="noreferrer">
              {gifts.linkLabel}
              <span className="visually-hidden"> til gavelisten hos {list.name} (åpnes i ny fane)</span>
            </a>
          </li>
        ))}
      </ul>
    </SplitSection>
  );
}