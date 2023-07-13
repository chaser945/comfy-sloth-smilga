import styled from "styled-components"
import { useProductsContext } from "../context/productsContext"
import { Link } from "react-router-dom"
import { useUserContext } from "../context/UserContext"
import { useCartContext } from "../context/cartContext"

const NavIcons = () => {
  const { toggleSidebar } = useProductsContext()
  const { logout, loginWithRedirect, myUser, user } = useUserContext()
  const { totalItems, clearCart } = useCartContext()
  return (
    <NavIconsWrapper className="nav-icons-wrapper">
      <div className="nav-icons">
        <Link to="/cart">
          <span className="cart" onClick={toggleSidebar}>
            <p>cart</p>
            <i className="fa-solid fa-cart-shopping"></i>

            <span className="cart-items-num">{totalItems}</span>
          </span>
        </Link>

        {myUser ? (
          <span
            className="user"
            onClick={() => {
              clearCart()
              toggleSidebar()
              logout({ logoutParams: { returnTo: window.location.origin } })
            }}
          >
            <p>logout</p>
            <img className="logout-pic" src={user.picture} alt={user.name} />
          </span>
        ) : (
          <span
            className="user"
            onClick={() => {
              toggleSidebar()
              loginWithRedirect()
            }}
          >
            <p>login</p>
            <i className="fa-solid fa-user-plus"></i>
          </span>
        )}
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
    display: flex;
    width: 20px;
    align-items: center;
    justify-content: center;
  }

  .logout-pic {
    width: 20px;
    object-fit: cover;
    border-radius: 50%;
  }
`
