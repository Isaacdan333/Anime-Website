import React, { createContext, useContext, useReducer } from 'react'

const GlobalContext = createContext();

const baseURL = "https://api.jikan.moe/v4"

// actions
const loading = "LOADING";
const search = "SEARCH";
const get_popular_anime = "GET_POPULAR_ANIME";
const get_upcoming_anime= "GET_UPCOMING_ANIME"
const get_airing_anime = "GET_AIRING_ANIME";

//reducer
const reducer = (state, action) => {
    switch(action.type){
        case loading:
            return{...state, loading: true}
        case get_popular_anime:
            return{...state, popularAnime: action.payload, loading: false}
        default:
            return state;
    }
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
        dispatch({type: loading})
        const response = await fetch(`${baseURL}/top/anime?filter=bypopularity`);
        const data = await response.json();
        dispatch({type: get_popular_anime, payload: data.data})
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