const home = {
    title: "Home",
    html: `
        <div class="home-page">
            <section class="home-intro">
                <div class="home-presentation">
                    <h1>Hi, I'm <span>Rémy.</span></h1>
                    <p class="home-lead">Building my future in web development.</p>
                    <p class="home-description">
                        I'm a second-year BUT Computer Science student at the IUT
                        of Annecy, Université Savoie Mont Blanc, specialising in
                        application design, development and testing.
                    </p>
                    <p class="home-description">
                        My focus is front-end web development with HTML, CSS and
                        JavaScript. Alongside my studies, I'm learning React,
                        Next.js and Node.js, with Express, to gradually explore
                        how complete web applications are built.
                    </p>
                    <p class="home-description">
                        For the FORMA careers and education fair, I helped build
                        an interactive map using HTML, CSS, JavaScript and SVG,
                        working with CSV and JSON data. It gave me hands-on
                        experience turning an idea into a working website as a team.
                    </p>
                    <!--  
                    <p class="home-availability">
                        <strong>Looking for a web development internship</strong>
                        Available from 5 April 2027 for 10 to 12 weeks,
                        with the possibility of extending into the summer.
                    </p>
                    -->
                    <!-- Paragraphe recherche de stage ci dessus
                    Bon courage Mr Damas si vous lisez ceci sans la coloration syntaxique, c’est un enfer -->
                    <button type="button" class="button home-action" page="projects">
                        Explore my projects
                    </button>
                </div>
                <figure class="home-portrait">
                    <img src="./assets/img/selfie.jpg"
                         alt="Portrait of Rémy Gonzalez Paulo"
                         width="836" height="1024">
                </figure>
            </section>

            <div class="home-skills">
                <section>
                    <h2>Soft skills</h2>
                    <ul>
                        <li><strong>Teamwork</strong> - Collaborating on the FORMA interactive map.</li>
                        <li><strong>Organisation and communication</strong> - Writing meeting minutes and helping coordinate activities at ODIN.</li>
                        <li><strong>Initiative</strong> - Learning React and Node.js independently alongside my studies.</li>
                    </ul>
                </section>
                <section>
                    <h2>Languages</h2>
                    <ul>
                        <li><strong>French</strong> - Native</li>
                        <li><strong>English</strong> - B2 (Upper intermediate)</li>
                        <li><strong>Spanish</strong> - A2 (Elementary)</li>
                    </ul>
                </section>
            </div>

            <section class="home-hobbies">
                <div>
                    <h2>A little more about me.</h2>
                    <p class="home-description">
                        Away from the keyboard, I play percussion and enjoy
                        video games, from metroidvanias to soulslikes. Discover
                        the rhythms, challenges and interests that inspire me
                        outside my web projects.
                    </p>
                </div>
                <button type="button" class="home-hobbies-link" page="hobbies">
                    Discover my hobbies
                </button>
            </section>
        </div>
    `
}

export { home };
