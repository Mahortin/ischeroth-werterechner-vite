import { defineStore } from 'pinia'

export const characterStore = defineStore('characterStore', {
  state: () => ({
    attributes: [
      { key: 'kl', value: 8 },
      { key: 'in', value: 8 },
    ],
    skills: [
      { key: 'himmelskunde', value: 8, attributes: ['kl', 'in', 'in'] },
      { key: 'orientierung', value: 8, attributes: ['kl', 'in', 'in'] },
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
    setAttribute(key, newValue) {
      if (key === null) window.alert('attribute is null!')
      this.attributes.forEach((attribute) => {
        if (attribute.key === key) {
          attribute.value = newValue
          window.alert(attribute.key + ':' + attribute.value + newValue)
        }
      })
      this.calcSkills()
    },
    setAttributeViaObject(keyPair) {
      if (keyPair === null) window.alert('keyPair is null!')
      this.attributes.forEach((attribute) => {
        if (attribute.key === keyPair.key) {
          attribute.value = keyPair.value
          window.alert(attribute.key + ':' + attribute.value + keyPair)
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
        skill.value = (firstAttribute + secondAttribute + thirdAttribute) / 3
        // window.confirm('skill.value -> ' + skill.value)
      })
    },
  },
})
