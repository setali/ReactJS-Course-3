import Link from 'next/link'

export default function Menu () {
  return (
    <menu>
      <ul>
        <li>
          <Link href={"/"}>
            <a>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/contact"}>
            <a>
              Contact
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/about"}>
            <a>
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/post"}>
            <a>
              Post
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/user"}>
            <a>
              User
            </a>
          </Link>
        </li>
      </ul>
    </menu>
  )
}
