import {BrowserRouter} from "react-router-dom"
import ContextProvider from "./context/ContextProvider"
import Layout from "./components/layout/Layout"
import Router from "./components/router/Router"

export default function App(){
  
  return(
     <BrowserRouter>
         <ContextProvider>
            <Layout>
               <Router/>
            </Layout>
         </ContextProvider>  
      </BrowserRouter>
  )
}
