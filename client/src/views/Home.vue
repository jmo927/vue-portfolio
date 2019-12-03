<template>
  <div class="home">
    <PageHeader txt="run ABOUT" />
    <!-- <img alt="J-Mo's Face" class="my-face" src="../assets/images/me.jpg" /> -->
    <p>
      <span class="text-area">
        <TermPath /> run about
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
  name: 'home',
  props: {
    isFirst: Boolean,
  },
  components: {
    PageHeader,
    TermPath,
  },
  data() {
    return {
      ogStr: 'This is Jason Moore, sometimes known as J-Mo.  He writes things.  Mostly code, but sometimes sonnets.',
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
      setTimeout(this.typeEffect, 40);
    },
  },
  created() {
    setTimeout(this.typeEffect, 800);
  },
};
</script>

<style scoped>
.home {
  display: block;
}
.my-face {
  border-radius: 20%;
  display: inline-block;
}

@media only screen and (min-width: 550px) {
  .home {
    display: block;
  }

  .my-face {
    display: none;
    /* border-radius: 20%; */
  }
}
</style>
