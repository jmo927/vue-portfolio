<template>
  <div class="contact">
    <PageHeader txt="contact"/>
    <p>
      <!-- eslint-disable-next-line -->
      The best way to reach me is by email, but any of the below links will work.  Let's build something together!
    </p>
    <a href="https://www.linkedin.com/in/jmo927/" target="_blank">
      <img class="social-img" src="../assets/images/linkedin.png" />
    </a>
    <a href="https://github.com/jmo927" target="_blank">
      <img class="social-img" src="../assets/images/github-light.png" />
    </a>
    <a href="mailto:jrmoore927@gmail.com">
      <img class="social-img" src="../assets/images/email.png" />
    </a>
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue';

export default {
  name: 'contact',
  components: {
    PageHeader,
  },
};
</script>

<style scoped>
  a {
    color: #ffd23f;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 14px;
    font-weight: bold;
    padding: 10px;
  }

  .social-img {
    max-width: 65px;
  }
</style>
