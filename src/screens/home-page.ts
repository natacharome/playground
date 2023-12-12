import { Work } from "./Work";

export class HomePage extends HTMLElement {
  constructor() {
    super();
  }

  // connectedCallback() {
  //   const work = document.createElement("div");
  //   work.classList.add("work");
  //   this.append(work);
  //   Work.run();
  // }
  connectedCallback() {
    const work = document.createElement("div");
    work.innerText = "Welcome to the home page";
    this.appendChild(work);
  }
}

customElements.define("home-page", HomePage);
