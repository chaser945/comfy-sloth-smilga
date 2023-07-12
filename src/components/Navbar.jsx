import styled from "styled-components"
import { Link } from "react-router-dom"
import { links } from "../utils/constants"
import NavIcons from "./NavIcons"
import { useProductsContext } from "../context/productsContext"
import { useUserContext } from "../context/UserContext"

const Navbar = () => {
  const { showSidebar, toggleSidebar } = useProductsContext()
  const { myUser } = useUserContext()
  return (
    <NavContainer>
      <div className="nav-center section">
        <Link to="/">
          <h1 className="logo">Shop Local</h1>
        </Link>
        <div className="hamburger-wrapper" onClick={toggleSidebar}>
          <div className={`bar bar-one ${showSidebar && "active"}`}></div>
          <div className={`bar bar-second ${showSidebar && "active"}`}></div>
          <div className={`bar bar-third ${showSidebar && "active"}`}></div>
        </div>
        <ul className="nav-link-wrapper">
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <Link key={id} to={url}>
                <li>{text}</li>
              </Link>
            )
          })}
          {myUser && (
            <Link key="checkout" to="/checkout">
              <li>checkout</li>
            </Link>
          )}
        </ul>
        <NavIcons />
      </div>
    </NavContainer>
  )
}
export default Navbar

const NavContainer = styled.nav`
  position: relative;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  // background-color: red;

  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;
    // background-color: magenta;
  }

  .logo {
    font-family: "Righteous", sans-serif;
    color: var(--clr-dark-grunge);
  }

  .hamburger-wrapper {
    border: none;
    cursor: pointer;
  }

  .bar {
    width: 23px;
    height: 4px;
    background-color: var(--clr-dark-gray);
    border-radius: 5px;
    margin-bottom: 0.2em;
    transition: var(--transition);
  }

  .bar.bar-one.active {
    display: none;
  }

  .bar.bar-second.active {
    transform: translate(0, 7px) rotate(45deg);
  }

  .bar.bar-third.active {
    transform: rotate(-45deg);
  }

  .nav-link-wrapper {
    padding: 0;
    list-style-type: none;
    gap: 2em;
    text-transform: capitalize;
    display: none;
  }

  .nav-icons-wrapper {
    display: none;
  }

  @media (min-width: 950px) {
    .hamburger-wrapper {
      display: none;
    }
    .nav-link-wrapper {
      display: flex;
    }
    .nav-icons-wrapper {
      display: block;
    }
  }
`
