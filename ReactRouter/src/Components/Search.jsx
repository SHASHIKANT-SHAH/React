import { useSearchParams } from "react-router-dom";

function Search() {
    const [searchParam, setSearchParam] = useSearchParams();

    let searchFunction = (event) => {
        event.preventDefault();
        alert('Search button clicked!' + searchParam.get('query'));
    }
    return (
        <div>
            <h1>Search Component</h1>
            <form onSubmit={searchFunction}>
                <input 
                type="text" 
                placeholder="Search..."  
                onChange={(e) => setSearchParam({query: e.target.value})} />   
                <button type="submit">Search</button>
                <button type="reset" onClick={()=> setSearchParam({query:'rohan'})}>Update Search Param</button>
                <button type="reset" onClick={() => setSearchParam({})}>Reset</button>
            </form>
        </div>
    );
}


export default Search;
