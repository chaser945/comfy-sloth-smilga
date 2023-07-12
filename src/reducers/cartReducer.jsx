import {
  ADD_TO_CART,
  CALC_SUBTOTAL,
  CLEAR_CART,
  REMOVE_PRODUCT,
  TOGGLE_AMOUNT,
  CALC_TOTAL_ITEMS,
} from "../actions"

const cartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    // console.log("action working")
    const { id, name, mainColor, price, itemAmount, url, stock } =
      action.payload
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
            itemAmount:
              itemAmount >= stock
                ? stock
                : itemAmount + alreadyAddedItem.itemAmount,
          },
        ],
      }
    }

    return {
      ...state,
      cart: [
        ...state.cart,
        {
          id: uniqueId,
          name,
          color: mainColor,
          price,
          itemAmount,
          url,
          stock,
        },
      ],
    }
  }

  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    }
  }

  if (action.type === REMOVE_PRODUCT) {
    return {
      ...state,
      cart: state.cart.filter((c) => c.id !== action.payload.id),
    }
  }

  if (action.type === TOGGLE_AMOUNT) {
    if (action.payload.func === "dec") {
      return {
        ...state,
        cart: state.cart.map((c) => {
          if (c.id === action.payload.id) {
            return {
              ...c,
              itemAmount: c.itemAmount === 1 ? c.itemAmount : c.itemAmount - 1,
            }
          } else {
            return {
              ...c,
            }
          }
        }),
      }
    }
    if (action.payload.func === "inc") {
      return {
        ...state,
        cart: state.cart.map((c) => {
          if (c.id === action.payload.id) {
            return {
              ...c,
              itemAmount:
                c.itemAmount === c.stock ? c.itemAmount : c.itemAmount + 1,
            }
          } else {
            return {
              ...c,
            }
          }
        }),
      }
    }
  }

  if (action.type === CALC_SUBTOTAL) {
    const tempSubTotal = state.cart.reduce((acc, curr) => {
      acc = acc + curr.price * curr.itemAmount
      return acc
    }, 0)
    return {
      ...state,
      subTotal: tempSubTotal,
    }
  }

  if (action.type === CALC_TOTAL_ITEMS) {
    const tempTotalItems = state.cart.reduce((acc, curr) => {
      acc = curr.itemAmount + acc
      return acc
    }, 0)
    return {
      ...state,
      totalItems: tempTotalItems,
    }
  }

  throw new Error(`${action.type} was not handled in the cart reducer`)
}
export default cartReducer
