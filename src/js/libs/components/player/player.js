import Plyr from "plyr";

export function initVideoPlayers() {
  const player = document.querySelector(".video-player");

  if (typeof player != "undefined" && player != null) {
    const players = Array.from(document.querySelectorAll(".video-player")).map(
      (p) => new Plyr(p)
    );
  }
}
