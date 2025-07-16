const user = 'Myrdincx';
const url = `https://lastfm-last-played.biancarosa.com.br/${user}/latest-song`;

(async () => {
  try {
    const response = await fetch(url);
    const json = await response.json();

    const track = json.track;
    if (!track) return;

    const isNowPlaying = track['@attr']?.nowplaying;
    const trackName = track.name;
    const artistName = track.artist['#text'];
    const trackUrl = track.url; 

    const nowPlaying = document.createElement('p');
    nowPlaying.className = 'now-playing';

    const link = document.createElement('a');
    link.href = trackUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = `${trackName} by ${artistName}`;

    nowPlaying.textContent = `${isNowPlaying ? 'Now playing' : 'Last played'}: `;
    nowPlaying.appendChild(link);

    const main = document.getElementById('main');
    main.appendChild(nowPlaying);
  } catch (err) {
    console.error('Failed to load music info:', err);
  }
})();

