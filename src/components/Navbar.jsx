import styled from "styled-components"
import { Link } from "react-router-dom"
import { links } from "../utils/constants"
import NavIcons from "./NavIcons"
import { useProductsContext } from "../context/productsContext"
import { useUserContext } from "../context/UserContext"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

const Navbar = () => {
  const { showSidebar, toggleSidebar } = useProductsContext()
  const { myUser } = useUserContext()
  const [showNav, setShowNav] = useState(true)
  const [yPos, setYPos] = useState(0)

  const handleScroll = () => {
    // console.log("scrolling")
    if (typeof window !== undefined) {
      if (window.scrollY > yPos) {
        setShowNav(false)
        // console.log("scrolling down")
      } else {
        setShowNav(true)
      }
      setYPos(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [yPos])
  return (
    <NavContainer className={`nav-bar ${!showNav && "hidden"}`}>
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
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active-nav-link"
                    : isPending
                    ? "pending-nav-link"
                    : ""
                }
                key={id}
                to={url}
              >
                <li className="nav-link">{text}</li>
              </NavLink>
            )
          })}
          {myUser && (
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "active-nav-link"
                  : isPending
                  ? "pending-nav-link"
                  : ""
              }
              key="checkout"
              to="/checkout"
            >
              <li className="nav-link">checkout</li>
            </NavLink>
          )}
        </ul>
        <NavIcons />
      </div>
    </NavContainer>
  )
}
export default Navbar

const NavContainer = styled.nav`
  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;
  }

  .nav-link {
    font-weight: 600;
  }

  .logo {
    font-family: "Righteous", sans-serif;
    color: var(--clr-dark-gray);
    font-size: 2rem;
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

  .active-nav-link {
    border-bottom: 3px solid var(--clr-dark-grunge);
    padding-bottom: 0.2em;
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

  @media (max-width: 400px) {
    .logo {
      margin: 0.5em;
    }
  }
`
