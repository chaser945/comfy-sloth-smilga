import styled from "styled-components"
import { Link } from "react-router-dom"
const Error = () => {
  return (
    <Wrapper className="error-page">
      <h1 className="error-title">404</h1>
      <p className="error-text">The requested page was not found</p>
      <Link to="/">
        <button className="btn"> Back to home</button>
      </Link>
    </Wrapper>
  )
}
export default Error

const Wrapper = styled.section`
  background-color: var(--clr-light-grunge);
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .error-title {
    margin: 0;
  }
`
