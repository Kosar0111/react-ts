import  {FC, useState, useEffect} from 'react'

import  './Pagination.css'

type PaginetionProps = {
 postPerPage: number,
 total: number,
 pages: number,
 paginate: (pageNumber: number) => void,
}


const Pagination: FC<PaginetionProps> = ({total, postPerPage, paginate}) => {
  const pageNumbers : any = [] 
  
  for(let i = 1; i <= Math.ceil(total / postPerPage); i++){
    pageNumbers.push(i)
  }

  const [currentButton, setCurrentButton] = useState(1)
  const [arrOffCurrentButton, setArrOffCurrentButton] = useState([])
  
  useEffect(() => {
    let templeNumberPages : any = [...arrOffCurrentButton]

    const dotsInitial : any = '...'
    const dotsLeft = '... '
    const dotsRight = ' ...'


    if(currentButton >= 1 && currentButton <= 3) {
      templeNumberPages = [1, 2, 3, 4, dotsInitial, pageNumbers.length]
    }

    else if(currentButton === 4 ) {
      const sliced = pageNumbers.slice(0, 5)
      templeNumberPages = [...sliced, dotsInitial, pageNumbers.length]
    }

    else if (currentButton > 4 && currentButton < pageNumbers.length - 2) {
      const sliced1 = pageNumbers.slice(currentButton -2, currentButton)
      const sliced2 = pageNumbers.slice(currentButton, currentButton + 1)
      templeNumberPages = [1, dotsLeft, ...sliced1, ...sliced2, dotsRight, pageNumbers.length]
    }

    else if (currentButton > pageNumbers.length - 3){
      const sliced = pageNumbers.slice(pageNumbers.length - 4)
      templeNumberPages = [1, dotsLeft, ...sliced]
    }

    else if (currentButton === dotsInitial){
      setArrOffCurrentButton(arrOffCurrentButton[arrOffCurrentButton.length-3])
    }
    paginate(currentButton)
    setArrOffCurrentButton(templeNumberPages)
  }, [currentButton])

  return (
    <div>
      <div className="pagination-container">
        <a 
          href="!#" 
          className={(currentButton === 1) ? 'desabled' : ''}
          onClick={() => setCurrentButton(prev => prev === 1 ? prev : prev - 1)}>Prev</a>
        {arrOffCurrentButton.map(number  =>(
          <a  
            key={number} 
            onClick={() => setCurrentButton(number)} 
            href="!#" 
            className={currentButton === number ? 'active' : ''}>{number}</a>
        ))}
        <a 
          href="!#"
          className={(currentButton === pageNumbers.length) ? 'desabled' : ''}
          onClick={() => setCurrentButton(prev => prev === pageNumbers.length ? prev : prev + 1)}
        >Next</a>
      </div>
    </div>
  )
}

export default Pagination