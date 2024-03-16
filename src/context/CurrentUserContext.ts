import { createContext } from "react"
import { User } from "../types"

interface CurrentUserContextInterface {
  currentUser: User
  setCurrentUser: (user: User) => void
}

export const CurrentUserContext = createContext<CurrentUserContextInterface>({} as CurrentUserContextInterface)