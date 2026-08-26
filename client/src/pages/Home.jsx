import anime from "../data/animeData";
import AnimeCard from "../components/AnimeCard";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="hero halftone">
        <div className="container hero__inner">
          <span className="eyebrow">Vol. 01 — The Library</span>
          <h1 className="hero__title">Pick a series.
            <br />Meet the cast.</h1>
          <p className="hero__sub">
            Three shelves, three worlds. Open a title to see its rundown and
            the crew that carries it.
          </p>
        </div>
      </section>

      <section className="container catalog">
        <div className="catalog__grid">
          {anime.map((entry) => (
            <AnimeCard key={entry.id} anime={entry} />
          ))}
        </div>
      </section>
    </>
  );
}
