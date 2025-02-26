import { defineStore } from 'pinia'
import { characterStore } from './characterStore'
import { skillFilterStore } from './skillFilterStore'

export const combatSkillStore = defineStore('combatSkillStore', {
  state: () => ({
    characterStore: characterStore(),
    filter: skillFilterStore(),
    skills: [
      {
        key: 'dolchFechtwaffen',
        name: 'Dolch & Fechtwaffen',
        attack: 8,
        defend: 8,
        isMelee: true,
        attributes: ['MU', 'IN', 'FF', 'GE'],
        divide: 2,
        increased: false,
        group: 'kampf',
      },
      {
        key: 'armbrust',
        name: 'Armbrust',
        attack: 8,
        defend: 4,
        isMelee: false,
        attributes: ['IN', 'FF', 'ST'],
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
      return state.filter.groupfilter.length === 0
        ? state.skills
        : state.skills.filter((skill) =>
            !state.filter.groupfilter.includes('increased')
              ? state.filter.groupfilter.includes(skill.group)
              : state.filter.groupfilter.length === 1
                ? skill.increased
                : skill.increased && state.filter.groupfilter.includes(skill.group),
          )
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
      window.alert('reached')
      // window.confirm('reached calcSkill with: ' + skill.name)
      var muAttribute = this.characterStore.attributes.find((attribute) => attribute.key === 'MU')
      var inAttribute = this.characterStore.attributes.find((attribute) => attribute.key === 'IN')
      var firstAttribute = this.characterStore.attributes.find(
        (attribute) => attribute.key === skill.attributes[2],
      )
      var secondAttribute = this.characterStore.attributes.find(
        (attribute) => attribute.key === skill.attributes[3],
      )

      var currentMu = muAttribute.value + muAttribute.increased
      // var currentIn = inAttribute.value + inAttribute.increased
      var currentFirstAttr = firstAttribute.value + firstAttribute.increased
      var currentSecondAttr = secondAttribute.value + secondAttribute.increased

      var attackAttributes = []
      if (currentMu > currentFirstAttr || currentMu > currentSecondAttr)
        attackAttributes.push(muAttribute)
      if (attackAttributes.length === 0) {
        attackAttributes.push(firstAttribute)
        attackAttributes.push(secondAttribute)
      } else
        attackAttributes.push(
          currentFirstAttr > currentSecondAttr ? firstAttribute : secondAttribute,
        )
      /* calculate attack value */
      if (attackAttributes.some((attribute) => attribute.increased)) {
        window.alert('not implemented')
        var baseValue = 0
        var increasedValue = 0
        attackAttributes.forEach((attribute) => {
          baseValue += attribute.value
          increasedValue += attribute.value + attribute.increased
        })
        baseValue = Math.round(baseValue / skill.divide)
        increasedValue = Math.round(increasedValue / skill.divide)
        skill.attack = increasedValue
        skill.increased = increasedValue > baseValue ? true : false
      } else {
        var sum = 0
        attackAttributes.forEach((attribute) => {
          sum += attribute.value
        })
        skill.attack = Math.round(sum / skill.divide)
        skill.increased = false
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
        if (!skill.increased) skill.increased = defendValue > baseDefendValue ? true : false
      }
      /* calculate defend value */
      // window.confirm('end ')
    },
    calcRangedSkill(skill) {
      // window.confirm('reached calcSkill with: ' + skill.name)
      var firstAttribute = this.characterStore.attributes.find(
        (attribute) => attribute.key === skill.attributes[0],
      )
      var secondAttribute = this.characterStore.attributes.find(
        (attribute) => attribute.key === skill.attributes[1],
      )
      var thirdAttribute = this.characterStore.attributes.find(
        (attribute) => attribute.key === skill.attributes[2],
      )
      // window.confirm('reached calcSkill after all attributes: ')

      /* calculate attack value */
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
      skill.defend = Math.round(skill.attack / 2)
      /* calculate defend value */
      // window.confirm('end ')
    },
  },
})
