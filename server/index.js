const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Sample Anime Data
const animeData = [
  {
    id: 1,
    name: "Naruto",
    description: "Follows Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
    genre: "Action, Adventure, Fantasy",
    episodes: 720,
    image: "https://example.com/naruto.jpg"
  },
  {
    id: 2,
    name: "One Piece",
    description: "Monkey D. Luffy and his pirate crew explore the Grand Line in search of the world's ultimate treasure known as 'One Piece' in order to become the next Pirate King.",
    genre: "Action, Adventure, Fantasy",
    episodes: 1000,
    image: "https://example.com/onepiece.jpg"
  },
  {
    id: 3,
    name: "Demon Slayer",
    description: "Tanjiro Kamado's life is shattered when a demon slaughters his family. With his sister turned into a demon, he joins the Demon Slayer Corps to find a cure and avenge his family.",
    genre: "Action, Supernatural, Fantasy",
    episodes: 44,
    image: "https://example.com/demonslayer.jpg"
  }
];

// Sample Character Data
const characterData = [
  // Naruto Characters
  {
    id: 1,
    animeId: 1,
    name: "Naruto Uzumaki",
    role: "Protagonist",
    description: "The main protagonist of the series. He is a ninja from the Hidden Leaf Village and dreams of becoming the Hokage.",
    image: "https://example.com/naruto-uzumaki.jpg"
  },
  {
    id: 2,
    animeId: 1,
    name: "Sasuke Uchiha",
    role: "Deuteragonist",
    description: "Naruto's rival and former teammate. He seeks power to avenge his clan and destroy his brother.",
    image: "https://example.com/sasuke-uchiha.jpg"
  },
  {
    id: 3,
    animeId: 1,
    name: "Sakura Haruno",
    role: "Main Character",
    description: "A skilled medical ninja and member of Team 7, known for her superhuman strength.",
    image: "https://example.com/sakura-haruno.jpg"
  },
  // One Piece Characters
  {
    id: 4,
    animeId: 2,
    name: "Monkey D. Luffy",
    role: "Protagonist",
    description: "The captain of the Straw Hat Pirates who ate the Gum-Gum Fruit, giving him rubber-like abilities.",
    image: "https://example.com/luffy.jpg"
  },
  {
    id: 5,
    animeId: 2,
    name: "Roronoa Zoro",
    role: "Main Character",
    description: "The swordsman of the Straw Hat Pirates who uses three swords and aims to become the world's greatest swordsman.",
    image: "https://example.com/zoro.jpg"
  },
  {
    id: 6,
    animeId: 2,
    name: "Nami",
    role: "Main Character",
    description: "The navigator of the Straw Hat Pirates and a skilled thief who dreams of drawing a complete map of the world.",
    image: "https://example.com/nami.jpg"
  },
  // Demon Slayer Characters
  {
    id: 7,
    animeId: 3,
    name: "Tanjiro Kamado",
    role: "Protagonist",
    description: "A kind-hearted boy who becomes a demon slayer after his family is slaughtered and his sister is turned into a demon.",
    image: "https://example.com/tanjiro.jpg"
  },
  {
    id: 8,
    animeId: 3,
    name: "Nezuko Kamado",
    role: "Main Character",
    description: "Tanjiro's younger sister who was turned into a demon but retains some human emotions and protects her brother.",
    image: "https://example.com/nezuko.jpg"
  },
  {
    id: 9,
    animeId: 3,
    name: "Zenitsu Agatsuma",
    role: "Main Character",
    description: "A cowardly but skilled demon slayer who becomes incredibly powerful when unconscious.",
    image: "https://example.com/zenitsu.jpg"
  }
];

// GET /api/anime - Get all anime
app.get('/api/anime', (req, res) => {
  res.json(animeData);
});

// GET /api/anime/:id - Get specific anime by ID
app.get('/api/anime/:id', (req, res) => {
  const animeId = parseInt(req.params.id);
  const anime = animeData.find(a => a.id === animeId);
  
  if (!anime) {
    return res.status(404).json({ error: 'Anime not found' });
  }
  
  res.json(anime);
});

// GET /api/anime/:id/characters - Get all characters for a specific anime
app.get('/api/anime/:id/characters', (req, res) => {
  const animeId = parseInt(req.params.id);
  const anime = animeData.find(a => a.id === animeId);
  
  if (!anime) {
    return res.status(404).json({ error: 'Anime not found' });
  }
  
  const characters = characterData.filter(c => c.animeId === animeId);
  res.json(characters);
});

// GET /api/characters/:id - Get specific character by ID
app.get('/api/characters/:id', (req, res) => {
  const characterId = parseInt(req.params.id);
  const character = characterData.find(c => c.id === characterId);
  
  if (!character) {
    return res.status(404).json({ error: 'Character not found' });
  }
  
  res.json(character);
});

app.listen(PORT, () => {
  console.log(`Anime API server is running on port ${PORT}`);
});
