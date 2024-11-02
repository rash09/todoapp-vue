import AddItem from './addItem.vue'

describe('<AddItem />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(AddItem)
  })
})