<template>
    <div class="project-card">
        <h3>{{ item.name }}</h3>
        <br>
        <p>
            {{ item.bodyText }}
        </p>
        <br>
        <a :href="''+item.gitUrl+''" target="_blank">GitHub</a>
        <br>
        <a :href="''+item.liveUrl+''" target="_blank">Live</a>
    </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: ['item'],
//   data() {
//     return {
//         name: item.name,
//     },
//   },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    a {
        color: #ffd23f;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    h3 {
        color: #00a7e1;
        font-weight: bold;
    }

    .project-card {
        border: 2px dashed #f3fcf0;
        padding: 6px;
        max-width: 250px;
        text-align: center;
        margin: 15px;
    }
</style>
