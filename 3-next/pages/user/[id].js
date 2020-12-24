import axios from 'axios'
import Link from 'next/link'

export default function User ({user = {}}) {

  return (
    <div>
      <h3>{user.name}</h3>
      <p>
        {user.email}
      </p>

      <Link href={`/user`}>
        <a>
          Return to list
        </a>
      </Link>
    </div>
  )
}

export async function getStaticPaths(context) {
  const {data: users} = await axios(`https://jsonplaceholder.typicode.com/users/`)

  users.length = 5

  const paths = users.map(user => ({params: {id: `${user.id}`}}))
  // const paths = [
  //   {params: {id: '1'}},
  //   {params: {id: '2'}},
  //   {params: {id: '3'}},
  // ]

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps ({params: {id}}) {

  const {data: user} = await axios(`https://jsonplaceholder.typicode.com/users/${id}`)

  console.log(user.id)

  return {
    props: {
      user
    },
    revalidate: 3
  }
}