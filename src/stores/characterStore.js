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
        key: 'akrobatik',
        name: 'Akrobatik',
        value: 8,
        attributes: ['MU', 'GE', 'ST'],
        divide: 3,
        increased: false,
        group: 'körper',
      },
      {
        key: 'athletik',
        name: 'Athletik',
        value: 8,
        attributes: ['GE', 'KO', 'ST'],
        divide: 3,
        increased: false,
        group: 'körper',
      },
      {
        key: 'diebeskunst',
        name: 'Diebeskunst',
        value: 8,
        attributes: ['KL', 'IN', 'FF'],
        divide: 3,
        increased: false,
        group: 'körper',
      },
      {
        key: 'heimlichkeit',
        name: 'Heimlichkeit',
        value: 8,
        attributes: ['MU', 'IN', 'GE'],
        divide: 3,
        increased: false,
        group: 'körper',
      },
      {
        key: 'horchen',
        name: 'Horchen',
        value: 8,
        attributes: ['KL', 'IN', 'KO'],
        divide: 3,
        increased: false,
        group: 'körper',
      },
      {
        key: 'klettern',
        name: 'Klettern',
        value: 8,
        attributes: ['MU', 'GE', 'ST'],
        divide: 3,
        increased: false,
        group: 'körper',
      },
      {
        key: 'reiten',
        name: 'Reiten',
        value: 8,
        attributes: ['CH', 'GE', 'ST'],
        divide: 3,
        increased: false,
        group: 'körper',
      },
      {
        key: 'schwimmen',
        name: 'Schwimmen',
        value: 8,
        attributes: ['GE', 'KO', 'ST'],
        divide: 3,
        increased: false,
        group: 'körper',
      },
      {
        key: 'verborgenesErkennen',
        name: 'Verborgenes Erkennen',
        value: 8,
        attributes: ['MU', 'KL', 'IN'],
        divide: 3,
        increased: false,
        group: 'körper',
      },
      {
        key: 'zechen',
        name: 'Zechen',
        value: 8,
        attributes: ['IN', 'ST', 'KO'],
        divide: 3,
        increased: false,
        group: 'körper',
      },
      {
        key: 'faehrtensuche',
        name: 'Fährtensuche',
        value: 8,
        attributes: ['KL', 'IN', 'KO'],
        divide: 3,
        increased: false,
        group: 'natur',
      },
      {
        key: 'fischenAngeln',
        name: 'Fischen & Angeln',
        value: 8,
        attributes: ['IN', 'FF', 'ST'],
        divide: 3,
        increased: false,
        group: 'natur',
      },
      {
        key: 'himmelskunde',
        name: 'Himmelskunde',
        value: 8,
        attributes: ['KL', 'IN', 'IN'],
        divide: 3,
        increased: false,
        group: 'natur',
      },
      {
        key: 'orientierung',
        name: 'Orientierung',
        value: 8,
        attributes: ['KL', 'IN', 'IN'],
        divide: 3,
        increased: false,
        group: 'natur',
      },
      {
        key: 'pflanzenkunde',
        name: 'Pflanzenkunde',
        value: 8,
        attributes: ['KL', 'IN', 'FF'],
        divide: 3,
        increased: false,
        group: 'natur',
      },
      {
        key: 'tierkunde',
        name: 'Tierkunde',
        value: 8,
        attributes: ['MU', 'KL', 'IN'],
        divide: 3,
        increased: false,
        group: 'natur',
      },
      {
        key: 'alchemie',
        name: 'Alchemie',
        value: 8,
        attributes: ['MU', 'KL', 'FF'],
        divide: 3,
        increased: false,
        group: 'handwerk',
      },
      {
        key: 'bootSeefahrt',
        name: 'Boot- & Seefahrt',
        value: 8,
        attributes: ['IN', 'GE', 'KO'],
        divide: 3,
        increased: false,
        group: 'handwerk',
      },
      {
        key: 'fahrzeugLenken',
        name: 'Fahrzeug lenken',
        value: 8,
        attributes: ['IN', 'CH', 'FF'],
        divide: 3,
        increased: false,
        group: 'handwerk',
      },
      {
        key: 'holzbearbeitung',
        name: 'Holzbearbeitung',
        value: 8,
        attributes: ['KL', 'FF', 'ST'],
        divide: 3,
        increased: false,
        group: 'handwerk',
      },
      {
        key: 'kochenBrauen',
        name: 'Kochen & Brauen',
        value: 8,
        attributes: ['KL', 'FF', 'FF'],
        divide: 3,
        increased: false,
        group: 'handwerk',
      },
      {
        key: 'lehmSteinbearbeitung',
        name: 'Lehm- & Steinbearbeitung',
        value: 8,
        attributes: ['KL', 'FF', 'FF'],
        divide: 3,
        increased: false,
        group: 'handwerk',
      },
      {
        key: 'malenZeichnen',
        name: 'Malen & Zeichnen',
        value: 8,
        attributes: ['KL', 'IN', 'FF'],
        divide: 3,
        increased: false,
        group: 'handwerk',
      },
      {
        key: 'musizieren',
        name: 'Musizieren',
        value: 8,
        attributes: ['IN', 'CH', 'FF'],
        divide: 3,
        increased: false,
        group: 'handwerk',
      },
      {
        key: 'schmiedekunst',
        name: 'Schmiedekunst',
        value: 8,
        attributes: ['FF', 'KO', 'ST'],
        divide: 3,
        increased: false,
        group: 'handwerk',
      },
      {
        key: 'schneiderLederarbeiten',
        name: 'Schneider- & Lederarbeiten',
        value: 8,
        attributes: ['KL', 'FF', 'KO'],
        divide: 3,
        increased: false,
        group: 'handwerk',
      },
      {
        key: 'einschuechtern',
        name: 'Einschüchtern',
        value: 8,
        attributes: ['MU', 'CH', 'ST'],
        divide: 3,
        increased: false,
        group: 'gesellschaft',
      },
      {
        key: 'handel',
        name: 'Handel',
        value: 8,
        attributes: ['KL', 'IN', 'CH'],
        divide: 3,
        increased: false,
        group: 'gesellschaft',
      },
      {
        key: 'schauspielerei',
        name: 'Schauspielerei',
        value: 8,
        attributes: ['MU', 'KL', 'CH'],
        divide: 3,
        increased: false,
        group: 'gesellschaft',
      },
      {
        key: 'standeswissen',
        name: 'Standeswissen',
        value: 8,
        attributes: ['KL', 'IN', 'CH'],
        divide: 3,
        increased: false,
        group: 'gesellschaft',
      },
      {
        key: 'tanzen',
        name: 'Tanzen',
        value: 8,
        attributes: ['CH', 'GE', 'GE'],
        divide: 3,
        increased: false,
        group: 'gesellschaft',
      },
      {
        key: 'ueberreden',
        name: 'Überreden',
        value: 8,
        attributes: ['MU', 'IN', 'CH'],
        divide: 3,
        increased: false,
        group: 'gesellschaft',
      },
      {
        key: 'ueberzeugen',
        name: 'Überzeugen',
        value: 8,
        attributes: ['KL', 'IN', 'CH'],
        divide: 3,
        increased: false,
        group: 'gesellschaft',
      },
      {
        key: 'architekt',
        name: 'Architekt',
        value: 8,
        attributes: ['KL', 'KL', 'FF'],
        divide: 3,
        increased: false,
        group: 'wissen',
      },
      {
        key: 'geographie',
        name: 'Geographie',
        value: 8,
        attributes: ['KL', 'KL', 'IN'],
        divide: 3,
        increased: false,
        group: 'wissen',
      },
      {
        key: 'geschichtswissen',
        name: 'Geschichtswissen',
        value: 8,
        attributes: ['KL', 'KL', 'IN'],
        divide: 3,
        increased: false,
        group: 'wissen',
      },
      {
        key: 'goetterKulte',
        name: 'Götter & Kulte',
        value: 8,
        attributes: ['KL', 'KL', 'IN'],
        divide: 3,
        increased: false,
        group: 'wissen',
      },
      {
        key: 'heilkundeGeist',
        name: '(Heil-)Kunde des Geistes',
        value: 8,
        attributes: ['KL', 'IN', 'CH'],
        divide: 3,
        increased: false,
        group: 'wissen',
      },
      {
        key: 'heilkundeKoerper',
        name: '(Heil-)Kunde des Körpers',
        value: 8,
        attributes: ['KL', 'IN', 'FF'],
        divide: 3,
        increased: false,
        group: 'wissen',
      },
      {
        key: 'kriegskunst',
        name: 'Kriegskunst',
        value: 8,
        attributes: ['MU', 'KL', 'CH'],
        divide: 3,
        increased: false,
        group: 'wissen',
      },
      {
        key: 'magiekunde',
        name: 'Magiekunde',
        value: 8,
        attributes: ['KL', 'KL', 'IN'],
        divide: 3,
        increased: false,
        group: 'wissen',
      },
      {
        key: 'rechnenPhysik',
        name: 'Rechnen & Physik',
        value: 8,
        attributes: ['KL', 'IN', 'FF'],
        divide: 3,
        increased: false,
        group: 'wissen',
      },
      {
        key: 'rechtsStaatskunst',
        name: 'Rechts- & Staatskunst',
        value: 8,
        attributes: ['KL', 'KL', 'IN'],
        divide: 3,
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
        }
      })
      this.calcUpdatedSkills(key)
    },
    increaseAttribute(key, newValue) {
      if (key === null) window.alert('attribute is null!')

      this.attributes.forEach((attribute) => {
        if (attribute.key === key) {
          attribute.increased = attribute.increased === newValue ? 0 : newValue
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
