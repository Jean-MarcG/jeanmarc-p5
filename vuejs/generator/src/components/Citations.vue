<template>
    <ul>
        <li
            v-for="citation in citations"
            :key="citation.id">{{citation.value}}
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Citations",
        props: {
            citations: Array,
        }
    }
</script>

<style scoped>

    ul {
        list-style: none;
        padding: 0;
    }

</style>
