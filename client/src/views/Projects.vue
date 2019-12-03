<template>
  <div class="projects">
    <PageHeader txt="run projects"/>
    <p>
      <span class="text-area">
        <TermPath /> run projects
        <br><br>
        Initializing...
        <br><br>
          {{ typeStuff.outputStr }}
      </span>
      <span class="cursor">&nbsp;</span>
    </p>
    <div id="card-wrap" v-if="typeStuff.showProjects">
      <ProjectCard v-for="(item, index) in projects" :item="item" :key="index" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { setTimeout } from 'timers';
import PageHeader from '@/components/PageHeader.vue';
import TermPath from '../components/TermPath.vue';
import ProjectCard from '../components/ProjectCard.vue';

export default {
  name: 'projects',
  components: {
    PageHeader,
    TermPath,
    ProjectCard,
  },
  data() {
    return {
      typeStuff: {
        ogStr: 'This is a partial list of the projects J-Mo has done.  Most of them were built with the MERN stack (Mongo/MySQL, Express, React, Node).  All of them were built with love.',
        outputStr: '',
        runCount: 0,
        i: 0,
        showProjects: false,
      },
      projects: [
        {
          name: 'Best Lyfe',
          gitUrl: 'https://github.com/jmo927/best-lyfe',
          liveUrl: 'https://best-lyfe.herokuapp.com/',
          bodyText: 'Habit tracking app to help users live their Best Lyfe.  Built with MERN stack. Login with test@test.com / test',
          imgUrl: '[insert img path]',
        },
        {
          name: 'Portfolio',
          gitUrl: 'https://github.com/jmo927/vue-portfolio',
          liveUrl: '[need a live link]',
          bodyText: 'The site you are currently visiting.  Have you found the game yet?  Built with Vue.js',
          imgUrl: '[insert img path]',
        },
        {
          name: 'Random Table Builder',
          gitUrl: 'https://github.com/jmo927/table-builder',
          liveUrl: 'https://random-table-builder.herokuapp.com/',
          bodyText: 'Build and roll on random tables for all your table-top gaming needs.  Built with the MERN stack. Login with test@test.com / test',
          imgUrl: '[insert img path]',
        },
      ],
    };
  },
  methods: {
    typeEffect() {
      const info = this.typeStuff;
      // tippy tappy typy
      if (info.i < info.ogStr.length) {
        info.outputStr += info.ogStr.charAt(info.i);
        info.i += 1;
        setTimeout(this.typeEffect, 10);
      } else {
        setTimeout(() => {
          info.showProjects = true;
        }, 250);
      }
    },
  },
  created() {
    setTimeout(this.typeEffect, 800);
  },
};
</script>

<style scoped>
  #card-wrap {
    display: flex;
    justify-content: space-around;
  }
</style>
