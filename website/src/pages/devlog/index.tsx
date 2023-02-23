import { NextSeo } from 'next-seo'

import { DevlogPage } from '@typings/pages/Devlog'

import Navbar from '@sections/Navbar'
import DevlogDescription from '@sections/DevlogDescription'
import Footer from '@sections/Footer'

const Devlog: DevlogPage = () => {
    return (
        <>
            <NextSeo title="devlog" />
            <Navbar title="septum.io — devlog" />
            <DevlogDescription />
            <Footer />
        </>
    )
}

export default Devlog
