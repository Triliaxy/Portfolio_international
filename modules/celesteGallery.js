// Liste des fichiers dans l'ordre de lecture et des titres affichés sous la vidéo
const clips = [
	{ file: "Celeste Mauve - room 18.mp4", title: "Mauve - Room 18" },
	{ file: "Celeste - farewelllike.mp4", title: "Another Farewell Map C-side - Room 1" },
	{ file: "Celeste pinball purgatory - room 2 clear.mp4", title: "Pinball Purgatory - Room 2" },
	{ file: "Celeste Pinball Purgatory - room 3 clear.mp4", title: "Pinball Purgatory - Room 3" },
	{ file: "Celeste SWAPSLUT - Expert room 4-03.mp4", title: "SWAPSLUT - Expert Room 4-03" }
]

//pour conserver la fluidité, on ne charge pas toutes les vidéos en même temps, mais seulement 2 à la fois

//methodes du mediaplayer : https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video#audioprocess

let players = [] 
let figcaption 

let currentClipIndex = 0 
let currentlyUsedPlayerIndex = 0 

function loadClip(clipIndex, playerIndex) {
	const clip = clips[clipIndex]
	const player = players[playerIndex]

	// encodeURIComponent adapte le nom du fichier pour une URL, notamment ses espaces
	player.src = `./assets/videos/${encodeURIComponent(clip.file)}`
	player.load() 
}

function preloadNextClip() {
	const nextClipIndex = (currentClipIndex + 1) % clips.length
	const nextPlayerIndex = (currentlyUsedPlayerIndex + 1) % players.length

	players[nextPlayerIndex].hidden = true
	loadClip(nextClipIndex, nextPlayerIndex)
}

function playCurrentClip() {
	const player = players[currentlyUsedPlayerIndex]
	player.hidden = false 
	figcaption.textContent = clips[currentClipIndex].title
	//play() demande la lecture, catch() traite un refus ou échec
	player.play().catch(() => {
		// Si le navigateur refuse l'autoplay, la vidéo reste à l'arrêt
	})
}

//event ici est l’événement ended
function playNextClip() {
	const currentPlayer = players[currentlyUsedPlayerIndex]

	currentPlayer.hidden = true
	currentClipIndex = (currentClipIndex + 1) % clips.length
	currentlyUsedPlayerIndex = (currentlyUsedPlayerIndex + 1) % players.length

	//L'autre lecteur contient déjà le prochain clip : inutile de le recharger
	playCurrentClip()
	// Le lecteur qui vient de terminer est maintenant libre : on le réutilise
	preloadNextClip()
}

//Appelée après l'insertion du HTML de Hobbies dans root
function initCelesteGallery(root) {
	cleanupCelesteGallery() //nettoie une éventuelle ancienne galerie
	players = [...root.querySelectorAll(".hobbies-gameplay video")]
	figcaption = root.querySelector(".hobbies-gameplay figcaption")

	currentClipIndex = 0
	currentlyUsedPlayerIndex = 0

	players.forEach(player => {
		player.muted = true
		// À la fin de la vidéo, le navigateur l'appellera
		player.onended = playNextClip
	})

	// Au départ : clip 0 dans le lecteur 0, clip 1 préparé dans le lecteur 1 masqué
	loadClip(currentClipIndex, currentlyUsedPlayerIndex)
	preloadNextClip()
	playCurrentClip()
}

//arrête les lecteurs et supprime toutes les références et variables
function cleanupCelesteGallery() {
	players.forEach(player => {
		player.onended = null 
		player.pause()
		player.removeAttribute("src")
		player.load()
	})
	
	players = []
	figcaption = null
}

export { initCelesteGallery, cleanupCelesteGallery };