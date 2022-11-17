import * as React from 'react'
import { Link } from 'gatsby'
import {
  post,
} from './post.module.css'
import {
  flexparent,
  flexchild
} from './util.module.css'

const Post = () => {
  return (
    <div className={post}>
      <div className={flexparent}>
        <div className={flexchild}>Image</div>
        <div className={flexchild}>Test Post Text</div>
      </div>
      <div>
        Post Text
      </div>
    </div>
  )
}

export default Post