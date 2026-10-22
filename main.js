import { home } from "./modules/pages/home.js";
import { education } from "./modules/pages/education.js";
import { projects } from "./modules/pages/projects.js";
import { professionalExperiences } from "./modules/pages/professionalExperiences.js";
import { hobbies } from "./modules/pages/hobbies.js";

const pages = {
  home,
  education,
  projects,
  professionalExperiences,
  hobbies
}

const root = document.getElementById("root")

root.innerHTML = home.html
document.title = home.title

const homeButton = document.querySelector("button[page='home']")
const educationButton = document.querySelector("button[page='education']")
const projectsButton = document.querySelector("button[page='projects']")
const professionalExperiencesButton = document.querySelector("button[page='professionalExperiences']")

const buttons = [homeButton, educationButton, projectsButton, professionalExperiencesButton]//liste de boutons pour faire un eventlistener global

buttons.forEach(button => {
  button.addEventListener("click", () => {
    console.log(button.getAttribute("page"))
    root.innerHTML = pages[button.getAttribute("page")].html
    document.title = pages[button.getAttribute("page")].title
  })
})

root.addEventListener("click", (event) => {
  const button = event.target.closest("button[page]")
  if (!button || !pages[button.getAttribute("page")]) return

  root.innerHTML = pages[button.getAttribute("page")].html
  document.title = pages[button.getAttribute("page")].title
})
