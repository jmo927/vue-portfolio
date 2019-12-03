<template>
  <div id="app">
    <div id="nav">
      <img alt="J-Mo's Face" class="profile-pic" src="./assets/images/me.jpg" />
      <div id="nav-content">
        <div id="nav-header">
          <h2>J-Mo: Codes</h2>
        </div>
        <div id="opening-animation" v-if="isFirstTime">
          {{ outputStr }}
        </div>
        <div id="nav-links" v-else>
          <router-link to="/">about</router-link>
          <!-- <router-link to="/contact">contact</router-link> -->
          <router-link to="/projects">projects</router-link>
          <router-link to="/blog">blog</router-link>
          <!-- <router-link to="/game">game</router-link> -->
        </div>
      </div>
    </div>
   <!-- Where the Content get's displayed -->
    <div id="content-view">
    <div v-if="isFirstTime">Loading...</div>
      <router-view v-else/>
      <br>
      <div id="term-input-wrapper">
        <TermPath />
        <input type="text"
          name="term-input"
          id="term-input"
          v-model="termInput"
          v-on:keyup.enter="termRouting">
      </div>
    </div>
  </div>
</template>

<script>
import TermPath from '@/components/TermPath.vue';

export default {
  components: {
    TermPath,
  },
  data() {
    return {
      ogStr: '',
      outputStr: '',
      options: ['run', ' blog ', ' portfolio', 'game', ' about'],
      runCount: 0,
      i: 0,
      // FALSE IN DEV, TRUE IN PROD FIX THIS YOU DUMB DUMB
      isFirstTime: false,
      // stuff
      termInput: '',
    };
  },
  methods: {
    typeEffect() {
      // tippy tappy typy
      if (this.i < this.ogStr.length) {
        this.outputStr += this.ogStr.charAt(this.i);
        this.i += 1;
      } else {
        this.i = 0;
        this.runCount += 1;
        // return;
      }

      if (this.isFirstTime) {
        this.openingAnimation();
      } else if (this.runCount < this.options.length) {
        setTimeout(this.typeEffect, 10);
      }
    },
    deleteEffect() {
      const breakPoint = this.outputStr.indexOf(' ');

      this.outputStr = this.outputStr.substring(0, this.i);
      this.i -= 1;

      if (this.i === breakPoint) {
        this.runCount += 1;
        this.i = 0;
        this.openingAnimation();
      } else if (this.i > breakPoint) {
        setTimeout(this.deleteEffect, 50);
      }
    },
    openingAnimation() {
      switch (this.runCount) {
        case 0:
          // eslint-disable-next-line
          this.ogStr = this.options[0];
          setTimeout(this.typeEffect, 50);
          break;
        case 1:
          // eslint-disable-next-line
          this.ogStr = this.options[1];
          setTimeout(this.typeEffect, 50);
          break;
        case 2:
          this.i = this.outputStr.length;
          setTimeout(this.deleteEffect, 400);
          break;
        case 3:
          // eslint-disable-next-line
          this.ogStr = this.options[2];
          setTimeout(this.typeEffect, 50);
          break;
        case 4:
          this.i = this.outputStr.length;
          setTimeout(this.deleteEffect, 400);
          break;
        case 5:
          // eslint-disable-next-line
          this.ogStr = this.options[3];
          setTimeout(this.typeEffect, 50);
          break;
        case 6:
          this.i = this.outputStr.length;
          setTimeout(this.deleteEffect, 400);
          break;
        case 7:
          // eslint-disable-next-line
          this.ogStr = this.options[4];
          setTimeout(this.typeEffect, 50);
          break;
        default:
          this.isFirstTime = false;
          setTimeout(this.typeEffect, 500);
          break;
      }
    },
    termRouting() {
      const routePath = this.$router.history.current.name;

      switch (this.termInput) {
        // game cases
        case 'run game':
          this.$router.push('/game');
          break;
        case 'run g':
          this.$router.push('/game');
          break;
        case 'game':
          this.$router.push('/game');
          break;
        // about cases
        case 'run about':
          this.$router.push('/');
          break;
        case 'run a':
          this.$router.push('/');
          break;
        case 'about':
          this.$router.push('/');
          break;
        // projects cases
        case 'run projects':
          this.$router.push('/projects');
          break;
        case 'run p':
          this.$router.push('/projects');
          break;
        case 'projects':
          this.$router.push('/projects');
          break;
        // blog cases
        case 'run blog':
          this.$router.push('/blog');
          break;
        case 'run b':
          this.$router.push('/blog');
          break;
        case 'blog':
          this.$router.push('/blog');
          break;
        default:
          this.$router.push('/error');
      }
      // if (this.termInput === 'run game') {
      //   this.$router.push('/game');
      // }

      if (routePath === 'game') {
        // eslint-disable-next-line
        console.log(this.termInput);
      }

      this.termInput = '';
    },
  },
  created() {
    this.openingAnimation();
  },
};

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans|Montserrat&display=swap');

h2 {
  margin: 5px;
  padding: 5px;
  font-size: 24px;
  font-weight: bold;
}

p {
  padding: 0px 15px 10px 15px;
}

.profile-pic {
  display: none;
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #1f271b;
  color: #f3fcf0;
  height: 100vh;
}

#content-view {
  max-width: 700px;
  padding: 15px;
  margin: 50px;
  border: 1px solid #f3fcf0;
}

#nav {
  padding: 10px;
  background-color: #00a7e1;
  display: block;
  box-shadow: 0px 1px 5px white;
}

#nav a {
  font-weight: bold;
  color: #f3fcf0;
  font-size: 14px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #ffd23f;
  font-weight: bolder;
}

#nav-content {
  flex-grow: 2;
  font-family: 'Josefin Sans', sans-serif;
  color: #1f271b;
  text-align: center;
}

#nav-links {
  /* flex-grow: 2; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-family: 'Montserra', sans-serif;
}

#term-input {
  background-color: grey;
  border: 0px;
  max-width: 600px;
}

/* Non-Mobile Screens */
@media only screen and (min-width: 550px) {
    h2 {
      padding: 15px;
    }

    .profile-pic {
      display: block;
      border-radius: 20%;
      max-height: 100px;
    }

    /* #app {
      display: flex;
    } */

    #nav {
      display: flex;
    }

    #nav a {
      font-weight: bold;
      color: #f3fcf0;
      font-size: 14px;
      padding: 0px 15px;
    }
  }

  /* Full Size Screen */
  /* @media only screen and (min-width: 500px) {
    .profile-pic {
      margin: 50px 0px;
    }
    #app {
      display: flex;
      height: 100vh;
      margin: 0px;
      padding: 0px;
      align-items: center;
    }
    #nav {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      max-width: 110px;
    }
    #nav a {
      font-weight: bold;
      color: #f3fcf0;
      font-size: 14px;
      padding: 15px 5px;
    }
    #nav-links {
      flex-direction: column;
      justify-content: space-between;
    }
  } */
</style>
