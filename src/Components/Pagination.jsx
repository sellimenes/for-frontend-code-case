import React from 'react'
import styles from './Pagination.module.css'

const Pagination = ({setPageNumber, pageNumber}) => {

    const handleNextBtn = () => {
        
        setPageNumber((currentPage) => currentPage + 1);
    }

    const handlePrevBtn = () => {
        if(pageNumber === 1) return;
        setPageNumber((currentPage) => currentPage - 1);
    }

  return (
    <div className={styles.pagination}>
        <button onClick={handlePrevBtn} className={styles.prevBtn}>Previous</button>
        <button onClick={handleNextBtn} className={styles.nextBtn}>Next</button>
    </div>
  )
}

export default Pagination