import data from "../../src/data/data.json";
import { Card } from "../components/Card";
import { ICard } from "../interfaces/ICard";
import { Project } from "./Project";
export class Work {
  static run() {
    const container = document.querySelector(".work");
    data.forEach((itemData: any) => {
      const card = new Card(itemData);
      container?.append(card);
      card.addEventListener("click", () => {
        const project = new Project(itemData.name);
        window.location.href = `#/projects`;
      });
    });
  }
}
