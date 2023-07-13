import styled from "styled-components"
import { useCartContext } from "../context/cartContext"
import { useUserContext } from "../context/UserContext"
import { formatPrice } from "../utils/helpers"
import PageHero from "./PageHero"
const StripeCheckout = () => {
  const { user } = useUserContext()
  const { subTotal, shippingFee } = useCartContext()
  return (
    <Wrapper>
      <PageHero title="checkout" />
      <div className="checkout section">
        <div className="content-wrapper">
          <h1 className="greet">Hello, {user.name}</h1>
          <p className="total">
            Your total is {formatPrice(subTotal + shippingFee)}
          </p>
        </div>
        <div className="payment-card">
          <form className="payment-form">
            <input
              className="card-input"
              type="text"
              placeholder="Card number"
            />
            <button disabled={true} className="pay">
              pay
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
export default StripeCheckout

const Wrapper = styled.div`
  .checkout {
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    // background-color: magenta;
    max-width: 700px;
    height: 60vh;
  }

  .greet {
    margin-bottom: 0;
  }

  .total {
    margin-top: 0.3em;
    color: black;
    letter-spacing: 1px;
  }

  .payment-form {
    display: flex;
    flex-direction: column;
    padding: 2em;
    // border: 1px gray solid;
    border-radius: 10px;
    box-shadow: var(--shadow-light);
  }

  .card-input {
    padding: 0.5em 0.5em;
    font-size: 1.1rem;
    font-weight: 400;
    border: 1px solid var(--clr-body);
    box-shadow: var(--shadow-light);
    border-radius: 5px 5px 0 0;
  }

  .pay {
    background-color: #a8b3e9;
    color: white;
    text-transform: capitalize;
    font-weight: 700;
    padding: 1em;
    border: none;
    border-radius: 0 0 5px 5px;
  }
`
