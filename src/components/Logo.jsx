import styled from "styled-components"
import shoppingBag from "../assets/shopping-bags.png"
import { Link } from "react-router-dom"
const Logo = () => {
  return (
    <Wrapper>
      <Link to="/">
        <div className="logo-wrapper">
          <img className="logo-img" src={shoppingBag} alt="shopping bag" />
          <h1 className="logo">Shop Local</h1>
        </div>
      </Link>
    </Wrapper>
  )
}
export default Logo

const Wrapper = styled.div`
  .logo-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
  .logo {
    font-family: "Righteous", sans-serif;
    color: var(--clr-dark-gray);
    font-size: 2rem;
  }
  .logo-img {
    width: 50px;
  }
`
