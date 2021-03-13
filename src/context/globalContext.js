import React,{createContext,useContext,useReducer} from 'react'
// import IndexPage from '../pages/index'
// import AboutPage from '../pages/about'
// import Layout from '../components/layout'
// Creating Global State Context for Dark/Light Theme
export const GlobalStateContext = createContext();
// Creating Global State Context for Dark/Light Theme
export const GlobalDispatchContext = createContext()

// Reducer
const globalReducer = (state,action)=>{
    
    switch(action.type){
        case "TOGGLE_THEME":
            return{
                ...state,
                currentTheme:action.theme
            }
        case "CURSOR_TYPE":
            return{
                ...state,
                cursorType:action.cursorType
            }
        default:
            throw new Error(`Unhandaled action Type:${action.type}`)
    }

}
// To wrap our context inside the GlobalProvider
export const GlobalProvider = ({children}) => {

    const [state,dispatch] = useReducer(globalReducer,{
        currentTheme:window.localStorage.getItem("theme") == null
        ? "dark"
        : window.localStorage.getItem("theme"),
        cursorType: false,
        cursorStyles: ['pointer','hovered','locked']
    })
    return(
        <GlobalDispatchContext.Provider value={dispatch.arguments}>
            <GlobalStateContext.Provider value={state}>
                <main>{children}</main>
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    )
    
}
// creating custom hooks to use the sate and dispatch
export const useGlobalStateContext = ()=> useContext(GlobalStateContext);
export const useGlobalDispatch = ()=> useContext(GlobalDispatchContext);
