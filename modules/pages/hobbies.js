import { initCelesteGallery } from "../celesteGallery.js";

const hobbies = {
	title: "Hobbies",
	html: `
		<div class="hobbies-page">
			<h1>My hobbies</h1>

			<section class="hobbies-games">
				<h2>Video games</h2>
				<div class="hobbies-celeste">
					<div>
						<h3>Celeste, my favourite game</h3>
						<p>
							With <strong>1,300 hours played</strong>, Celeste holds a
							special place among the games I enjoy. Its precise
							platforming and demanding challenges keep me coming
							back, one room and one attempt at a time.
						</p>
						<p>
							I enjoy the process of learning a tricky section,
							improving my execution and finally getting through it.
							The videos here are clips from my own gameplay.
						</p>
					</div>
					<figure class="hobbies-gameplay">
						<div class="hobbies-video-stage">
							<video muted playsinline preload="auto" width="1280" height="720">
								Your browser does not support HTML video.
							</video>
							<video hidden muted playsinline preload="auto" width="1280" height="720">
								Your browser does not support HTML video.
							</video>
						</div>
						<figcaption></figcaption>
					</figure>
				</div>
				<div class="hobbies-other-games">
					<h3>Other games I enjoy</h3>
					<p>
						I also play <em>Counter-Strike 2</em> and enjoy
						<em>Clair Obscur: Expedition 33</em>, the <em>Everhood</em>,
						<em>Hollow Knight</em> and <em>Final Fantasy</em> games,
						as well as psychological horror games.
					</p>
				</div>
			</section>

			<section class="hobbies-music">
				<h2>Music</h2>
				<p>
					I've been playing percussion for <strong>12 years</strong>,
					with instruments including the darbuka, bongo-cajón and drums.
					I particularly enjoy complex time signatures and the
					variety of rhythmic patterns they make possible.
				</p>
			</section>

			<section class="hobbies-technologies">
				<h2>Technology</h2>
				<p>
					Beyond web development, I'm interested in electronics and
					cybersecurity. I enjoy understanding how software and
					hardware work together, and how digital systems can be
					made more secure.
				</p>
			</section>

			<button type="button" class="button" page="home">Back to home</button>
		</div>
	`,
	init: initCelesteGallery
} //la référence à initCelesteGallery permet d'initialiser la galerie de vidéos après l'insertion du HTML dans root

export { hobbies };