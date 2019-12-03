<template>
  <div class="projects">
    <PageHeader txt="run projects"/>
    <p>
      <span class="text-area">
        <TermPath /> run projects
        <br><br>
        Initializing...
        <br><br>
          {{ outputStr }}
      </span>
      <span class="cursor">&nbsp;</span>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import { setTimeout } from 'timers';
import PageHeader from '@/components/PageHeader.vue';
import TermPath from '../components/TermPath.vue';

export default {
  name: 'projects',
  components: {
    PageHeader,
    TermPath,
  },
  data() {
    return {
      ogStr: 'This is where a list of projects by J-Mo will be found once he is done coding it.',
      outputStr: '',
      runCount: 0,
      i: 0,
    };
  },
  methods: {
    typeEffect() {
      // tippy tappy typy
      if (this.i < this.ogStr.length) {
        this.outputStr += this.ogStr.charAt(this.i);
        this.i += 1;
      }
      setTimeout(this.typeEffect, 10);
    },
  },
  created() {
    setTimeout(this.typeEffect, 800);
  },
};
</script>
