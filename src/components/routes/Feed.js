import React, { useState } from 'react'
import Header from '../universal/Header'
import Post from '../feed/Post'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/slices/user'
import PostForm from '../feed/PostForm'

const Posts = styled.div``

const posts = [
  { name: 'Søren Sven', date: new Date(), post: 'Jeg kan ikke lige rugbrød' },
  { name: 'Søren Sven', date: new Date(), post: 'Jeg kan ikke lige rugbrød' },
  { name: 'Søren Sven', date: new Date(), post: 'Jeg kan ikke lige rugbrød' },
  { name: 'Søren Sven', date: new Date(), post: 'Jeg kan ikke lige rugbrød' },
  { name: 'Søren Sven', date: new Date(), post: 'Jeg kan ikke lige rugbrød' },
  { name: 'Søren Sven', date: new Date(), post: 'Jeg kan ikke lige rugbrød' },
  { name: 'Søren Sven', date: new Date(), post: 'Jeg kan ikke lige rugbrød' },
  { name: 'Søren Sven', date: new Date(), post: 'Jeg kan ikke lige rugbrød' },
  { name: 'Søren Sven', date: new Date(), post: 'Jeg kan ikke lige rugbrød' },
  { name: 'Søren Sven', date: new Date(), post: 'Jeg kan ikke lige rugbrød' },
  { name: 'Søren Sven', date: new Date(), post: 'Jeg kan ikke lige rugbrød' }
]
const Feed = props => {
  const user = useSelector(selectUser)

  const [formText, setFormText] = useState('')

  const disableFormSubmit = () => {
    return formText.length < 10
  }

  const onSubmit = () => {
    setFormText('')
    alert('submitted')
  }
  return (
    <div>
      <Header />
      {/*user.isLoggedIn && <PostForm />*/}

      <PostForm
        disableSubmit={disableFormSubmit}
        onSubmit={onSubmit}
        text={formText}
        setText={setFormText}
      />
      <Posts>
        {posts.map((post, i) => (
          <Post key={i} name={post.name} date={post.date} post={post.post} />
        ))}
      </Posts>
    </div>
  )
}

export default Feed
