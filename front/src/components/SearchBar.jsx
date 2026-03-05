

const SearchBar = ({value, onChange}) => {
    return (
        <label  className="line-of-Search">
            SearchMovie
            <input 
                type="search"
                placeholder="Search a Movie"
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />

        </label>
    )
}

export default SearchBar;
