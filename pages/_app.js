import GenericFooter from "../src/common/generic-footer";
import GenericNavbar from "../src/common/generic-navbar";

import 'bootstrap/dist/css/bootstrap.min.css'

// IMPORTS: Module wise CSS imports
import '../src/styles/common.css'
import '../src/styles/globals.css'
import '../src/styles/explore.css'
import '../src/styles/home.css'
import '../src/styles/projects.css'


export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <GenericNavbar />
            <div className='container m-auto p-3'>
                <Component {...pageProps} />
            </div>
            <GenericFooter />
        </>
    )
}