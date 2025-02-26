import { defineStore } from 'pinia'
import { characterStore } from './characterStore'

export const combatSkillStore = defineStore('combatSkillStore', {
  state: () => ({
    characterStore: characterStore(),
    skills: [
      {
        key: 'dolchFechtwaffen',
        name: 'Dolch & Fechtwaffen',
        attack: 8,
        defend: 8,
        hasDefendValue: true,
        attributesAttack: ['MU', 'FF', 'GE'],
        attributesDefend: ['IN', 'FF', 'GE'],
        divide: 3,
        increased: false,
        group: 'kampf',
      },
    ],
    groupfilter: [],
  }),

  getters: {
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
    getStore: (state) => {
      return state.characterStore.getValueByKey('MU')
    },
  },
  actions: {
    calcAllSkills() {
      this.skills.forEach((skill) => {
        this.calcSkill(skill)
      })
    },
    calcUpdatedSkills(key) {
      // window.confirm('reached combatSkillStore')
      this.skills.forEach((skill) => {
        if (!skill.attributesAttack.includes(key)) return
        this.calcSkill(skill)
      })
    },
    calcSkill(skill) {
      // window.confirm('reached calcSkill with: ' + skill.name)
      var firstAttribute = this.characterStore.attributes.find(
        (attribute) => attribute.key === skill.attributesAttack[0],
      )
      var secondAttribute = this.characterStore.attributes.find(
        (attribute) => attribute.key === skill.attributesAttack[1],
      )
      var thirdAttribute = this.characterStore.attributes.find(
        (attribute) => attribute.key === skill.attributesAttack[2],
      )
      // window.confirm('reached calcSkill after all attributes: ')

      if (
        firstAttribute.increased === 0 &&
        secondAttribute.increased === 0 &&
        thirdAttribute.increased === 0
      ) {
        // window.confirm('IF ')
        // window.confirm('firstAttribute -> ' + firstAttribute.name + ':' + firstAttribute.value)
        // window.confirm('secondAttribute -> ' + secondAttribute.name + ':' + secondAttribute.value)
        // window.confirm('thirdAttribute -> ' + thirdAttribute.name + ':' + thirdAttribute.value)
        skill.attack = Math.round(
          (firstAttribute.value + secondAttribute.value + thirdAttribute.value) / skill.divide,
        )
        // window.confirm('if 2')
        skill.increased = false
        // window.confirm('if 3')
      } else {
        // window.confirm('ELSE ')
        var baseValue = Math.round(
          (firstAttribute.value + secondAttribute.value + thirdAttribute.value) / skill.divide,
        )
        var value = Math.round(
          (firstAttribute.value +
            secondAttribute.value +
            thirdAttribute.value +
            firstAttribute.increased +
            secondAttribute.increased +
            thirdAttribute.increased) /
            skill.divide,
        )
        skill.attack = value
        skill.increased = value > baseValue ? true : false
      }
      // window.confirm('end ')
    },
  },
})
