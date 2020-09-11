<template>
    <div>
        <Form :generate-citations="generateCitations" />
        <Citations :citations="citations" />
    </div>
</template>

<script>

    import uniqid from 'uniqid';
    import {getRandomPart} from "./services/utils";
    import Citations from "./components/Citations";
    import Form from "./components/Form";

    export default {
        name: 'App',
        data() {
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
            Form,
            Citations
        },
        methods: {
            generateCitations(nbCitations, category) {
                this.citations = [];
                for (let i = 0; i < parseInt(nbCitations); i++) {
                    const citation = {
                        id: uniqid(),
                        value: `${getRandomPart(this.generators, category, 'part1')} ${getRandomPart(this.generators, category, 'part2')} ${getRandomPart(this.generators, category, 'part3')}`
                    };
                    this.citations.push(citation);
                }
            }
        }
    }
</script>

<style>
</style>
