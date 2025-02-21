import { defineStore } from 'pinia'

export const characterStore = defineStore('characterStore', {
  state: () => ({
    attributes: [
      { key: 'MU', name: 'Mut', value: 8, increased: 0 },
      { key: 'KL', name: 'Klugheit', value: 8, increased: 0 },
      { key: 'IN', name: 'Intuition', value: 8, increased: 0 },
      { key: 'CH', name: 'Charisma', value: 8, increased: 0 },
      { key: 'FF', name: 'Fingerfertigkeit', value: 8, increased: 0 },
      { key: 'GE', name: 'Gewandheit', value: 8, increased: 0 },
      { key: 'ST', name: 'Stärke', value: 8, increased: 0 },
      { key: 'KO', name: 'Konstitution', value: 8, increased: 0 },
    ],
    skills: [
      { key: 'himmelskunde', value: 8, attributes: ['KL', 'IN', 'IN'] },
      { key: 'orientierung', value: 8, attributes: ['KL', 'IN', 'IN'] },
    ],
  }),
  getters: {
    getAttributeValue: (state, key) => state.attributes.find((attribute) => attribute.key === key),
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
    setAttribute(key, newValue) {
      if (key === null) window.alert('attribute is null!')

      if (newValue > 16 || newValue < 8) newValue = newValue > 16 ? 16 : 8

      this.attributes.forEach((attribute) => {
        if (attribute.key === key) {
          attribute.value = newValue
          // window.alert(attribute.key + ':' + attribute.value + newValue)
        }
      })
      this.calcSkills()
    },
    increaseAttribute(key, newValue) {
      if (key === null) window.alert('attribute is null!')

      this.attributes.forEach((attribute) => {
        if (attribute.key === key) {
          attribute.increased = newValue
          // window.alert(attribute.key + ':' + attribute.value + newValue)
        }
      })
      this.calcSkills()
    },
    calcSkills() {
      this.skills.forEach((skill) => {
        // window.confirm('reached it -> ' + skill.attributes[0])
        var firstAttribute = this.attributes.find(
          (attribute) => attribute.key === skill.attributes[0],
        ).value
        // window.confirm('1st attribute -> ' + firstAttribute)
        var secondAttribute = this.attributes.find(
          (attribute) => attribute.key === skill.attributes[1],
        ).value
        // window.confirm('2nd attribute -> ' + secondAttribute)
        var thirdAttribute = this.attributes.find(
          (attribute) => attribute.key === skill.attributes[2],
        ).value
        // window.confirm('3rd attribute -> ' + thirdAttribute)
        skill.value = Math.round((firstAttribute + secondAttribute + thirdAttribute) / 3)
        // window.confirm('skill.value -> ' + skill.value)
      })
    },
  },
})
