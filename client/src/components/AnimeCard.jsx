import { Link } from "react-router-dom";
import "./AnimeCard.css";

export default function AnimeCard({ anime }) {
  return (
    <Link to={`/anime/${anime.id}`} className="anime-card" aria-label={`Open ${anime.title} details`}>
      <div className="anime-card__cover">
        <img src={anime.image} alt={`${anime.title} cover art`} loading="lazy" />
        <span className="anime-card__eps">{anime.episodes} EP</span>
      </div>
      <div className="anime-card__body">
        <h3 className="anime-card__title">{anime.title}</h3>
        <p className="anime-card__tagline">{anime.tagline}</p>
        <ul className="anime-card__genres">
          {anime.genre.map((g) => (
            <li key={g} className="tag">
              {g}
            </li>
          ))}
        </ul>
      </div>
      <span className="anime-card__cta">View details &rarr;</span>
    </Link>
  );
}
