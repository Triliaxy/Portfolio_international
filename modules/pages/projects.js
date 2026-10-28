const projects = {
	title: "Projects",
	html: `
		<div class="projects-page">
			<h1>Projects</h1>
			<p class="projects-intro">
				A selection of my personal and academic projects, from web
				development to applications and system environments.
			</p>

			<section>
				<h2>Web development</h2>
				<div class="projects-list">
					<article class="project">
						<h3>FORMA interactive map</h3>
						<p class="project-type">School team project - November 2024 - March 2025</p>
						<p>
							I contributed to an interactive map for FORMA, a careers
							and education fair. Working as a team, we built a web
							interface and used CSV and JSON data with an SVG map.
						</p>
						<p>
							This project gave me experience in web development,
							data handling and organising work within a team.
						</p>
						<p class="project-technologies">HTML, CSS, JavaScript, SVG, CSV and JSON</p>
						<a href="https://github.com/Triliaxy/FORMA_interactive_map_2025" target="_blank" rel="noopener noreferrer">View source on GitHub</a>
					</article>

					<article class="project">
						<h3>Personal portfolio</h3>
						<p class="project-type">Personal project</p>
						<p>
							This website brings together my education, projects,
							volunteer experience and hobbies. I built it with
							native HTML, CSS and JavaScript.
						</p>
						<p>
							It includes layouts that adapt to different screen
							sizes, JavaScript page navigation and an automatic
							playlist of my Celeste gameplay.
						</p>
						<p class="project-technologies">HTML, CSS and JavaScript</p>
						<a href="https://github.com/Triliaxy/Portfolio_international"
						   target="_blank" rel="noopener noreferrer">View source on GitHub</a>
					</article>
				</div>
			</section>

			<section>
				<h2>Applications</h2>
				<div class="projects-list">
					<article class="project">
						<h3>Pac-Fish</h3>
						<p class="project-type">University project (SAÉ) - 2025 - Team of two</p>
						<p>
							As part of a university SAÉ, we worked as a pair to
							develop a game inspired by Pac-Man using WPF.
						</p>
						<p>
							<strong>Known issues:</strong> the final version on the
							master branch contains a few unresolved bugs introduced
							in one of the last commits. Collision detection can
							also fail in some situations when the player character
							and an enemy cross paths.
						</p>
						<p class="project-technologies">WPF</p>
						<a href="https://github.com/Triliaxy/TD2_6_Pac-Fish"
						   target="_blank" rel="noopener noreferrer">View source on GitHub</a>
					</article>
				</div>
			</section>

			<section>
				<h2>Systems &amp; infrastructure</h2>
				<div class="projects-list">
					<article class="project">
						<h3>SAÉ 2.03 - Raspberry Pi web server</h3>
						<p class="project-type">University project - 2025-2026 - Team of two</p>
						<p>
							We installed and configured a web server on a Raspberry Pi 2,
							using an operating system of our choice. We selected
							Raspberry Pi OS Lite (32-bit) to keep resource usage low,
							then deployed WordPress with Nginx, PHP-FPM and MariaDB.
						</p>
						<p>
							We configured remote administration over SSH, restricted
							incoming connections with UFW and used Fail2ban to block
							repeated failed SSH login attempts. We also disabled root
							login over SSH and configured a dedicated WordPress database user.
						</p>
						<p>
							To work within the Raspberry Pi's hardware limits, we set up
							page caching with W3 Total Cache. Our English installation
							guide documents the setup, troubleshooting steps and load
							testing with ApacheBench.
						</p>
						<p class="project-technologies">Raspberry Pi OS Lite, Nginx, PHP, MariaDB, WordPress, UFW and Fail2ban</p>
						<a href="./documents/SAE2.03_Compte_Rendu.pdf" target="_blank" rel="noopener noreferrer">View the installation guide (PDF)</a>
					</article>
				</div>
			</section>
		</div>
	`
}

export { projects };
