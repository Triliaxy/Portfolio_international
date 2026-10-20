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

const homeButton = document.querySelector("div[page='home']")
const educationButton = document.querySelector("div[page='education']")
const projectsButton = document.querySelector("div[page='projects']")
const professionalExperiencesButton = document.querySelector("div[page='professionalExperiences']")

const buttons = [homeButton, educationButton, projectsButton, professionalExperiencesButton]//liste de boutons pour faire un eventlistener global

buttons.forEach(button => {
  button.addEventListener("click", () => {
    root.innerHTML = pages[button.getAttribute("page")].html
    document.title = pages[button.getAttribute("page")].title


  })
})