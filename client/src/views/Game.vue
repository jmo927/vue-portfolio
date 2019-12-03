<template>
    <div class="game">
        <PageHeader txt="run game"/>
        <TermPath /> run game
        <br><br>
        Initializing...
        <br><br>
        <div id = "scoreboard">
            <GameStats user="Player"
              v-bind:attackScore="player.attack"
              v-bind:blockScore="player.block"
              v-bind:throwScore="player.throw"
              v-bind:healthScore="player.health"
              v-bind:move="player.move"
              v-bind:roll="player.roll" />
            <div class="game-score">
              <h3>Wins:</h3>
              {{ gameState.winScore }}
              <br>
              <h3>Losses:</h3>
              {{ gameState.lossScore }}
            </div>
            <GameStats user="Opponent"
              v-bind:attackScore="opponent.attack"
              v-bind:blockScore="opponent.block"
              v-bind:throwScore="opponent.throw"
              v-bind:healthScore="opponent.health"
              v-bind:move="opponent.move"
              v-bind:roll="opponent.roll" />
        </div>
        <br><br>
        <div id = "game-details" ref = "game-deets">
            <!-- <p v-for="(msg, idx) in gameState.messages" :key="idx">{{ msg }}</p> -->
            {{ gameState.message }}
        </div>
        <br><br>
        <div class="input-area">
            <button
                class="input-btn"
                data-movebtn="attack"
                @click="moveButtonOnClick">
                Attack
            </button>
            <button
                class="input-btn"
                data-movebtn="block"
                @click="moveButtonOnClick">
                Block
            </button>
            <button
                class="input-btn"
                data-movebtn="throw"
                @click="moveButtonOnClick">
                Throw
            </button>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue';
import TermPath from '@/components/TermPath.vue';
import GameStats from '@/components/GameStats.vue';

