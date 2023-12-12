import { ICard } from "../interfaces/ICard";
import { Work } from "./Work";

export class Project extends HTMLElement {
  project: string;
  constructor(project: string) {
    super();
    this.project = project;
  }

  connectedCallback() {
    const contentDiv = document.getElementById("content");
    contentDiv?.replaceChildren();

    const project = document.createElement("div");
    project.classList.add("test");
    const title = document.createElement("h2");
    title.innerText = `${this.project} Test nom du projet`;
    contentDiv?.appendChild(title);

    this.append(project);
  }
}

customElements.define("project-page", Project);

// On remplace la page project avec les éléments contenu dans
