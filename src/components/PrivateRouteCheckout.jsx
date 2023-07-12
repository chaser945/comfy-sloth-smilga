import { Navigate } from "react-router-dom"
import { useUserContext } from "../context/UserContext"
import LoadingSpin from "./LoadingSpin"
const PrivateRouteCheckout = ({ children }) => {
  const { myUser, isLoading } = useUserContext()
  if (isLoading) {
    return <LoadingSpin />
  }
  if (!myUser) {
    return <Navigate to="/" />
  }
  return <>{children}</>
}
export default PrivateRouteCheckout
