import EditItem from './editItem.vue'

describe('<EditItem />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(EditItem)
  })
})