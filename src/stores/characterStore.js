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
      {
        key: 'himmelskunde',
        name: 'Himmelskunde',
        value: 8,
        attributes: ['KL', 'IN', 'IN'],
        increased: false,
        group: 'natur',
      },
      {
        key: 'orientierung',
        name: 'Orientierung',
        value: 8,
        attributes: ['KL', 'IN', 'IN'],
        increased: false,
        group: 'natur',
      },
      {
        key: 'bootSeefahrt',
        name: 'Boot- & Seefahrt',
        value: 8,
        attributes: ['IN', 'GE', 'ST'],
        increased: false,
        group: 'handwerk',
      },
      {
        key: 'kampf',
        name: 'Kampf',
        value: 8,
        attributes: ['ST', 'ST', 'KO'],
        increased: false,
        group: 'kampf',
      },
      {
        key: 'gesellschaft',
        name: 'Gesellschaft',
        value: 8,
        attributes: ['ST', 'ST', 'KO'],
        increased: false,
        group: 'gesellschaft',
      },
      {
        key: 'wissen',
        name: 'Wissen',
        value: 8,
        attributes: ['KL', 'KL', 'IN'],
        increased: false,
        group: 'wissen',
      },
    ],
    skillgroups: [
      { key: 'kampf', name: 'Kampf' },
      { key: 'körper', name: 'Körper' },
      { key: 'gesellschaft', name: 'Gesellschaft' },
      { key: 'natur', name: 'Natur' },
      { key: 'wissen', name: 'Wissen' },
      { key: 'handwerk', name: 'Handwerk' },
    ],
    groupfilter: [],
  }),

  getters: {
    getAttributeValue: (state, key) => state.attributes.find((attribute) => attribute.key === key),
    getBaseAttributeValue: (state, key) =>
      state.attributes.find((attribute) => attribute.key === key),
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId)
    },
    getValueByKey: (state) => {
      return (attributeKey) =>
        state.attributes.find((attribute) => attribute.key === attributeKey).value +
        state.attributes.find((attribute) => attribute.key === attributeKey).increased
    },
    getFilteredSkills: (state) => {
      return state.groupfilter.length === 0
        ? state.skills
        : state.skills.filter((skill) =>
            !state.groupfilter.includes('increased')
              ? state.groupfilter.includes(skill.group)
              : state.groupfilter.length === 1
                ? skill.increased
                : skill.increased && state.groupfilter.includes(skill.group),
          )
    },
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
      this.calcUpdatedSkills(key)
    },
    increaseAttribute(key, newValue) {
      if (key === null) window.alert('attribute is null!')

      this.attributes.forEach((attribute) => {
        if (attribute.key === key) {
          attribute.increased = attribute.increased === newValue ? 0 : newValue
          // window.alert(attribute.key + ':' + attribute.value + newValue)
        }
      })
      this.calcAllSkills()
    },
    resetFilter() {
      this.groupfilter = []
    },
    addFilter(key) {
      if (key === null) window.alert('group is null!')

      !this.groupfilter.includes(key)
        ? this.groupfilter.push(key)
        : this.groupfilter.splice(this.groupfilter.indexOf(key))
    },
    addToAttribute(key, adjustment) {
      if (key === null) window.alert('attribute is null!')

      this.attributes.forEach((attribute) => {
        if (attribute.key === key) {
          attribute.value = attribute.value + adjustment
          if (attribute.value > 16 || attribute.value < 8)
            attribute.value = attribute.value > 16 ? 16 : 8
          // window.alert(attribute.key + ':' + attribute.value + newValue)
        }
      })
      this.calcAllSkills()
      this.calcUpdatedSkills(key)
    },
    calcAllSkills() {
      this.skills.forEach((skill) => {
        this.calcSkill(skill)
      })
    },
    calcUpdatedSkills(key) {
      this.skills.forEach((skill) => {
        if (!skill.attributes.includes(key)) return
        this.calcSkill(skill)
      })
    },
    calcSkill(skill) {
      var firstAttribute = this.attributes.find(
        (attribute) => attribute.key === skill.attributes[0],
      )
      var secondAttribute = this.attributes.find(
        (attribute) => attribute.key === skill.attributes[1],
      )
      var thirdAttribute = this.attributes.find(
        (attribute) => attribute.key === skill.attributes[2],
      )

      if (
        firstAttribute.increased === 0 &&
        secondAttribute.increased === 0 &&
        thirdAttribute.increased === 0
      ) {
        skill.value = Math.round(
          (firstAttribute.value + secondAttribute.value + thirdAttribute.value) / 3,
        )
        skill.increased = false
        // skill.value = (firstAttribute.value + secondAttribute.value + thirdAttribute.value) / 3
      } else {
        var baseValue = Math.round(
          (firstAttribute.value + secondAttribute.value + thirdAttribute.value) / 3,
        )
        var value = Math.round(
          (firstAttribute.value +
            secondAttribute.value +
            thirdAttribute.value +
            firstAttribute.increased +
            secondAttribute.increased +
            thirdAttribute.increased) /
            3,
        )
        // var baseValue = (firstAttribute.value + secondAttribute.value + thirdAttribute.value) / 3

        // var value =
        //   (firstAttribute.value +
        //     secondAttribute.value +
        //     thirdAttribute.value +
        //     firstAttribute.increased +
        //     secondAttribute.increased +
        //     thirdAttribute.increased) /
        //   3

        skill.value = value
        skill.increased = value > baseValue ? true : false
      }
    },
  },
})
