import { home } from "./modules/pages/home.js";
import { education } from "./modules/pages/education.js";
import { projects } from "./modules/pages/projectExperiences.js";
import { professionalExperiences } from "./modules/pages/professionalExperiences.js";

const pages = {
  home,
  education,
  projects,
  professionalExperiences
}

const root = document.getElementById("root")

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
