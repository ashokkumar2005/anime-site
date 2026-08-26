# Panel — Anime Library (client)

Frontend for the anime site. React + Vite, client-only (no backend calls yet
— catalog data is mocked in `src/data/animeData.js`).

## Pages

- **Home** (`/`) — cards for Naruto, One Piece, and Demon Slayer.
- **Anime details** (`/anime/:animeId`) — title, cover, description, genre,
  episode count, and a character roster. Each character card shows name,
  image, role, and a short description.

## Run it

```bash
cd client
npm install
npm run dev      # local dev server
npm run build    # production build to client/dist
npm run lint      # oxlint
```

## Notes

- Cover and character art are generated placeholders
  (`https://placehold.co`) so the UI ships with no dependency on licensed
  artwork. Swap `src/data/animeData.js` for real images or a live API
  (AniList, Jikan, etc.) when one is wired up.
- Routing is client-side via `react-router-dom`.
