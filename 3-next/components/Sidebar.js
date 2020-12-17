import Menu from './Menu'

export default function Sidebar () {
  return (
    <aside>
      <h3>My Sidebar</h3>
      <Menu/>

      <style jsx>{`
        h3 {
          color: red;
        }
      `}
      </style>
    </aside>
  )
}