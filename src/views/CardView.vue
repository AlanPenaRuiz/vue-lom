<template>
  <div class="container-main">
    main
    <EventModal
      v-show="showModal"
      v-bind:header="ModalHeader"
      v-bind:subheader="ModalSubHeader"
      v-bind:score="score"
      v-bind:progress="questions.length"
      @close="showModal = false"
      @reset="reset"
    />
    <div class="container-game">
      <div class="game-header">
        <h1>LOM</h1>
      </div>
      <div class="progress" :style="{ width: progress + '%' }"></div>
      <div
        class="game-main"
        v-for="(question, index) in questions.slice(x, y)"
        :key="index"
      >
        <div class="game-question">
          <h2>Question {{ y }}/{{ questions.length }}</h2>
          <p>{{ question.question }}</p>
        </div>
        <div class="game-answers">
          <ul>
            <li
              v-for="(item, index) in question.answers"
              :key="index"
              class="li"
              v-on:click="selectAnswer(item, index)"
              :class="correct ? check(item) : ''"
            >
              {{ item.answer }}
              <div
                class="fas fa-check"
                v-if="correct ? item.correct : ''"
              ></div>
              <div
                class="fas fa-times"
                v-if="correct ? !item.correct : ''"
              ></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="game-score">
        <h2>Score</h2>
        <h2>{{ score }}/{{ questions.length }}</h2>
        <div class="btn-reset">
          <button v-if="showReset" @click="reset">
            Restart <i class="fas fa-sync-alt"></i>
          </button>
          <button v-if="ShowModalBtn" @click="openModal">
            Show Score <i class="fas fa-sync-alt"></i>
          </button>
        </div>
      </div>
      <div class="game-footer"></div>
    </div>
  </div>
</template>

<script>
import EventService from "../services/EventService";
import EventModal from "../components/EventModal.vue";

export default {
  name: "CardView",
  components: {
    EventModal,
  },
  data() {
    return {
      questions: [],
      x: 0,
      y: 1,
      select: false,
      score: 0,
      correct: false,
      progress: 0,
      next: true,
      showReset: false,
      showModal: false,
      ShowModalBtn: false,
      ModalHeader: "You Lose",
      ModalSubHeader: "Humanity will be exterminated!",
    };
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.questions = response.data;
        //console.log("events:", this.questions);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    selectAnswer(e) {
      this.select = true;
      this.next = false;
      this.correct = true;
      if (e.correct) {
        this.score++;
      }
      setTimeout(() => {
        this.nextQuestion();
      }, 3000);
    },
    check(status) {
      if (status.correct) {
        return "correct";
      } else {
        return "incorrect";
      }
    },
    nextQuestion() {
      //console.log(this.x, this.y);
      if (this.next) {
        return;
      }
      this.progress = this.progress + 100 / this.questions.length;
      //console.log(this.progress);
      this.x++;
      this.y++;
      this.select = false;
      this.correct = false;
    },
    openModal() {
      if (this.score > this.questions.length * 0.8) {
        (this.ModalHeader = "Congratulations!"),
          (this.ModalSubHeader = "You have saved humanity!");
      }
      this.showModal = true;
    },
    reset() {
      Object.assign(this.$data, this.initialState()); // reset data in vue
    },
    initialState() {
      return {
        x: 0,
        y: 1,
        select: false,
        score: 0,
        correct: false,
        progress: 0,
        next: true,
        showReset: false,
        showModal: false,
        ShowModalBtn: false,
      };
    },
  },
  watch: {
    progress: function (progress) {
      if (progress > 100) {
        this.showReset = true;
        this.ShowModalBtn = true;
      }
    },
  },
};
</script>
