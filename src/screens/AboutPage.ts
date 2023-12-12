export class AboutPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <h1>This is the About Page</h1>
        `;
  }
}
customElements.define("about-page", AboutPage);
