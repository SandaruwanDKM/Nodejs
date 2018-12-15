import React from 'react';

const SearchBox = ({searchfiled,searchChange}) =>{
    return(
        <div className="pa3">
            <input className="ba b--green bg-light-green"
                   type='search'
                   placeholder="Search Here"
                   onChange={searchChange}
            />
        </div>

    );
}

export default SearchBox;