import { create } from 'zustand';

const useStore = create((set) => ({
    movies: [],
    isLoading: false,
    error: null,
    searchQuery: '',

    setMovies: (movies) => 
        set({movies}),
    setLoading: (isLoading) =>
        set({isLoading}),
    setError: (error) =>
        set({error}),
    setSearchQuery: (searchQuery) =>
        set({searchQuery}),

}))

export default useStore;