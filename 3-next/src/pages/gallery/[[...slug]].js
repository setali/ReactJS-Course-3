
export default function Gallery({params}) {
  // console.log(params)

  const obj = {
    firstName: 'Mahtab',
    lastName: 'HoseinPanah',
    // family: {
    //   father: 'Ebrahim'
    // }
    getFullName: function () {
      return `${this.firstName} ${this.lastName}`
    }
  }

  console.log(obj.family?.father)
  console.log(obj.getFullName?.())

  // console.log(obj.family ? obj.family.father : undefined)

  return (
    <div>
      Optional catch all routes => {params.slug?.join(' / ')}
      {/*Optional catch all routes => {params.slug ? params.slug.join(' / ') : ''}*/}
    </div>
  )
}

export async function getServerSideProps({params}) {

  console.log(params)

  return {
    props: {
      params
    }
  }
}