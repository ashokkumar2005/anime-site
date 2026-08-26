import { Link, useParams, Navigate } from "react-router-dom";
import { getAnimeById } from "../data/animeData";
import CharacterCard from "../components/CharacterCard";
import "./AnimeDetails.css";

export default function AnimeDetails() {
  const { animeId } = useParams();
  const anime = getAnimeById(animeId);

  if (!anime) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <section className="container details">
        <Link to="/" className="details__back">
          &larr; Back to library
        </Link>

        <div className="details__grid">
          <div className="details__cover">
            <img src={anime.image} alt={`${anime.title} cover art`} />
          </div>

          <div className="details__info">
            <span className="eyebrow">{anime.tagline}</span>
            <h1 className="details__title">{anime.title}</h1>

            <dl className="details__stats">
              <div>
                <dt>Episodes</dt>
                <dd>{anime.episodes}</dd>
              </div>
              <div>
                <dt>Genre</dt>
                <dd>
                  <ul className="details__genres">
                    {anime.genre.map((g) => (
                      <li key={g} className="tag">
                        {g}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>

            <p className="details__description">{anime.description}</p>
          </div>
        </div>
      </section>

      <section className="container roster">
        <h2 className="roster__title">Character Roster</h2>
        <div className="roster__grid">
          {anime.characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </section>
    </>
  );
}
