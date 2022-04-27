export const state = () => ({
  drawerOpen: false
})

export const mutations = {
  drawerOpen (state) {
    state.drawerOpen = !state.drawerOpen
  }
}
