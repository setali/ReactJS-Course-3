import '../styles/global.css'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }) {

    // console.log(Component, pageProps);

    // const props = pageProps
    // props.name = 'Ali'

    return (
        <div>

            <Header />

            <section style={{display: 'flex'}}>

                <Sidebar />

                <article>
                    <Component {...pageProps} />
                </article>

            </section>

            <Footer />
        </div>
    )
}