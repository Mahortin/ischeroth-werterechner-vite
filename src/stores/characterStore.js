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
    increment() {
      this.attributes.forEach((attribute) => {
        attribute.value++
      })
      this.calcSkills()
    },
    calcSkills() {
      this.skills.forEach((skill) => {
        this.attributes.find((attribute) => attribute.key === 'kl')
        var firstAttribute = this.attributes.find((attribute) => attribute.key === 'kl').value
        var secondAttribute = this.attributes.find((attribute) => attribute.key === 'in').value
        skill.value = (firstAttribute * 2 + secondAttribute) / 3
      })
    },
  },
})
