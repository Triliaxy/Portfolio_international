import { home } from "./modules/pages/home.js";
import { education } from "./modules/pages/education.js";
import { projects } from "./modules/pages/projects.js";
import { professionalExperiences } from "./modules/pages/professionalExperiences.js";
import { hobbies } from "./modules/pages/hobbies.js";
import { cleanupCelesteGallery } from "./modules/celesteGallery.js";

const pages = {
  home,
  education,
  projects,
  professionalExperiences,
  hobbies
}

const root = document.getElementById("root")

// Arrête la galerie avant de remplacer le contenu de la page.
function showPage(page) {
	cleanupCelesteGallery()
	root.innerHTML = page.html
	document.title = page.title
	// Les boutons du contenu sont recréés à chaque changement de page.
	addButtonEvents(root.querySelectorAll("button[page]"))
	page.init?.(root)
}

const homeButton = document.querySelector("button[page='home']")
const educationButton = document.querySelector("button[page='education']")
const projectsButton = document.querySelector("button[page='projects']")
const professionalExperiencesButton = document.querySelector("button[page='professionalExperiences']")
const hobbiesButton = document.querySelector("button[page='hobbies']")

const buttons = [homeButton, educationButton, projectsButton, professionalExperiencesButton, hobbiesButton]//liste de boutons de navigation

function addButtonEvents(buttons) {
	buttons.forEach(button => {
		button.addEventListener("click", () => {
			console.log(button.getAttribute("page"))
			showPage(pages[button.getAttribute("page")])
		})
	})
}

showPage(home)
addButtonEvents(buttons)
