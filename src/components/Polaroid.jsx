import "./Polaroid.css";

/**
 * Bilde i polaroid-ramme (samme papirtekstur som i Canva).
 * rotate: grader rotasjon, f.eks. 6 eller -4
 */
export default function Polaroid({ src, alt, rotate = 0, className = "" }) {
  return (
    <figure
      className={`polaroid ${className}`.trim()}
      style={rotate ? { "--polaroid-rotate": `${rotate}deg` } : undefined}
    >
      <img className="polaroid__image" src={src} alt={alt} loading="lazy" />
    </figure>
  );
}