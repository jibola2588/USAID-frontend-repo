import {createContext,useContext} from 'react'
import {array} from './store'


export const storeProvider = createContext()


export const StoreContextProvider = ({children}) => { 
    //  const useStoreContext = useContext(storeProvider ) 
    return( 
        <storeProvider.Provider value = {array}>
             {children}
        </storeProvider.Provider>
    )
}