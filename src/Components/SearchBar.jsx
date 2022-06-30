import React from 'react'
import styles from './SearchBar.module.css'

const SearchBar = () => {
  return (
    <form>
        <input type="text" placeholder='Search Characters'/>
        <button>Search</button>
    </form>
  )
}

export default SearchBar