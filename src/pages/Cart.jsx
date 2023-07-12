import styled from "styled-components"
import { useCartContext } from "../context/cartContext"
import { Link } from "react-router-dom"
import PageHero from "../components/PageHero"
import { formatPrice } from "../utils/helpers"
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa"
import { useUserContext } from "../context/UserContext"

const Cart = () => {
  const {
    cart,
    clearCart,
    removeProduct,
    toggleAmount,
    subTotal,
    shippingFee,
  } = useCartContext()
  // console.log(cart)
  // console.log("cart page render")

  const { myUser, loginWithRedirect } = useUserContext()

  if (cart.length < 1) {
    return (
      <Wrapper>
        <div className="empty-cart">
          <h1 className="empty-h1">Your cart is empty</h1>
          <Link to="/products">
            <button className="btn btn-fill">fill it</button>
          </Link>
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <PageHero title="cart" />
      <div className="cart section">
        {/* CART LABELS TOP */}
        <div className="cart-label-wrapper">
          <p className="cart-label">Item</p>
          <p className="cart-label">Price</p>
          <p className="cart-label">Quantity</p>
          <p className="cart-label">Subtotal</p>
          <p></p>
        </div>
        <div className="line line-top"></div>
        <div className="cart-gallery">
          {cart.map((c) => {
            const { id, color, itemAmount, name, price, url, stock } = c
            // console.log(id)
            return (
              <article className="cart-article" key={id}>
                <div className="article-first-div">
                  <img className="article-img" alt={name} src={url} />
                  <div className="article-content">
                    <h4 className="article-heading">{name}</h4>
                    <p className="cart-color">
                      color:{" "}
                      <span
                        className="color-box"
                        style={{ backgroundColor: color }}
                      ></span>
                    </p>
                    <h4 className="cart-price">{formatPrice(price)}</h4>
                  </div>
                </div>

                <p className="price">{formatPrice(price)}</p>

                {/* INCREASE DECREASE BUTTONS */}
                <div className="cart-btn-wrapper">
                  <span
                    className={`dec-btn ${itemAmount === 1 && "disabled"}`}
                    onClick={() => toggleAmount(id, "dec")}
                  >
                    <FaMinus className="icon" />
                  </span>
                  <span>{itemAmount}</span>

                  <span
                    className={`inc-btn ${itemAmount === stock && "disabled"}`}
                    onClick={() => toggleAmount(id, "inc")}
                  >
                    <FaPlus className="icon" />
                  </span>
                </div>

                {/* SUBTOTAL */}
                <p className="subtotal">{formatPrice(price * itemAmount)}</p>
                <div className="btn-remove" onClick={() => removeProduct(id)}>
                  <FaTrash className="trash-icon" />
                </div>
              </article>
            )
          })}
        </div>
        <div className="line"></div>

        <div className="cart-btn-wrapper-end">
          <Link to="/products">
            <button className="btn continue-shopping">continue shopping</button>
          </Link>
          <button className="btn clear-cart" onClick={clearCart}>
            clear shopping cart
          </button>
        </div>

        {/* ITEM TOTAL */}
        <div className="total-wrapper">
          <h3 className="subtotal-last">
            Subtotal: <span>{formatPrice(subTotal)}</span>
          </h3>
          <p className="shipping-fee">
            Shipping Fee: <span>{formatPrice(shippingFee)}</span>
          </p>
          <div className="line"></div>
          <h2 className="total-last">
            Order Total: <span>{formatPrice(shippingFee + subTotal)}</span>
          </h2>
        </div>
        {myUser ? (
          <button className="btn checkout-btn">
            <Link to="/checkout">proceed to checkout</Link>
          </button>
        ) : (
          <button className="btn login-btn" onClick={() => loginWithRedirect()}>
            login
          </button>
        )}
      </div>
    </Wrapper>
  )
}
export default Cart

const Wrapper = styled.section`
  min-height: calc(100vh - 10rem);

  .empty-cart {
    text-align: center;
  }

  .empty-h1 {
  }

  .btn-fill {
    text-transform: uppercase;
    letter-spacing: 1px;
    background-color: var(--clr-dark-grunge);
  }

  // =============
  // CART LABEL
  // ============

  .cart-label-wrapper {
    display: none;
  }

  .line-top {
    margin-bottom: 1em;
    display: none;
  }

  // ================
  // CART
  // ===============

  .cart {
    padding: 1em;
  }

  .cart-gallery {
    margin-bottom: 2em;
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    margin-top: 3em;
  }

  .cart-article {
    display: grid;
    grid-template-columns: 2fr 1fr 30px;
    align-items: center;
  }

  .article-first-div {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  .article-img {
    width: 100px;
    object-fit: cover;
    height: 100px;
  }

  .article-content {
    display: flex;
    flex-direction: column;
  }

  .article-heading {
    margin: 0;
    text-transform: capitalize;
  }

  .cart-color {
    text-transform: capitalize;
    letter-spacing: 1px;
    margin: 0;
    font-size: 0.8rem;
  }
  .color-box {
    width: 10px;
    height: 10px;
    display: inline-block;
    border-radius: 50%;
  }

  .cart-price {
    margin: 0;
    font-size: 0.8rem;
    color: var(--clr-dark-grunge);
  }

  .cart-btn-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 25px);
    // background: magenta;
    justify-items: center;
  }

  .icon {
    font-size: 0.8rem;
  }

  .btn-remove {
    background-color: var(--clr-dark-red);
    padding: 0.5em;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    cursor: pointer;
  }

  .trash-icon {
    color: white;
    font-size: 0.8rem;
  }

  .price,
  .subtotal {
    display: none;
  }

  .dec-btn,
  .inc-btn {
    cursor: pointer;
  }

  .inc-btn.disabled,
  .dec-btn.disabled {
    color: var(--clr-light-gray);
  }

  // ==============
  // END OF GALLERY
  // ==============

  .cart-btn-wrapper-end {
    display: flex;
    justify-content: space-between;
    margin-top: 2em;
  }

  .continue-shopping,
  .clear-cart {
    text-transform: capitalize;
    letter-spacing: 1px;
    font-size: 0.8rem;
  }

  .continue-shopping {
    background-color: var(--clr-dark-grunge);
  }

  .continue-shopping:hover {
    background-color: var(--clr-darkest-grunge);
  }

  .clear-cart {
    background-color: black;
  }

  // ==============
  // TOTAL WRAPPER
  // ================

  .total-wrapper {
    max-width: 500px;
    margin-top: 2em;
    margin-bottom: 1em;
    border-radius: 5px;
    border: 1px solid var(--clr-light-gray);
    padding: 1em 3em;
    // background-color: magenta;
  }

  .login-btn,
  .checkout-btn {
    text-transform: capitalize;
    background-color: var(--clr-dark-grunge);
    transition: var(--transition);
    width: 100%;
    max-width: 500px;
    text-transform: uppercase;
  }

  .login-btn:hover,
  .checkout-btn:hover {
    background-color: var(--clr-darkest-grunge);
  }

  // ================
  // MEDIA QUERIES
  // ================

  @media (min-width: 700px) {
    .line-top {
      display: block;
    }

    .cart-article {
      grid-template-columns: 2fr 1fr 1fr 1fr 30px;
    }

    .price,
    .subtotal {
      display: block;
    }

    .cart-label-wrapper {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr 30px;
    }

    .cart-label {
      font-size: 0.8rem;
    }
  }
`
