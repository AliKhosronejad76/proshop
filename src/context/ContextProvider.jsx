import UserModalProvider from "./UserModalProvider"

export default function ContextProvider({children}){
    return(
        <>
            <UserModalProvider>
                {children}
            </UserModalProvider>
        </>
    )
}