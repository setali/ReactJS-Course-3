import axios from 'axios'
import Link from 'next/link'
import Error from '../_error'

export default function User ({user = {}, statusCode}) {

  if (statusCode) {
    return <Error statusCode={statusCode}/>
  }


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
    fallback: false
  }
}

export async function getStaticProps ({params: {id}}) {

  let user = {}, statusCode = false

  try {
    const response = await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    user = response?.data
  }
  catch (err) {
    statusCode = err.response.status
  }

  return {
    props: {
      user,
      statusCode
    },
    revalidate: 3
  }
}