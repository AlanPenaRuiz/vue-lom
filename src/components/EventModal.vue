<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div
          class="modal-container"
          v-bind:class="win ? 'backgroundGood' : 'backgroundBad'"
        >
          <div class="modal-header">
            <h2>{{ header }}</h2>
            <h3>{{ subheader }}</h3>
          </div>

          <div class="modal-body">
            <div id="score">
              Correct answers
              <span class="remark">
                {{ score }} out of
                {{ progress }}
              </span>
              questions.
            </div>
          </div>

          <div class="modal-footer">
            <button
              id="play-again"
              class="button-footer"
              @click="$emit('reset')"
            >
              Play Again
            </button>
            <button
              id="close-button"
              class="button-footer"
              @click="$emit('close')"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "EventModal",
  props: {
    header: String,
    subheader: String,
    score: Number,
    progress: Number,
    win: Boolean,
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 70%;
  height: 60%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: white;
  border-radius: 6px;
  font-size: 22px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.backgroundBad {
  background-image: url("../assets/img/bad.jpg");
  background-size: cover;
}
.backgroundGood {
  background-image: url("../assets/img/good.jpg");
  background-size: cover;
}

.modal-header {
  text-align: center;
}

.modal-header h2 {
  color: white;
}

.modal-header h3 {
  color: white;
}

.modal-body {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  line-height: 3rem;
}

.modal-body > * {
  margin: 1rem 0;
  padding: 0.25rem 0.5rem;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
}

.remark {
  border-radius: 4px;
  background-color: rgba(187, 0, 47, 0.3);
  padding: 0.25rem 0.5rem;
}

#score {
  background-color: rgb(241 241 241);
  border-radius: 5px;
  box-shadow: 2px 3px 9px gray;
  width: 100%;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
