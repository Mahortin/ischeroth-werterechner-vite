import { reactive } from 'vue'

export const oldStore = reactive({
  count: 0,
  increment() {
    this.count++
  },
  attributes: [
    { key: 'MU', name: 'Mut', basevalue: '8', modValue: '8' },
    { key: 'KL', name: 'Klugheit', basevalue: '8', modValue: '8' },
    { key: 'IN', name: 'Intuition', basevalue: '8', modValue: '8' },
    { key: 'CH', name: 'Charisma', basevalue: '8', modValue: '8' },
    { key: 'FF', name: 'Fingerfertigkeit', basevalue: '8', modValue: '8' },
    { key: 'GE', name: 'Gewandheit', basevalue: '8', modValue: '8' },
    { key: 'ST', name: 'Stärke', basevalue: '8', modValue: '8' },
    { key: 'KO', name: 'Konstitution', basevalue: '8', modValue: '8' },
  ],
  updateAttribute(attribute) {
    if (attribute == null) {
      window.alert('attribute is null!')
      return
    }

    // window.alert(
    //   'Attribute is: ' +
    //     attribute +
    //     'with values: ' +
    //     attribute.value +
    //     ' and key: ' +
    //     attribute.key,
    // )
    this.attributes.find((x) => x.key == attribute.key)
  },
})
