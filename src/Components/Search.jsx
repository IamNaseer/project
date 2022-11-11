import './Css/Search.css';

const Search = () =>{
    return(
        <div className="search">
            <input type="text"placeholder="Ex: React" />
            <button type='submit'>Search</button>
        </div>
    );
}

export default Search;