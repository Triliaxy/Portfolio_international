const education = {
	title: "Education",
	html: `
		<div class="education-page">
			<h1>Education</h1>

			<section class="education-school">
				<img src="./assets/img/iut.jpg"
					 alt="Entrance to the IUT d'Annecy"
					 width="1600" height="1065">
				<div>
					<p class="education-period">In progress - Second year</p>
					<h2>IUT d'Annecy</h2>
					<p class="education-degree">BUT in Computer Science</p>
					<p>Université Savoie Mont Blanc - Annecy, France</p>
					<p>
						I'm specialising in application design, development and
						testing. This programme is helping me strengthen my
						programming skills and put them into practice through
						team projects.
					</p>
					<p>
						My focus is web development, especially front-end work
						with HTML, CSS and JavaScript. Alongside my coursework,
						I continue to learn through personal projects.
					</p>
				</div>
			</section>

			<section class="education-school">
				<img src="./assets/img/lycee_lachenal.jpg"
					 alt="Entrance to Lycée Louis Lachenal"
					 width="440" height="220" loading="lazy">
				<div>
					<p class="education-period">2025 - Completed</p>
					<h2>Lycée Louis Lachenal</h2>
					<p class="education-degree">Technological baccalauréat &mdash; STI2D</p>
					<p>Argonay, France</p>
					<p>
						I specialised in Digital and Information Systems (SIN)
						and graduated with honours (<em>mention bien</em>).
						This technical background led me to continue my studies
						in computer science at the IUT d'Annecy.
					</p>
				</div>
			</section>

			<button type="button" class="button" page="projects">Explore my projects</button>
		</div>
	`
}

export { education };