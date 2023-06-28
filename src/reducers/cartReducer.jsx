import { ADD_TO_CART } from "../actions"

const cartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    // console.log("action working")
    const { id, name, mainColor, price, itemAmount, url } = action.payload
    const uniqueId = id + mainColor
    // console.log(uniqueId)
    const alreadyAddedItem = state.cart.find((c) => c.id === uniqueId)
    // console.log(alreadyAddedItem)

    if (alreadyAddedItem) {
      return {
        ...state,
        cart: [
          ...state.cart.filter((c) => c.id !== uniqueId),
          {
            ...alreadyAddedItem,
            itemAmount: itemAmount + alreadyAddedItem.itemAmount,
          },
        ],
      }
    }

    return {
      ...state,
      cart: [
        ...state.cart,
        { id: uniqueId, name, color: mainColor, price, itemAmount, url },
      ],
    }
  }

  throw new Error(`${action.type} was not handled in the cart reducer`)
}
export default cartReducer
