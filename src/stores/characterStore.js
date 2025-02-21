import { defineStore } from 'pinia'

export const characterStore = defineStore('characterStore', {
  state: () => ({
    attributes: [
      { key: 'kl', value: 8 },
      { key: 'in', value: 8 },
    ],
    skills: [
      { key: 'himmelskunde', value: 8 },
      { key: 'orientierung', value: 8 },
    ],
  }),
  getters: {
    // doubleCount: (state) => state.count * 2,
    // salaryInEuros: (state) => state.salary + ' €',
  },
  actions: {
    // increment() {
    //   this.count++
    // },
    // getRich() {
    //   this.salary = 1000000000
    //   this.count++
    //   this.nickname = 'rich bitch!'
    // },
    // loseItAll() {
    //   this.salary = 0
    //   this.count++
    //   this.nickname = 'beggar -_-'
    // },
    // updateSalary(newSalary) {
    //   this.salary = newSalary
    //   this.nickname = this.salary > 100 ? 'wealthy weasel' : 'broke barker'
    // },
  },
})
