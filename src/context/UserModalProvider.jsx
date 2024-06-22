import { useContext , createContext , useState } from "react"


const UserModal = createContext()

export default function UserModalProvider({children}){
    const [ display , setDisplay ] = useState(false)
    return(
        <UserModal.Provider value={{display , setDisplay}}>
            {children}
        </UserModal.Provider>
    )
}

export const useUserModal = ()=> useContext(UserModal)
