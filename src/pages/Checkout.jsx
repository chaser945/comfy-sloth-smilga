import { useCartContext } from "../context/cartContext"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { StripeCheckOut } from "../components"

const Checkout = () => {
  const { cart } = useCartContext()
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
      <div>
        <StripeCheckOut />
      </div>
    </Wrapper>
  )
}
export default Checkout

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
`
