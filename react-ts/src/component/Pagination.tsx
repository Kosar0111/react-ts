import  {FC} from 'react'

import  './Pagination.css'


type PaginetionProps = {
 postPerPage: number,
 total: number,
 paginate: any
}

const Pagination: FC<PaginetionProps> = ({total, postPerPage, paginate}) => {
  const pageNumbers = []

  for(let i = 1; i <= Math.ceil(total / postPerPage); i++){
    pageNumbers.push(i)
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number =>(
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination