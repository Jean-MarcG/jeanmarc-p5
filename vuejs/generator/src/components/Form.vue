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

            <button id="generate">Générer</button>

        </div>
    </form>
</template>

<script>
    export default {
        name: "Form",
        props : {
            generateCitations: Function
        },
        methods: {
            submit(e){
                e.preventDefault();
                const category = e.target.categorie.value;
                const nbCitations = e.target.nbCitations.value;
                this.generateCitations(nbCitations, category);
            }
        }
    }
</script>

<style scoped>
    .radios {
        display: flex;
    }
</style>
