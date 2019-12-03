<template>
  <div class="stats">
    <h3>{{ user }} Stats</h3>
    <h4>Attack: {{ attackScore }}</h4>
    <h4>Block: {{ blockScore }}</h4>
    <h4>Throw: {{ throwScore }}</h4>
    <br>
    <h4><span class="health-stat">Health</span>: {{ healthScore }}</h4>
    <br>
    <h4><span class="turn-stat">Move</span>: {{ move }}</h4>
    <h4><span class="turn-stat">Roll</span>: {{ roll }}</h4>
  </div>
</template>

<script>
export default {
  name: 'stats',
  props: {
    user: String,
    attackScore: Number,
    blockScore: Number,
    throwScore: Number,
    healthScore: Number,
    move: String,
    roll: Number,
  },
  data() {
    return {
      stuff: false,
    };
  },
  methods: {
    ding() {
      if (this.stuff) {
        // eslint-disable-next-line
        console.log(this.stuff);
      }
    },
  },
  created() {
    this.ding();
  },
};
</script>

<style scoped>
  h3 {
    font-weight: bold;
    font-size: 16px;
    padding-bottom: 5px;
  }
  h4 {
    font-weight: bold;
    font-size: 14px;
  }

  .health-stat {
    color: red;
  }

  .turn-stat {
      color: #ffd23f;
  }
</style>
