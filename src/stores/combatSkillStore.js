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
        isMelee: true,
        attributes: ['MU', 'IN', 'FF', 'GE'],
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
        if (!skill.attributes.includes(key)) return
        this.calcSkill(skill)
      })
    },
    calcSkill(skill) {
      if (skill.isMelee) this.calcMeleeSkill(skill)
      else this.calcRangedSkill(skill)
    },
    calcMeleeSkill(skill) {
      // window.confirm('reached calcSkill with: ' + skill.name)
      var muAttribute = this.characterStore.attributes.find(
        (attribute) => attribute.key === skill.attributes[0],
      )
      var inAttribute = this.characterStore.attributes.find(
        (attribute) => attribute.key === skill.attributes[1],
      )
      var firstAttribute = this.characterStore.attributes.find(
        (attribute) => attribute.key === skill.attributes[2],
      )
      var secondAttribute = this.characterStore.attributes.find(
        (attribute) => attribute.key === skill.attributes[3],
      )
      // window.confirm('reached calcSkill after all attributes: ')

      /* calculate attack value */
      if (
        muAttribute.increased === 0 &&
        firstAttribute.increased === 0 &&
        secondAttribute.increased === 0
      ) {
        // window.confirm('IF ')
        // window.confirm('firstAttribute -> ' + firstAttribute.name + ':' + firstAttribute.value)
        // window.confirm('secondAttribute -> ' + secondAttribute.name + ':' + secondAttribute.value)
        // window.confirm('thirdAttribute -> ' + thirdAttribute.name + ':' + thirdAttribute.value)
        skill.attack = Math.round(
          (muAttribute.value + firstAttribute.value + secondAttribute.value) / skill.divide,
        )
        // window.confirm('if 2')
        skill.increased = false
        // window.confirm('if 3')
      } else {
        // window.confirm('ELSE ')
        var baseValue = Math.round(
          (muAttribute.value + firstAttribute.value + secondAttribute.value) / skill.divide,
        )
        var value = Math.round(
          (muAttribute.value +
            firstAttribute.value +
            secondAttribute.value +
            muAttribute.increased +
            firstAttribute.increased +
            secondAttribute.increased) /
            skill.divide,
        )
        skill.attack = value
        if (!skill.increased) skill.increased = value > baseValue ? true : false
      }
      if (
        muAttribute.increased === 0 &&
        firstAttribute.increased === 0 &&
        secondAttribute.increased === 0
      ) {
        // window.confirm('IF ')
        // window.confirm('firstAttribute -> ' + firstAttribute.name + ':' + firstAttribute.value)
        // window.confirm('secondAttribute -> ' + secondAttribute.name + ':' + secondAttribute.value)
        // window.confirm('thirdAttribute -> ' + thirdAttribute.name + ':' + thirdAttribute.value)
        skill.defend = Math.round(
          (inAttribute.value + firstAttribute.value + secondAttribute.value) / skill.divide,
        )
        // window.confirm('if 2')
        skill.increased = false
        // window.confirm('if 3')
      } else {
        // window.confirm('ELSE ')
        var baseDefendValue = Math.round(
          (inAttribute.value + firstAttribute.value + secondAttribute.value) / skill.divide,
        )
        var defendValue = Math.round(
          (inAttribute.value +
            firstAttribute.value +
            secondAttribute.value +
            inAttribute.increased +
            firstAttribute.increased +
            secondAttribute.increased) /
            skill.divide,
        )
        skill.defend = defendValue
        skill.increased = defendValue > baseDefendValue ? true : false
      }
      /* calculate defend value */
      // window.confirm('end ')
    },
    calcRangedSkill(skill) {
      window.alert('Not yet implemented ')
      return null
    },
  },
})
