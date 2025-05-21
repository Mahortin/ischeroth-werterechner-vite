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
        attack: 12,
        defend: 12,
        isMelee: true,
        attributes: ['Mu', 'Fi', 'Ge'],
        divide: 2,
        increased: false,
        group: 'Kampf',
        groupkey: 'kampf',
      },
      {
        key: 'hiebKettenwaffen',
        name: 'Hieb- & Kettenwaffen',
        attack: 12,
        defend: 12,
        isMelee: true,
        attributes: ['Mu', 'St', 'Ko'],
        divide: 2,
        increased: false,
        group: 'Kampf',
        groupkey: 'kampf',
      },
      {
        key: 'raufenRingen',
        name: 'Raufen & Ringen',
        attack: 12,
        defend: 12,
        isMelee: true,
        attributes: ['Mu', 'Ge', 'St'],
        divide: 2,
        increased: false,
        group: 'Kampf',
        groupkey: 'kampf',
      },
      {
        key: 'saebelSchwerter',
        name: 'Säbel & Schwerter',
        attack: 12,
        defend: 12,
        isMelee: true,
        attributes: ['Mu', 'Ge', 'St'],
        divide: 2,
        increased: false,
        group: 'Kampf',
        groupkey: 'kampf',
      },
      {
        key: 'speereStaebe',
        name: 'Speere & Stäbe',
        attack: 12,
        defend: 12,
        isMelee: true,
        attributes: ['Mu', 'Fi', 'St'],
        divide: 2,
        increased: false,
        group: 'Kampf',
        groupkey: 'kampf',
      },
      {
        key: 'schilde',
        name: 'Schilde',
        attack: 0,
        defend: 12,
        isMelee: false,
        attributes: ['Au', 'St', 'Ko'],
        divide: 2,
        increased: false,
        group: 'Kampf',
        groupkey: 'kampf',
      },
      {
        key: 'armbrust',
        name: 'Armbrust',
        attack: 12,
        defend: 6,
        isMelee: false,
        attributes: ['Au', 'Fi', 'St'],
        divide: 2,
        increased: false,
        group: 'Kampf',
        groupkey: 'kampf',
      },
      {
        key: 'bogen',
        name: 'Bogen',
        attack: 12,
        defend: 6,
        isMelee: false,
        attributes: ['Au', 'Ge', 'St'],
        divide: 2,
        increased: false,
        group: 'Kampf',
        groupkey: 'kampf',
      },
      {
        key: 'feuerrohre',
        name: 'Feuerrohre',
        attack: 12,
        defend: 6,
        isMelee: false,
        attributes: ['Au', 'Ve', 'Fi'],
        divide: 2,
        increased: false,
        group: 'Kampf',
        groupkey: 'kampf',
      },
      {
        key: 'wurfSchleuderwaffen',
        name: 'Wurf & Schleuderwaffen',
        attack: 12,
        defend: 6,
        isMelee: false,
        attributes: ['Au', 'Fi', 'Ge'],
        divide: 2,
        increased: false,
        group: 'Kampf',
        groupkey: 'kampf',
      },
    ],
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
              ? state.filter.groupfilter.includes(skill.groupkey)
              : state.filter.groupfilter.length === 1
                ? skill.increased
                : skill.increased && state.filter.groupfilter.includes(skill.groupkey),
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
      // window.alert('reached')
      // window.confirm('reached calcSkill with: ' + skill.name)
      var muAttribute = this.characterStore.attributes.find((attribute) => attribute.key === 'Mu')
      var inAttribute = this.characterStore.attributes.find((attribute) => attribute.key === 'Au')
      var firstAttribute = this.characterStore.attributes.find(
        (attribute) => attribute.key === skill.attributes[2],
      )
      var secondAttribute = this.characterStore.attributes.find(
        (attribute) => attribute.key === skill.attributes[3],
      )

      /* calculate highest values for attack and defend */
      var currentMu = muAttribute.value + muAttribute.increased
      var currentIn = inAttribute.value + inAttribute.increased
      var currentFirstAttr = firstAttribute.value + firstAttribute.increased
      var currentSecondAttr = secondAttribute.value + secondAttribute.increased

      var attackAttributes = []
      if (currentMu > currentFirstAttr || currentMu > currentSecondAttr) {
        attackAttributes.push(muAttribute)
      }
      if (attackAttributes.length === 0) {
        attackAttributes.push(firstAttribute)
        attackAttributes.push(secondAttribute)
      } else
        attackAttributes.push(
          currentFirstAttr > currentSecondAttr ? firstAttribute : secondAttribute,
        )

      var defendAttributes = []
      if (currentIn > currentFirstAttr || currentIn > currentSecondAttr) {
        defendAttributes.push(inAttribute)
      }
      if (defendAttributes.length === 0) {
        defendAttributes.push(firstAttribute)
        defendAttributes.push(secondAttribute)
      } else {
        defendAttributes.push(
          currentFirstAttr > currentSecondAttr ? firstAttribute : secondAttribute,
        )
      }
      // window.confirm('reached before if')
      /* calculate attack value */
      if (attackAttributes.some((attribute) => attribute.increased)) {
        // window.confirm('enter calcAttack increased')
        var attackBase = 0
        var attackIncreased = 0
        attackAttributes.forEach((attribute) => {
          attackBase += attribute.value
          attackIncreased += attribute.value + attribute.increased
        })
        attackBase = Math.round(attackBase / skill.divide)
        attackIncreased = Math.round(attackIncreased / skill.divide)
        skill.attack = attackIncreased
        skill.increased = attackIncreased > attackBase ? true : false
      } else {
        // window.confirm('enter calcAttack')
        var attackSum = 0
        // window.confirm('attack:attackSum -> ' + skill.attack + ':' + attackSum)
        attackAttributes.forEach((attribute) => {
          attackSum += attribute.value
        })
        skill.attack = Math.round(attackSum / skill.divide)
        // window.confirm('attack:attackSum -> ' + skill.attack + ':' + attackSum)
        skill.increased = false
      }
      /* calculate defend value */
      if (defendAttributes.some((attribute) => attribute.increased)) {
        // window.confirm('enter calcDefend increased')
        var defendBase = 0
        var defendIncreased = 0
        defendAttributes.forEach((attribute) => {
          defendBase += attribute.value
          defendIncreased += attribute.value + attribute.increased
        })
        defendBase = Math.round(defendBase / skill.divide)
        defendIncreased = Math.round(defendIncreased / skill.divide)
        skill.defend = defendIncreased
        skill.increased = defendIncreased > defendBase ? true : false
      } else {
        // window.confirm('enter calcDefend')
        var defendSum = 0
        // window.confirm('defendAttributes.length -> ' + defendAttributes.length)
        // window.confirm('defend:defendSum -> ' + skill.defend + ':' + defendSum)
        defendAttributes.forEach((attribute) => {
          // window.confirm('attribute -> ' + attribute.name + ':' + attribute.value)
          defendSum += attribute.value
        })
        skill.defend = Math.round(defendSum / skill.divide)
        // window.confirm('defend:defendSum -> ' + skill.defend + ':' + defendSum)
        skill.increased = skill.increased || false
      }
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

      var currentFirstAttr = firstAttribute.value + firstAttribute.increased
      var currentSecondAttr = secondAttribute.value + secondAttribute.increased
      var currentThirdAttr = thirdAttribute.value + thirdAttribute.increased

      var attackAttributes = []
      if (currentThirdAttr > currentFirstAttr || currentThirdAttr > currentSecondAttr) {
        attackAttributes.push(thirdAttribute)
      }
      if (attackAttributes.length === 0) {
        attackAttributes.push(firstAttribute)
        attackAttributes.push(secondAttribute)
      } else
        attackAttributes.push(
          currentFirstAttr > currentSecondAttr ? firstAttribute : secondAttribute,
        )

      // window.confirm('reached calcSkill after all attributes: ')

      /* calculate attack value */
      if (attackAttributes.some((attribute) => attribute.increased)) {
        // window.confirm('enter calcAttack increased')
        var attackBase = 0
        var attackIncreased = 0
        attackAttributes.forEach((attribute) => {
          attackBase += attribute.value
          attackIncreased += attribute.value + attribute.increased
        })
        attackBase = Math.round(attackBase / skill.divide)
        attackIncreased = Math.round(attackIncreased / skill.divide)
        skill.attack = attackIncreased
        skill.increased = attackIncreased > attackBase ? true : false
      } else {
        // window.confirm('enter calcAttack')
        var attackSum = 0
        // window.confirm('attack:attackSum -> ' + skill.attack + ':' + attackSum)
        attackAttributes.forEach((attribute) => {
          attackSum += attribute.value
        })
        skill.attack = Math.round(attackSum / skill.divide)
        // window.confirm('attack:attackSum -> ' + skill.attack + ':' + attackSum)
        skill.increased = false
      }
      skill.defend = Math.round(skill.attack / 2)
      if (skill.key === 'schilde') {
        skill.defend = skill.attack
        skill.attack = 0
      }
      /* calculate defend value */
      // window.confirm('end ')
    },
  },
})
