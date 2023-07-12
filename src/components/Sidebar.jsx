import { links } from "../utils/constants"
import { Link } from "react-router-dom"
import styled from "styled-components"
import NavIcons from "./NavIcons"
import { useProductsContext } from "../context/productsContext"
import { useUserContext } from "../context/UserContext"
const Sidebar = () => {
  const { showSidebar, toggleSidebar } = useProductsContext()
  const { myUser } = useUserContext()
  return (
    <SidebarWrapper>
      <div className={showSidebar ? "side-bar" : "side-bar inactive"}>
        <ul className="nav-link-wrapper">
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <Link key={id} to={url}>
                <li className="nav-link" onClick={toggleSidebar}>
                  {text}
                </li>
              </Link>
            )
          })}
          {myUser && (
            <Link key="checkout" to="/checkout">
              <li className="nav-link" onClick={toggleSidebar}>
                checkout
              </li>
            </Link>
          )}
        </ul>
        <NavIcons />
      </div>
    </SidebarWrapper>
  )
}
export default Sidebar

const SidebarWrapper = styled.div`
  .side-bar {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    left: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    background-color: white;
    transition: var(--transition);
    z-index: 5;
  }

  .side-bar.inactive {
    transform: translate(100%, 0);
  }

  .nav-link-wrapper {
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 2em;
    text-transform: capitalize;
    justify-content: center;
    align-items: center;
  }

  .nav-link {
    font-weight: 600;
    font-size: 1.2rem;
    // background-color: magenta;
  }

  .nav-icons-wrapper {
    font-weight: 600;
  }

  @media (min-width: 950px) {
    .side-bar {
      display: none;
    }
  }
`
