import "./CharacterCard.css";

export default function CharacterCard({ character }) {
  return (
    <article className="character-card">
      <div className="character-card__photo">
        <img src={character.image} alt={character.name} loading="lazy" />
      </div>
      <div className="character-card__body">
        <span className="tag character-card__role">{character.role}</span>
        <h4 className="character-card__name">{character.name}</h4>
        <p className="character-card__desc">{character.description}</p>
      </div>
    </article>
  );
}
