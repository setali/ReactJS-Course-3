// import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'

export default function Post ({post = {}}) {

  // const {query: {id}} = useRouter()

  console.log(post)

  return (
    <div>
      <div>
        <h3>
          {post.title}
        </h3>
        <p>
          {post.body}
        </p>
      </div>

      <Link href="/post">
        <a>
          Return to list
        </a>
      </Link>

    </div>
  )
}

export async function getServerSideProps ({params: {id}}) {

  const {data: post} = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`)

  return {
    props: {
      post
    }
  }
}