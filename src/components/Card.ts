import { ICard } from "../interfaces/ICard";

export class Card extends HTMLElement {
  itemData: ICard;
  constructor(itemData: ICard) {
    super();
    this.itemData = itemData;
  }

  connectedCallback() {
    const item = document.createElement("div");
    item.classList.add("portfolio-item");

    const titleElement = document.createElement("h2");
    titleElement.classList.add("item-title");
    titleElement.innerText = this.itemData.name;

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("item-description");
    descriptionElement.innerText = this.itemData.image;

    item.appendChild(titleElement);
    item.appendChild(descriptionElement);
    this.append(item);
  }
}

customElements.define("card-item", Card);
