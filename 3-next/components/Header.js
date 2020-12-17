import Image from 'next/image'

export default function Header () {
  return (
    <header>
      {/*<Image src="/logo.png" alt="" width={'100px'} height={'80px'}/>*/}
      <img src="logo.png" alt="" width={'100px'} height={'80px'}/>
      <h2 style={{display: 'inline', marginLeft: '50px'}}>
        My Header
      </h2>

      {/*<style jsx>{`*/}
      {/*  h2  {*/}
      {/*    display: inline;*/}
      {/*    margin-left: 50px;*/}
      {/*  }*/}
      {/*`}</style>*/}
    </header>
  )
}