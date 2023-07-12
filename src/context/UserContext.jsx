import { createContext, useContext } from "react"
import { useAuth0 } from "@auth0/auth0-react"
const UserContext = createContext()

const UserProvider = ({ children }) => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0()
  const myUser = isAuthenticated && user
  return (
    <UserContext.Provider
      value={{
        loginWithRedirect,
        logout,
        user,
        isAuthenticated,
        isLoading,
        myUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

const useUserContext = () => useContext(UserContext)

export { UserProvider, useUserContext }
