import UserModalProvider from "./UserModalProvider"
import DrawerContextProvider from "./DrawerContextProvider"
export default function ContextProvider({children}){
    return(
       <>
            <UserModalProvider>
                <DrawerContextProvider>
                   {children}
                </DrawerContextProvider>
            </UserModalProvider>
       </>
           
        
    )
}