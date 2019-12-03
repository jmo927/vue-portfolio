<template>
  <div class="blog">
    <PageHeader txt="Blarg"/>
    <p>
      <!-- eslint-disable-next-line -->
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, totam id quos optio voluptates, debitis eos autem sapiente ipsam labore quidem? Commodi iure officia architecto, autem debitis numquam ab delectus?
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue';

export default {
  name: 'blog',
  components: {
    PageHeader,
  },
};
</script>
