// Mock catalog data for the anime library.
// Cover/character art uses generated placeholders (via placehold.co) so the
// UI has no dependency on licensed artwork — swap the `image` fields for
// real assets or a live API (e.g. AniList, Jikan) later.

const placeholder = (label, bg, fg, w = 480, h = 640) =>
  `https://placehold.co/${w}x${h}/${bg}/${fg}?font=work-sans&text=${encodeURIComponent(label)}`;

const anime = [
  {
    id: "naruto",
    title: "Naruto",
    tagline: "A village outcast's road to becoming Hokage.",
    image: placeholder("NARUTO", "d6401f", "f7f6f2"),
    genre: ["Action", "Adventure", "Fantasy"],
    episodes: 220,
    description:
      "Naruto Uzumaki is a young ninja from the Hidden Leaf Village who was shunned by his neighbors for the fox spirit sealed inside him as an infant. Determined to earn their respect, he trains alongside his squadmates, chases the title of Hokage, and works to bring a wayward friend back home.",
    characters: [
      {
        id: "naruto-uzumaki",
        name: "Naruto Uzumaki",
        image: placeholder("NARUTO", "17140f", "f7f6f2", 320, 320),
        role: "Protagonist",
        description:
          "A relentlessly optimistic ninja who turns being underestimated into fuel for growth.",
      },
      {
        id: "sasuke-uchiha",
        name: "Sasuke Uchiha",
        image: placeholder("SASUKE", "2c3e56", "f7f6f2", 320, 320),
        role: "Rival",
        description:
          "A gifted prodigy driven by a family tragedy and a hunger to prove his own strength.",
      },
      {
        id: "sakura-haruno",
        name: "Sakura Haruno",
        image: placeholder("SAKURA", "d6401f", "f7f6f2", 320, 320),
        role: "Teammate",
        description:
          "Starts as the team's bookish member and grows into one of its sharpest medical ninja.",
      },
      {
        id: "kakashi-hatake",
        name: "Kakashi Hatake",
        image: placeholder("KAKASHI", "55503f", "f7f6f2", 320, 320),
        role: "Mentor",
        description:
          "A famously tardy but formidable jonin who guides the team's early development.",
      },
    ],
  },
  {
    id: "one-piece",
    title: "One Piece",
    tagline: "A rubber-limbed captain sails for the ultimate treasure.",
    image: placeholder("ONE PIECE", "2c3e56", "f7f6f2"),
    genre: ["Action", "Adventure", "Comedy"],
    episodes: 1000,
    description:
      "Monkey D. Luffy sets sail with a ragtag crew to find the legendary treasure known as One Piece and become King of the Pirates. Along the way, the crew charts dangerous seas, faces down the World Government, and gathers a family bound by loyalty as much as ambition.",
    characters: [
      {
        id: "monkey-d-luffy",
        name: "Monkey D. Luffy",
        image: placeholder("LUFFY", "d6401f", "f7f6f2", 320, 320),
        role: "Captain",
        description:
          "A rubber-bodied dreamer whose simple code — protect the crew — never wavers.",
      },
      {
        id: "roronoa-zoro",
        name: "Roronoa Zoro",
        image: placeholder("ZORO", "17140f", "f7f6f2", 320, 320),
        role: "Swordsman",
        description:
          "A three-sword combatant chasing the title of the world's greatest swordsman.",
      },
      {
        id: "nami",
        name: "Nami",
        image: placeholder("NAMI", "2c3e56", "f7f6f2", 320, 320),
        role: "Navigator",
        description:
          "A weather-reading cartographer whose dream is to map the entire world.",
      },
      {
        id: "sanji",
        name: "Sanji",
        image: placeholder("SANJI", "55503f", "f7f6f2", 320, 320),
        role: "Cook",
        description:
          "A kick-fighting chef with an unshakable rule: never harm a woman, never waste food.",
      },
    ],
  },
  {
    id: "demon-slayer",
    title: "Demon Slayer",
    tagline: "A brother's vow to cure his sister and end the demons that made her one.",
    image: placeholder("DEMON SLAYER", "17140f", "d6401f"),
    genre: ["Action", "Fantasy", "Historical"],
    episodes: 55,
    description:
      "After his family is slaughtered and his sister Nezuko is turned into a demon, Tanjiro Kamado joins the Demon Slayer Corps to find a cure and hunt down the demon responsible. His journey pairs sword-drawn battles with a steady, hard-won compassion for the demons he's forced to fight.",
    characters: [
      {
        id: "tanjiro-kamado",
        name: "Tanjiro Kamado",
        image: placeholder("TANJIRO", "d6401f", "f7f6f2", 320, 320),
        role: "Protagonist",
        description:
          "A perceptive, even-tempered swordsman who leads with empathy as often as his blade.",
      },
      {
        id: "nezuko-kamado",
        name: "Nezuko Kamado",
        image: placeholder("NEZUKO", "2c3e56", "f7f6f2", 320, 320),
        role: "Tanjiro's Sister",
        description:
          "Turned into a demon but still fighting to protect humans, riding out the day in a box.",
      },
      {
        id: "zenitsu-agatsuma",
        name: "Zenitsu Agatsuma",
        image: placeholder("ZENITSU", "55503f", "f7f6f2", 320, 320),
        role: "Ally",
        description:
          "A self-doubting swordsman whose technique sharpens into brilliance only half-asleep.",
      },
      {
        id: "inosuke-hashibira",
        name: "Inosuke Hashibira",
        image: placeholder("INOSUKE", "17140f", "f7f6f2", 320, 320),
        role: "Ally",
        description:
          "A boar-masked, dual-blade fighter with a feral style and a soft, unspoken loyalty.",
      },
    ],
  },
];

export default anime;

export function getAnimeById(id) {
  return anime.find((entry) => entry.id === id);
}
