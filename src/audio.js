// One shared audio object so the music keeps playing when the page changes.
// To use your own song: replace public/music.mp3 (or change the path below).
export const music = new Audio("/music.mp3");
music.loop = true;
music.volume = 0.6;

export function startMusic() {
  music.play().catch(() => {}); // must be called from a click (browser rule)
}
