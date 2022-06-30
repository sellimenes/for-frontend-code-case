import React from 'react'
import styles from './SearchBar.module.css'

// Search submit olduğunda sayfa yenilenmesin
const SearchBar = ({setSearch, setPageNumber}) => {
    const handleSearch = (e) => {
        e.preventDefault();
    }
    
  return (
    <form onSubmit={handleSearch}>
        <input 
            onChange={e => {
                setSearch(e.target.value); 
                setPageNumber(1);
                }} 
            type="text" 
            placeholder='Search Characters'
        />
        <button>Search</button>
    </form>
  )
}

export default SearchBar