<template>
  <div class="page-head">
    <TermPath />{{ txt }}
  </div>
</template>

<script>
import TermPath from '@/components/TermPath.vue';

export default {
  name: 'PageHeader',
  props: {
    txt: String,
  },
  components: {
    TermPath,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page-head:not(span){
    color: #a3e7fc;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 24px;
    font-weight: bold;
    margin: 20px;
    padding: 10px;
    display: block;
    border-bottom: solid 1px #ffd23f;
  }
</style>
