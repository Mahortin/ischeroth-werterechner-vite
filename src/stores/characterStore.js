import { defineStore } from 'pinia'
import { combatSkillStore } from './combatSkillStore'
import { skillFilterStore } from './skillFilterStore'
import { coreStatsStore } from './coreStatsStore'

export const characterStore = defineStore('characterStore', {
  state: () => ({
    combatSkills: combatSkillStore(),
    coreStats: coreStatsStore(),
    filter: skillFilterStore(),
    attributes: [
      { key: 'MU', name: 'Mut', value: 12, increased: 0 },
      { key: 'KL', name: 'Klugheit', value: 12, increased: 0 },
      { key: 'IN', name: 'Intuition', value: 12, increased: 0 },
      { key: 'CH', name: 'Charisma', value: 12, increased: 0 },
      { key: 'FF', name: 'Fingerfertigkeit', value: 12, increased: 0 },
      { key: 'GE', name: 'Gewandheit', value: 12, increased: 0 },
      { key: 'ST', name: 'Stärke', value: 12, increased: 0 },
      { key: 'KO', name: 'Konstitution', value: 12, increased: 0 },
    ],
    skills: [
      {
        key: 'akrobatik',
        name: 'Akrobatik',
        value: 12,
        attributes: ['MU', 'GE', 'ST'],
        divide: 3,
        increased: false,
        group: 'Körper',
        groupkey: 'körper',
      },
      {
        key: 'athletik',
        name: 'Athletik',
        value: 12,
        attributes: ['GE', 'KO', 'ST'],
        divide: 3,
        increased: false,
        group: 'Körper',
        groupkey: 'körper',
      },
      {
        key: 'diebeskunst',
        name: 'Diebeskunst',
        value: 12,
        attributes: ['KL', 'IN', 'FF'],
        divide: 3,
        increased: false,
        group: 'Körper',
        groupkey: 'körper',
      },
      {
        key: 'heimlichkeit',
        name: 'Heimlichkeit',
        value: 12,
        attributes: ['MU', 'IN', 'GE'],
        divide: 3,
        increased: false,
        group: 'Körper',
        groupkey: 'körper',
      },
      {
        key: 'horchen',
        name: 'Horchen',
        value: 12,
        attributes: ['KL', 'IN', 'KO'],
        divide: 3,
        increased: false,
        group: 'Körper',
        groupkey: 'körper',
      },
      {
        key: 'klettern',
        name: 'Klettern',
        value: 12,
        attributes: ['MU', 'GE', 'ST'],
        divide: 3,
        increased: false,
        group: 'Körper',
        groupkey: 'körper',
      },
      {
        key: 'reiten',
        name: 'Reiten',
        value: 12,
        attributes: ['CH', 'GE', 'ST'],
        divide: 3,
        increased: false,
        group: 'Körper',
        groupkey: 'körper',
      },
      {
        key: 'schwimmen',
        name: 'Schwimmen',
        value: 12,
        attributes: ['GE', 'KO', 'ST'],
        divide: 3,
        increased: false,
        group: 'Körper',
        groupkey: 'körper',
      },
      {
        key: 'verborgenesErkennen',
        name: 'Verborgenes Erkennen',
        value: 12,
        attributes: ['MU', 'KL', 'IN'],
        divide: 3,
        increased: false,
        group: 'Körper',
        groupkey: 'körper',
      },
      {
        key: 'zechen',
        name: 'Zechen',
        value: 12,
        attributes: ['IN', 'ST', 'KO'],
        divide: 3,
        increased: false,
        group: 'Körper',
        groupkey: 'körper',
      },
      {
        key: 'faehrtensuche',
        name: 'Fährtensuche',
        value: 12,
        attributes: ['KL', 'IN', 'KO'],
        divide: 3,
        increased: false,
        group: 'Natur',
        groupkey: 'natur',
      },
      {
        key: 'fischenAngeln',
        name: 'Fischen & Angeln',
        value: 12,
        attributes: ['IN', 'FF', 'ST'],
        divide: 3,
        increased: false,
        group: 'Natur',
        groupkey: 'natur',
      },
      {
        key: 'himmelskunde',
        name: 'Himmelskunde',
        value: 12,
        attributes: ['KL', 'IN', 'IN'],
        divide: 3,
        increased: false,
        group: 'Natur',
        groupkey: 'natur',
      },
      {
        key: 'orientierung',
        name: 'Orientierung',
        value: 12,
        attributes: ['KL', 'IN', 'IN'],
        divide: 3,
        increased: false,
        group: 'Natur',
        groupkey: 'natur',
      },
      {
        key: 'pflanzenkunde',
        name: 'Pflanzenkunde',
        value: 12,
        attributes: ['KL', 'IN', 'FF'],
        divide: 3,
        increased: false,
        group: 'Natur',
        groupkey: 'natur',
      },
      {
        key: 'tierkunde',
        name: 'Tierkunde',
        value: 12,
        attributes: ['MU', 'KL', 'IN'],
        divide: 3,
        increased: false,
        group: 'Natur',
        groupkey: 'natur',
      },
      {
        key: 'alchemie',
        name: 'Alchemie',
        value: 12,
        attributes: ['MU', 'KL', 'FF'],
        divide: 3,
        increased: false,
        group: 'Handwerk',
        groupkey: 'handwerk',
      },
      {
        key: 'bootSeefahrt',
        name: 'Boot- & Seefahrt',
        value: 12,
        attributes: ['IN', 'GE', 'KO'],
        divide: 3,
        increased: false,
        group: 'Handwerk',
        groupkey: 'handwerk',
      },
      {
        key: 'fahrzeugLenken',
        name: 'Fahrzeug lenken',
        value: 12,
        attributes: ['IN', 'CH', 'FF'],
        divide: 3,
        increased: false,
        group: 'Handwerk',
        groupkey: 'handwerk',
      },
      {
        key: 'holzbearbeitung',
        name: 'Holzbearbeitung',
        value: 12,
        attributes: ['KL', 'FF', 'ST'],
        divide: 3,
        increased: false,
        group: 'Handwerk',
        groupkey: 'handwerk',
      },
      {
        key: 'kochenBrauen',
        name: 'Kochen & Brauen',
        value: 12,
        attributes: ['KL', 'FF', 'FF'],
        divide: 3,
        increased: false,
        group: 'Handwerk',
        groupkey: 'handwerk',
      },
      {
        key: 'lehmSteinbearbeitung',
        name: 'Lehm- & Steinbearbeitung',
        value: 12,
        attributes: ['KL', 'FF', 'FF'],
        divide: 3,
        increased: false,
        group: 'Handwerk',
        groupkey: 'handwerk',
      },
      {
        key: 'malenZeichnen',
        name: 'Malen & Zeichnen',
        value: 12,
        attributes: ['KL', 'IN', 'FF'],
        divide: 3,
        increased: false,
        group: 'Handwerk',
        groupkey: 'handwerk',
      },
      {
        key: 'musizieren',
        name: 'Musizieren',
        value: 12,
        attributes: ['IN', 'CH', 'FF'],
        divide: 3,
        increased: false,
        group: 'Handwerk',
        groupkey: 'handwerk',
      },
      {
        key: 'schmiedekunst',
        name: 'Schmiedekunst',
        value: 12,
        attributes: ['FF', 'KO', 'ST'],
        divide: 3,
        increased: false,
        group: 'Handwerk',
        groupkey: 'handwerk',
      },
      {
        key: 'schneiderLederarbeiten',
        name: 'Schneider- & Lederarbeiten',
        value: 12,
        attributes: ['KL', 'FF', 'KO'],
        divide: 3,
        increased: false,
        group: 'Handwerk',
        groupkey: 'handwerk',
      },
      {
        key: 'einschuechtern',
        name: 'Einschüchtern',
        value: 12,
        attributes: ['MU', 'CH', 'ST'],
        divide: 3,
        increased: false,
        group: 'Gesellschaft',
        groupkey: 'gesellschaft',
      },
      {
        key: 'handel',
        name: 'Handel',
        value: 12,
        attributes: ['KL', 'IN', 'CH'],
        divide: 3,
        increased: false,
        group: 'Gesellschaft',
        groupkey: 'gesellschaft',
      },
      {
        key: 'schauspielerei',
        name: 'Schauspielerei',
        value: 12,
        attributes: ['MU', 'KL', 'CH'],
        divide: 3,
        increased: false,
        group: 'Gesellschaft',
        groupkey: 'gesellschaft',
      },
      {
        key: 'standeswissen',
        name: 'Standeswissen',
        value: 12,
        attributes: ['KL', 'IN', 'CH'],
        divide: 3,
        increased: false,
        group: 'Gesellschaft',
        groupkey: 'gesellschaft',
      },
      {
        key: 'tanzen',
        name: 'Tanzen',
        value: 12,
        attributes: ['CH', 'GE', 'GE'],
        divide: 3,
        increased: false,
        group: 'Gesellschaft',
        groupkey: 'gesellschaft',
      },
      {
        key: 'ueberreden',
        name: 'Überreden',
        value: 12,
        attributes: ['MU', 'IN', 'CH'],
        divide: 3,
        increased: false,
        group: 'Gesellschaft',
        groupkey: 'gesellschaft',
      },
      {
        key: 'ueberzeugen',
        name: 'Überzeugen',
        value: 12,
        attributes: ['KL', 'IN', 'CH'],
        divide: 3,
        increased: false,
        group: 'Gesellschaft',
        groupkey: 'gesellschaft',
      },
      {
        key: 'architekt',
        name: 'Architekt',
        value: 12,
        attributes: ['KL', 'KL', 'FF'],
        divide: 3,
        increased: false,
        group: 'Wissen',
        groupkey: 'wissen',
      },
      {
        key: 'geographie',
        name: 'Geographie',
        value: 12,
        attributes: ['KL', 'KL', 'IN'],
        divide: 3,
        increased: false,
        group: 'Wissen',
        groupkey: 'wissen',
      },
      {
        key: 'geschichtswissen',
        name: 'Geschichtswissen',
        value: 12,
        attributes: ['KL', 'KL', 'IN'],
        divide: 3,
        increased: false,
        group: 'Wissen',
        groupkey: 'wissen',
      },
      {
        key: 'goetterKulte',
        name: 'Götter & Kulte',
        value: 12,
        attributes: ['KL', 'KL', 'IN'],
        divide: 3,
        increased: false,
        group: 'Wissen',
        groupkey: 'wissen',
      },
      {
        key: 'heilkundeGeist',
        name: '(Heil-)Kunde des Geistes',
        value: 12,
        attributes: ['KL', 'IN', 'CH'],
        divide: 3,
        increased: false,
        group: 'Wissen',
        groupkey: 'wissen',
      },
      {
        key: 'heilkundeKoerper',
        name: '(Heil-)Kunde des Körpers',
        value: 12,
        attributes: ['KL', 'IN', 'FF'],
        divide: 3,
        increased: false,
        group: 'Wissen',
        groupkey: 'wissen',
      },
      {
        key: 'kriegskunst',
        name: 'Kriegskunst',
        value: 12,
        attributes: ['MU', 'KL', 'CH'],
        divide: 3,
        increased: false,
        group: 'Wissen',
        groupkey: 'wissen',
      },
      {
        key: 'magiekunde',
        name: 'Magiekunde',
        value: 12,
        attributes: ['KL', 'KL', 'IN'],
        divide: 3,
        increased: false,
        group: 'Wissen',
        groupkey: 'wissen',
      },
      {
        key: 'rechnenPhysik',
        name: 'Rechnen & Physik',
        value: 12,
        attributes: ['KL', 'IN', 'FF'],
        divide: 3,
        increased: false,
        group: 'Wissen',
        groupkey: 'wissen',
      },
      {
        key: 'rechtsStaatskunst',
        name: 'Rechts- & Staatskunst',
        value: 12,
        attributes: ['KL', 'KL', 'IN'],
        divide: 3,
        increased: false,
        group: 'Wissen',
        groupkey: 'wissen',
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
    updateStores(key) {
      this.calcUpdatedSkills(key)
      this.combatSkills.calcUpdatedSkills(key)
      this.coreStats.calcUpdatedCoreStats(key)
    },
    increment() {
      this.attributes.forEach((attribute) => {
        attribute.value++
      })
      this.calcSkills()
    },
    increaseAttribute(key, newValue) {
      if (key === null) window.alert('attribute is null!')

      this.attributes.forEach((attribute) => {
        if (attribute.key === key) {
          attribute.increased = attribute.increased === newValue ? 0 : newValue
        }
      })
      this.updateStores(key)
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
      // window.confirm('reached characterStore')
      if (key === null) window.alert('attribute is null!')

      this.attributes.forEach((attribute) => {
        if (attribute.key === key) {
          attribute.value = attribute.value + adjustment
          if (attribute.value > 16 || attribute.value < 7)
            attribute.value = attribute.value > 16 ? 16 : 7
        }
      })
      this.updateStores(key)
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
          (firstAttribute.value + secondAttribute.value + thirdAttribute.value) / skill.divide,
        )
        skill.increased = false
      } else {
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
        skill.value = value
        skill.increased = value > baseValue ? true : false
      }
    },
  },
})
