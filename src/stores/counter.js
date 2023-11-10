import { defineStore } from "pinia";

export const useCounterStore = defineStore("CounterStore", {
  state: () => ({
    count: 0,
  }),

  actions: {
    increment(value = 1) {
      this.count += value;
    },

    decrement(value = 1) {
      this.count -= value;
    },

    async addAndAwait(value = 1) {
      setTimeout(() => {
        this.count += value;
      }, 1000);
    },
  },
});
