import React from 'react'
const user = {
  name: 'Ali',
  family: 'Mousavi',
  permissions: ['view_task_list', 'add_task']
}

function ACL(Component) {
  return class extends React.Component {
    render () {
      return user.permissions.includes(this.props.permission) || <Component {...this.props} />
      // if (user.permissions.includes(this.props.permission)) {
      //   return <Component {...this.props} />
      // }
      //
      // return null
    }
  }
}
//
// const userObj = null
//
// const myUser = userObj ? userObj : {}
// const myUser = userObj || {}


export default ACL
