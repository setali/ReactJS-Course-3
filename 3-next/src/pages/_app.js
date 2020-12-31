// import NextNprogress from 'nextjs-progressbar';
import random from 'lodash/random'
import 'styles/global.css'
import Header from "cmp/Header";
import Sidebar from "cmp/Sidebar";
import Footer from "cmp/Footer";
import ProgressBar from "cmp/Progress";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function MyApp ({Component, pageProps}) {

  // console.log(Component, pageProps);

  // const props = pageProps
  // props.name = 'Ali'

  return (
    <div>

      {/*<NextNprogress*/}
      {/*  color="#29D"*/}
      {/*  startPosition={0.3}*/}
      {/*  stopDelayMs={200}*/}
      {/*  height="3"*/}
      {/*/>*/}

      <ProgressBar />

      {random(1, 100)}
      {/*{getRandomInt(1, 100)}*/}

      <Header/>

      <section style={{display: 'flex'}}>

        <Sidebar/>

        <article>
          <Component {...pageProps} />
        </article>

      </section>

      <Footer/>
    </div>
  )
}