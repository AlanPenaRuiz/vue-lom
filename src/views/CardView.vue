<template>
  <div class="container-main">
    main
    <EventModal
      v-show="showModal"
      v-bind:header="ModalHeader"
      v-bind:subheader="ModalSubHeader"
      v-bind:score="score"
      v-bind:progress="questions.length"
      v-bind:win="win"
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
      <div
        class="game-score"
        @mouseover="isHovering = true"
        @mouseout="isHovering = false"
        v-bind:class="isHovering ? (win ? 'borderGreen' : '') : ''"
      >
        <h2>Score</h2>
        <h2>{{ score }}/{{ questions.length }}</h2>
      </div>
      <div class="btn-reset">
        <button class="button-footer" v-if="showReset" @click="reset">
          Restart <i class="fas fa-sync-alt"></i>
        </button>
        <button class="button-footer" v-if="ShowModalBtn" @click="openModal">
          Show Score <i class="fas fa-sync-alt"></i>
        </button>
      </div>
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
      win: false,
      isHovering: false,
      ModalHeader: "You Lose",
      ModalSubHeader: "Humanity will be exterminated!",
    };
  },
  created() {
    //Fetch questions db
    EventService.getEvents()
      .then((response) => {
        this.questions = response.data.results;
      })
      .catch((error) => {
        console.log(error);
        //Redirect to NotFound when search unknow subdomains
        this.$router.push({
          name: "404Resource",
          params: { resource: "event" },
        });
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
      if (this.next) {
        return;
      }
      this.progress = this.progress + 100 / this.questions.length;
      this.x++;
      this.y++;
      this.select = false;
      this.correct = false;
    },
    openModal() {
      if (this.score >= this.questions.length * 0.7) {
        (this.ModalHeader = "Congratulations!"),
          (this.ModalSubHeader = "You have saved humanity!"),
          (this.win = true);
      }
      this.showModal = true;
    },
    // Reset data
    reset() {
      Object.assign(this.$data, this.initialState());
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
        win: false,
        ModalHeader: "You Lose",
        ModalSubHeader: "Humanity will be exterminated!",
      };
    },
  },
  watch: {
    progress: function (progress) {
      if (this.score >= this.questions.length * 0.7) {
        this.win = true;
      }
      //Call modal when finish
      if (progress >= 100) {
        this.showReset = true;
        this.ShowModalBtn = true;
        this.openModal();
      }
    },
  },
};
</script>
