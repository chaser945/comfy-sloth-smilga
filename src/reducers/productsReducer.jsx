import { TOGGLE_SIDEBAR } from "../actions"

const productsReducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, showSidebar: !state.showSidebar }
  }
}
export default productsReducer
