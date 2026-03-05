import { useEffect } from "react";
import fetchToMovie from "../apiConect";
import useStore from "../useStore";
import useDebounce from "../Hooks/useDebounce";


import Error from "../components/Error";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbae";
import MovieCard from "../components/MovieCard";

const HomePage = () => {
    const {
        movies,
        isLoading,
        error,
        SearchQuery, 
        setMovies,
        setLoading,
        setError,
        setSearchQuery
    } = useStore()

    useEffect(()=> {
        const loadingmovie = () => {
            if (movies.length > 0) {
                return
            }

            setLoading(true)
            setError(null)

            try {
                const movie = fetchToMovie()
                setMovies(movie)
            } catch(err) {
                setError(err.message)
            }
        }

            loadingmovie()
        }, [setMovies, setLoading, setError, movies,length])
        
        const filterdMovies = data.filter(movie => {
            movie.title.toLowercase ||
            
        })
    return (
        <div className="home-page">
            <div className="head">

            </div>
        </div>
    )
}

