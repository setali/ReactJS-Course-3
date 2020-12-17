import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Posts ({posts= []}) {

  // const [posts, setPosts] = useState([])

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(data => setPosts(data))
  // }, [])

  return (
    <div>
      <h2>Post list</h2>
      <ol>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ol>
    </div>
  )
}

export async function getServerSideProps() {

  const response = await axios('https://jsonplaceholder.typicode.com/posts')

  // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  // const data = await response.json()

  return {
    props: {
      name: 'Ali',
      posts: response.data
    }
  }
}











