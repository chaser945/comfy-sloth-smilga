import styled from "styled-components"
import { FaCheck } from "react-icons/fa"
import { useState } from "react"
import { FaMinus, FaPlus } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useCartContext } from "../context/cartContext"
const AddToCart = ({ singleProduct }) => {
  console.log(singleProduct)
  const { addItemToCart } = useCartContext()
  const { id, colors = [], stock, name, price, images } = singleProduct
  const { url } = images[0]
  const [mainColor, setMainColor] = useState(colors[0])
  const [itemAmount, setItemAmount] = useState(1)

  const handleDecrease = () => {
    const tempAmount = itemAmount - 1
    if (tempAmount < 1) {
      setItemAmount(1)
      return
    }
    setItemAmount(tempAmount)
  }

  const handleIncrease = () => {
    const tempAmount = itemAmount + 1
    if (tempAmount > stock) {
      setItemAmount(stock)
      return
    }
    setItemAmount(tempAmount)
  }
  return (
    <Wrapper>
      <div className="add-to-cart">
        <div className="colors">
          <span className="color-span">Colors :</span>
          <div className="colors-wrapper">
            {colors.map((color, index) => {
              return (
                <button
                  key={index}
                  className="btn-color"
                  style={{ backgroundColor: color }}
                  onClick={() => setMainColor(color)}
                >
                  {color === mainColor && <FaCheck className="check-icon" />}
                </button>
              )
            })}
          </div>
        </div>
        {itemAmount === stock && (
          <p className="cart-warning">
            Only {stock} {stock > 1 ? "items are" : "item is"} available in
            stock
          </p>
        )}

        <div className="amount">
          <button className="btn-amount" onClick={handleDecrease}>
            <FaMinus />
          </button>
          <h2 className="item-amount">{itemAmount}</h2>
          <button className="btn-amount" onClick={handleIncrease}>
            <FaPlus />
          </button>
        </div>
        <Link to="/cart">
          <button
            className="btn add-cart-btn"
            onClick={() =>
              addItemToCart(id, name, mainColor, price, itemAmount, url)
            }
          >
            add to cart
          </button>
        </Link>
      </div>
    </Wrapper>
  )
}
export default AddToCart

const Wrapper = styled.div`
  .add-to-cart {
    margin: 2em 0em;
  }

  .colors {
    display: grid;
    grid-template-columns: 100px 1fr;
    font-weight: 500;
    align-items: center;
    margin-bottom: 1em;
  }

  .color-span {
    font-size: 0.8rem;
  }

  .colors-wrapper {
    display: flex;
    gap: 0.4em;
  }

  .btn-color {
    border: none;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .check-icon {
    color: white;
  }

  .cart-warning {
    margin-bottom: 0;
  }

  // =======
  // AMOUNT
  // =======

  .amount {
    display: grid;
    grid-template-columns: 40px 40px 40px;
    justify-items: center;
    // background-color: magenta;
    margin: 0;
  }

  .btn-amount {
    border: none;
    background: none;
    cursor: pointer;
  }

  .item-amount {
    cursor: pointer;
    margin: 0.5em;
    // background-color: magenta;
  }

  .add-cart-btn {
    text-transform: uppercase;
  }
`
