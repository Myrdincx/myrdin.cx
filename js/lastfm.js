(async () => {
  try {
    // yes it would be better to not publicly expose the API key but we are going to assume it wont be abused
    const res = await fetch(
      "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Myrdincx&api_key=5c1943b7296a4ae90c446fc14012a39f&format=json&limit=1",
    );
    const data = await res.json();
    const track = data.recenttracks.track[0];

    const p = document.createElement("p");
    p.className = "now-playing";
    // considered bad practice but this is a personal project
    p.innerHTML = `Listening to: <a href="${track.url}" target="_blank" rel="noopener noreferrer">${track.artist["#text"]} - ${track.name}</a>`;
    document.body.appendChild(p);
  } catch (error) {
    console.error("Failed to fetch music data:", error);
  }
})();
