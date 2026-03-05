const fetchToMovie = async () => {
    const response = await fetch('http://localhost:3000/api/movies');
    if (!response) {
        throw new Error('fetch failed')
    }

    return response.json();
}

export default fetchToMovie;