const audioSources = {
  "you-belong-with-me": "../songs/Taylor Swift - You Belong With Me.mp3",
  "you-are-my-sunshine": "../songs/You Are My Sunshine .. Original Song....mp3",
  "bless-broken-road": "../songs/Rascal Flatts Bless the Broken Road.mp3",
  "what-makes-you-beautiful":
    "../songs/One Direction - What Makes You Beautiful (Official Video).mp3",
  "hey-there-delilah": "../songs/Plain White T's - Hey There Delilah.mp3",
};
const audioObjects = {};
let currentSongId = null;

function togglePlayPause(songId) {
  // Check if there is a currently playing song and pause it
  if (
    currentSongId !== null &&
    currentSongId !== songId &&
    audioObjects[currentSongId]
  ) {
    audioObjects[currentSongId].pause();
  }

  // Toggle play/pause for the selected song
  if (!audioObjects[songId]) {
    audioObjects[songId] = new Audio(audioSources[songId]);
  }

  const audio = audioObjects[songId];
  if (audio.paused) {
    audio.play();
    currentSongId = songId;
  } else {
    audio.pause();
    currentSongId = null;
  }
}

// Add event listeners for each song element
for (const songId in audioSources) {
  if (audioSources.hasOwnProperty(songId)) {
    document.getElementById(songId).addEventListener("click", function () {
      togglePlayPause(songId);
    });
  }
}
