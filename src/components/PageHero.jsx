import { Link } from "react-router-dom"
import styled from "styled-components"
const PageHero = ({ title }) => {
  return (
    <Wrapper>
      <h3 className="page-hero-title section">
        <Link to="/" className="home-link">
          Home{" "}
        </Link>
        / {title}{" "}
      </h3>
    </Wrapper>
  )
}
export default PageHero

const Wrapper = styled.article`
  background-color: var(--clr-light-grunge);
  padding: 3em 0em;

  .page-hero-title {
    // background-color: magenta;
    padding: 1em;
    word-spacing: 4px;
    letter-spacing: 1px;
  }

  .home-link {
    color: var(--clr-dark-grunge);
    transition: var(--transition);
  }
  .home-link:hover {
    color: var(--clr-dark-gray);
  }
`
