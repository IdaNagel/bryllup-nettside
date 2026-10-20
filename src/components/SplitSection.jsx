import "./SplitSection.css";

/**
 * Halvt/halvt-seksjon fra Canva (Gaveliste og Lokalet):
 * venstre: tittel + bilde, høyre: stort bilde med et kort oppå.
 * imageShape: "portrait" (stående) eller "landscape" (liggende)
 */
export default function SplitSection({ title, image, imageShape = "portrait", background, children }) {
  return (
    <section className="split">
      <div className="split__content">
        <h1 className="split__title">{title}</h1>
        <img
          className={`split__image split__image--${imageShape}`}
          src={image.src}
          alt={image.alt}
        />
      </div>
      <div className="split__media" style={{ backgroundImage: `url(${background})` }}>
        <div className="split__card">{children}</div>
      </div>
    </section>
  );
}