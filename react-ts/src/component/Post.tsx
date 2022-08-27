import React from 'react'

import './Post.css'
import { IPost } from '../models/models'
import user from '../img/user.png'

type IPostProps = IPost

const Post: React.FC<IPostProps> = props => {
  const { author, description, time } = props
  return (
    <div className="post">
      <img className="img" src={user} alt="user" />
      <div className="content">
        <div className="content__author">Author:{author}</div>
        <div className="content__comment">Commeny:{description}</div>
        <div className="content__time">{time}</div>
      </div>
    </div>
  )
}

export default Post
