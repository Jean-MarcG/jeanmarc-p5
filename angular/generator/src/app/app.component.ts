import {Component} from '@angular/core';
import {getRandomPart} from "../utils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'generators';
  citations: Array<Object> = [];

  generators = {
    generator1: {
      part1: ["G1part1.1", "G1part1.2", "G1part1.3"],
      part2: ["G1part2.1", "G1part2.2", "G1part2.3"],
      part3: ["G1part3.1", "G1part3.2", "G1part3.3"],
    },
    generator2: {
      part1: ["G2part1.1", "G2part1.2", "G2part1.3"],
      part2: ["G2part2.1", "G2part2.2", "G2part2.3"],
      part3: ["G2part3.1", "G2part3.2", "G2part3.3"],
    }
  };

  submit(e) {
    e.preventDefault()
    const generator = e.target.categorie.value
    const nbCitations = parseInt(e.target.nbCitations.value)
    this.citations = [];
    for (let i = 0; i < nbCitations; i++) {
      const citation = {
        value: `${getRandomPart(this.generators, generator, 'part1')} ${getRandomPart(this.generators, generator, 'part2')} ${getRandomPart(this.generators, generator, 'part3')}`
      };
      this.citations.push(citation);
    }
  }
}
