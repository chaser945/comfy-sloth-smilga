import { useUserContext } from "../context/UserContext"
import { LoadingSpin } from "../components"
import styled from "styled-components"

const AuthWrapper = ({ children }) => {
  const { isLoading } = useUserContext()
  if (isLoading) {
    return (
      <Wrapper>
        <div className="loading-wrapper">
          <LoadingSpin />
        </div>
      </Wrapper>
    )
  }
  return <>{children}</>
}
export default AuthWrapper

const Wrapper = styled.div`
  .loading-wrapper {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
