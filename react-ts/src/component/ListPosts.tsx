import { FC, useState } from 'react'

import { useAppSelector } from '../hooks/hooks'

import Pagination from './Pagination'
import Post from './Post'

const ListPosts: FC = () => {
  const posts = useAppSelector(state => state.posts.posts)
  const total = posts.length
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(4)

  const indexOfLastPage = currentPage * postPerPage
  const indexOfFirstPage = indexOfLastPage - postPerPage
  const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div>
      {currentPosts.map(post => (
        <Post key={post.id} {...post} />
      ))}
      <Pagination postPerPage={postPerPage} total={total} paginate={paginate} />
    </div>
  )
}

export default ListPosts
