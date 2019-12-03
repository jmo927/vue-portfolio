<template>
  <div class="error-page">
    <PageHeader txt="Error"/>
    <p>
      <!-- eslint-disable-next-line -->
      Unknown command.  Try 'run about', etc.
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue';

export default {
  name: 'errorPage',
  components: {
    PageHeader,
  },
};
</script>
