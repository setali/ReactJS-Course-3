import ACL from './ACL'

function Button({children, ...props}) {
  return (
    <button>{children}</button>
  )
}

export default ACL(Button)