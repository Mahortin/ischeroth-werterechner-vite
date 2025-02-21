import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const simpleStore = defineStore('simple', {
  state: () => ({ count: 0, salary: 100, name: 'Eduardo', nickname: 'poor guy' }),
  getters: {
    doubleCount: (state) => state.count * 2,
    salaryInEuros: (state) => state.salary + ' €',
  },
  actions: {
    increment() {
      this.count++
    },
    getRich() {
      this.salary = 1000000000
      this.count++
      this.nickname = 'rich bitch!'
    },
    loseItAll() {
      this.salary = 0
      this.count++
      this.nickname = 'beggar -_-'
    },
  },
})
