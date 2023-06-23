import styled from "styled-components"
const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer">
        <p>&copy; {new Date().getFullYear()} Shop Local </p>
        <p>All rights reserved</p>
      </div>
    </FooterWrapper>
  )
}
export default Footer

const FooterWrapper = styled.div`
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.1em;
    font-size: 0.8rem;
    background-color: var(--clr-darkest-grunge);
    padding: 2em;
  }

  .footer {
    p {
      margin: 0;
      color: white;
    }
  }
`
