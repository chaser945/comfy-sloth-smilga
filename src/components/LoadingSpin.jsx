import styled from "styled-components"

const LoadingSpin = () => {
  return (
    <Wrapper>
      <div className="loading-div">
        <div className="spin"></div>
      </div>
    </Wrapper>
  )
}
export default LoadingSpin

const Wrapper = styled.div`
  .loading-div {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .spin {
    width: 80px;
    height: 80px;
    border: 3px solid;
    border-color: var(--clr-dark-grunge) transparent var(--clr-dark-grunge)
      transparent;
    border-radius: 50%;
  }
`
