import { useEffect, useState } from "react";


const Pagination = ({ limit, setOffset, length }) => {

  const [ allPages, setAllPages ] = useState(0)
  const [ page, setPage ] = useState(1)

  const handleNextPage = () => {
    if (page === allPages) {
      return
    }
    setPage(prev => prev + 1)
    setOffset(prev => prev + limit)
  }

  const handlePrevPage = () => {
    if (page === 1) {
      return
    }
    setPage(prev => prev - 1)
    setOffset(prev => prev - limit)
  }

  useEffect(() => {
    const pages = Math.ceil(length / limit)
    setAllPages(pages)
  }, [ limit, length ])

  return ( 
    <div>
    <button onClick={handlePrevPage}>prev</button>
      <h1>{page}/{allPages}</h1>
    <button onClick={handleNextPage}>next</button>
    </div>
   );
}
 
export default Pagination;