export const state = () => ({
  drawerOpen: true
})

export const mutations = {
  drawerOpen (state) {
    state.drawerOpen = !state.drawerOpen
  }
}
