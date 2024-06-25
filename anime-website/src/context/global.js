import React, { createContext, useContext, useReducer } from 'react'

const GlobalContext = createContext();

const baseURL = "https://api.jikan.moe/v4"

//reducer
const reducer = (state, action) => {
    return state;
}


export const GlobalContextProvider = ({children}) => {
    // initial state
    const initialstate = {
        popularAnime: [],
        upcomingAnime: [],
        airingAnime: [],
        pictures: [],
        isSearch: false,
        searchResults: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(reducer, initialstate);

    //FETCHING POPULAR ANIME
    const getPopularAnime = async () => {
        const response = await fetch(`${baseURL}/top/anime?filter=bypopularity`);
        const data = await response.json();
        console.log(data.data);
    }

    //initial render
    React.useEffect(() => {
        getPopularAnime();

    }, [])

    return(
        <GlobalContext.Provider value={{
            ...state,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


export const GlobalContextUse = () => {
    return useContext(GlobalContext);
}