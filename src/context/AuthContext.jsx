import {createContext,
    useContext,
    useReducer} from 'react'




export const AuthContext = createContext()

const initialState = { 
    user : null
}

const reducers = (state,action) => { 
    // switch(action.type){ 
    //     case 'login': 
    //       return { 
    //         user : action.payload
    //       }
    //     break;
    //     case 'logout': 
    //     return { 
    //         user: null
    //     }
    //     break;
    //     default:
    //      return initialState
    // }
    return state
}

export const AuthContextProvider = ({children}) => { 
    const [user,dispatch] = useReducer(initialState,reducers)
    return( 
        <AuthContext.Provider value = {{user,dispatch}}>
             {children}
        </AuthContext.Provider>
    )
}


export function useAuthContext (){ 
    return useContext(AuthContext)
}