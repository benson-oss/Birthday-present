import { useEffect, useState } from "react";
import { music, startMusic } from "../audio.js";

export default function MusicButton() {
  const [playing, setPlaying] = useState(!music.paused);

  useEffect(() => {
    const on = () => setPlaying(true);
    const off = () => setPlaying(false);
    music.addEventListener("play", on);
    music.addEventListener("pause", off);
    return () => {
      music.removeEventListener("play", on);
      music.removeEventListener("pause", off);
    };
  }, []);

  return (
    <button
      className="music-btn"
      onClick={() => (playing ? music.pause() : startMusic())}
      aria-label={playing ? "Pause music" : "Play music"}
    >
      {playing ? "🔊" : "🔇"}
    </button>
  );
}
