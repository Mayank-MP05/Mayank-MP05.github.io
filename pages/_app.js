import FooterX from "../src/common/Footer";
import NavbarX from "../src/common/Navbar";

// IMPORTS: Module wise CSS imports
import '../src/styles/common.css'
import '../src/styles/explore.css'
import '../src/styles/home.css'
import '../src/styles/projects.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <NavbarX />
            <div className='container m-auto p-3'>
                <Component {...pageProps} />
            </div>
            <FooterX />
        </>
    )
}