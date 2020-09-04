<template>
  <form 
    name="form"
    @submit="submit"
  >
    <div class="row">
        <div class="col-lg-6 col-md-12 radios" style="text-align: center; margin-bottom: 5px;">
            <div class="radio">
                <input type="radio" name="categorie" value="generator1" id="type1">
                <label for="type1">type1</label>
            </div>
            <div class="radio">
                <input type="radio" name="categorie" value="generator2" id="type2">
                <label for="type2">type2</label>
            </div>
        </div>
    </div>
    <br>
    <div class="row">
        <div class="col-lg-4 col-md-12 radios" style="text-align: center; margin-bottom: 5px;">
            <div class="radio">
                <input type="radio" name="nbCitations" value="1" id="1">
                <label for="1">Un</label>
            </div>
            <div class="radio">
                <input type="radio" name="nbCitations" value="2" id="2">
                <label for="2">Deux</label>
            </div>
            <div class="radio">
                <input type="radio" name="nbCitations" value="3" id="3">
                <label for="3">Trois</label>
            </div>
            <div class="radio">
                <input type="radio" name="nbCitations" value="4" id="4">
                <label for="4">Quatre</label>
            </div>
            <div class="radio">
                <input type="radio" name="nbCitations" value="5" id="5">
                <label for="5">Cinq</label>
            </div>
        </div>

        <ul>
          <li 
            v-for="citation in citations" 
            :key="citation.id">{{citation.value}}</li>
        </ul>

        <button id="generate">Générer</button>

        <div class="playCitation" id="playCitation"></div>
        <div class="genreCitation" id="genreCitation"></div>
    </div>
  </form>
</template>

<script>

import uniqid from 'uniqid';

export default {
  name: 'App',
  data(){
    return {
      generators: {
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
      },
      citations: []
    }
  },
  components: {  
  },
  methods: {
    getRandomPart(categorie, key) {
      const max = this.generators[categorie][key].length;
      const idx = Math.floor(Math.random() * (max - 0));
      return this.generators[categorie][key][idx];
    },
    submit(e){
      e.preventDefault();
      const category = e.target.categorie.value;
      const nbCitations = e.target.nbCitations.value;
      this.citations = [];
      for(let i = 0; i < parseInt(nbCitations); i++){
          const citation = {
            id: uniqid(),
            value: `${this.getRandomPart(category, 'part1')} ${this.getRandomPart(category, 'part2')} ${this.getRandomPart(category, 'part3')}`
          };
          this.citations.push(citation);
      }    
    }

  }
}
</script>

<style>

  .radios {
    display: flex;
  }

</style>
