import FooterX from "../src/common/Footer";
import NavbarX from "../src/common/Navbar";

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