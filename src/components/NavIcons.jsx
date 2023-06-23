import styled from "styled-components"
import { useProductsContext } from "../context/productsContext"

const NavIcons = () => {
  const { toggleSidebar } = useProductsContext()
  return (
    <NavIconsWrapper className="nav-icons-wrapper">
      <div className="nav-icons">
        <span className="cart" onClick={toggleSidebar}>
          <p>cart</p>
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="cart-items-num">13</span>
        </span>
        <span className="user" onClick={toggleSidebar}>
          <p>login</p>
          <i className="fa-solid fa-user-plus"></i>
        </span>
      </div>
    </NavIconsWrapper>
  )
}
export default NavIcons

const NavIconsWrapper = styled.div`
  .nav-icons {
    display: flex;
    gap: 1.5em;
  }

  .nav-icons {
    p {
      color: black;
    }
  }
  .cart,
  .user {
    display: flex;
    align-items: center;
    gap: 0.3em;
    text-transform: capitalize;
    cursor: pointer;
  }
  .cart {
    position: relative;
  }

  .cart-items-num {
    position: absolute;
    right: 0;
    top: 9px;
    margin-right: -0.7em;
    background-color: var(--clr-dark-grunge);
    border-radius: 50%;
    color: white;
    font-size: 0.8rem;
    padding: 0.18em;
  }
`