export default {
  name: 'game',
  components: {
    PageHeader,
    TermPath,
    GameStats,
  },
  data() {
    return {
      player: {
        attack: -1,
        block: -1,
        throw: -1,
        health: -1,
        statPool: 6,
        move: '',
        roll: 0,
      },
      opponent: {
        attack: -1,
        block: -1,
        throw: -1,
        health: -1,
        statPool: 6,
        move: '',
        roll: 0,
      },
      gameState: {
        winScore: 0,
        lossScore: 0,
        turn: 1,
        isPlaying: true,
        message: '',
      },
      movebtn: 'defaultvalue',
    };
  },
  methods: {
    generateOpponent() {
      // randomly assign stats for an opponent
      const opp = this.opponent;
      if (opp.statPool > 0) {
        const tmp = Math.floor(Math.random() * 4);
        switch (tmp) {
          case 0:
            opp.attack += 1;
            break;
          case 1:
            opp.block += 1;
            break;
          case 2:
            opp.throw += 1;
            break;
          case 3:
            opp.health += 1;
            break;
          default:
            break;
        }
        opp.statPool -= 1;
        this.generateOpponent();
      } else {
        opp.health += 20;
        this.generatePlayer();
      }
    },
    generatePlayer() {
      // Player adds to stats from statPool using buttons
      // randomly assign stats for now/testing
      const your = this.player;
      if (your.statPool > 0) {
        const tmp = Math.floor(Math.random() * 4);
        switch (tmp) {
          case 0:
            your.attack += 1;
            break;
          case 1:
            your.block += 1;
            break;
          case 2:
            your.throw += 1;
            break;
          case 3:
            your.health += 1;
            break;
          default:
            break;
        }
        your.statPool -= 1;
        this.generatePlayer();
      } else {
        your.health += 20;
        this.gameState.message = 'Ready whenever.';
      }
    },
    gamePlay() {
      const your = this.player;
      const opp = this.opponent;
      const game = this.gameState;
      game.message = '';
      const actions = ['attack', 'block', 'throw'];

      opp.move = actions[Math.floor(Math.random() * 3)];

      opp.roll = Math.floor(Math.random() * 10) + 1 + opp[opp.move];

      your.roll = Math.floor(Math.random() * 10) + 1 + your[opp.move];

      this.checkTurn();
    },
    checkTurn() {
      const your = this.player;
      const opp = this.opponent;
      // const game = this.gameState;

      switch (your.move) {
        case 'attack':
          this.handleAttack();
          break;
        case 'block':
          this.handleBlock();
          break;
        case 'throw':
          this.handleThrow();
          break;
        default:
          break;
      }
      // eslint-disable-next-line
      // if ((your.move === 'attack' && opp.move === 'throw') || (your.move === 'block' && opp.move === 'attack') || (your.move === 'throw' && opp.move === 'block')) {
      //   opp.health -= your.roll;
      //   game.message += 'You Won the round!';
      // } else if (opp.move === your.move) {
      //   // tie goes to the high roller
      //   if (your.roll > opp.roll) {
      //     opp.health -= your.roll - opp.roll;
      //     game.message += 'Tie goes to the highest roller...You!';
      //   } else if (opp.roll > your.roll) {
      //     your.health -= opp.roll;
      //     // eslint-disable-next-line
      //     game.message += 'Tie goes to the highest roller...Your opponent!';
      //   } else {
      //     // eslint-disable-next-line
      //     game.message += `\nTie!\n-----`;
      //   }
      // } else {
      //   your.health -= opp.roll;
      //   // eslint-disable-next-line
      //   game.message += 'Your Opponent Won the round!';
      // }

      // Did someone win?
      if (your.health > 0 && opp.health > 0) {
        // do nothing
      } else {
        this.checkWin();
      }
    },
    handleAttack() {
      const opp = this.opponent;
      const your = this.player;
      const game = this.gameState;

      switch (opp.move) {
        case 'attack':
          if (opp.roll > your.roll) {
            your.health -= opp.roll;
            game.message = `Your opponent also Attacks, but they were a bit faster.  You lose ${opp.roll} health.`;
          } else if (opp.roll < your.roll) {
            opp.health -= your.health;
            game.message = `Your opponent also Attacks, but you were a bit faster.  They lose ${your.roll} health.`;
          } else {
            game.message = `Your opponent also Attacks, and you hit each other, each losing ${your.roll} health.`;
          }
          break;
        case 'block':
          game.message = 'Your opponent blocked your attack and took no damage!';
          break;
        case 'throw':
          opp.health -= your.roll;
          game.message = `Your opponent attempted to throw you, but you hit for ${your.roll} damage!`;
          break;
        default:
          break;
      }
    },
    handleBlock() {
      const opp = this.opponent;
      const your = this.player;
      const game = this.gameState;

      switch (opp.move) {
        case 'attack':
          game.message = 'Your opponent attacked, but you blocked all damage!';
          break;
        case 'block':
          game.message = 'You both blocked.  Which is smart, but a little boring, if I do say so myself.';
          break;
        case 'throw':
          your.health -= opp.roll;
          game.message = `Your opponent attempted to throw you. You stood there and let it happen, taking ${opp.roll} damage!`;
          break;
        default:
          break;
      }
    },
    handleThrow() {
      const opp = this.opponent;
      const your = this.player;
      const game = this.gameState;

      switch (opp.move) {
        case 'throw':
          if (opp.roll > your.roll) {
            your.health -= opp.roll;
            game.message = `Your opponent also Throws, but they were a bit faster.  You lose ${opp.roll} health.`;
          } else if (opp.roll < your.roll) {
            opp.health -= your.health;
            game.message = `Your opponent also Throws, but you were a bit faster.  They lose ${your.roll} health.`;
          } else {
            game.message = 'Your opponent also Throws, but it was too clumsy for anyone to have taken any damage.';
          }
          break;
        case 'block':
          game.message = 'Your opponent blocked your attack and took no damage!';
          break;
        case 'attack':
          your.health -= opp.roll;
          game.message = `Your opponent Attacked you, but you hit for ${your.roll} damage!`;
          break;
        default:
          break;
      }
    },
    checkWin() {
      // stuff
      const game = this.gameState;
      game.isPlaying = false;
      if (this.player.health > this.opponent.health) {
        game.message = 'You won!';
        game.winScore += 1;
      } else {
        game.message = 'They won.';
        game.lossScore += 1;
      }
      setTimeout(this.gameReset, 3000);
    },
    gameReset() {
      // Resets Values
      const your = this.player;
      const opp = this.opponent;

      your.attack = -1;
      your.block = -1;
      your.throw = -1;
      your.health = -1;
      your.statPool = 6;
      your.move = '';
      your.roll = 0;

      opp.attack = -1;
      opp.block = -1;
      opp.throw = -1;
      opp.health = -1;
      opp.statPool = 6;
      opp.move = '';
      opp.roll = 0;

      this.gameState.isPlaying = true;

      this.generateOpponent();
    },
    statButtonOnClick(e) {
      e.preventDefault();
      // edit stats
    },
    moveButtonOnClick(e) {
      e.preventDefault();
      if (this.gameState.isPlaying) {
        const newMove = e.target.dataset.movebtn;
        this.player.move = newMove;
        this.gamePlay();
      } else {
        this.gameState.message = 'Hold on there, sailor.';
      }
    },
  },
  created() {
    this.generateOpponent();
  },
};
</script>

<style scoped>
  #scoreboard {
    display: flex;
    justify-content: space-around;
  }
  #game-details {
      max-height: 400px;
      /* overflow: auto; */
  }
  .game-score {
      text-align: center;
  }
</style>
