import React from 'react';




const resetInputField = () => {
    setSearchValue("")
}

const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
}

const Search = () => {
return(
    <form className="search">
        <input
            value={searchValue}
            onChange={handleSearchInputChanges}
            type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
);
}

export default Search;