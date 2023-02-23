import { NextSeo } from 'next-seo'

import { Error500Page } from '@typings/pages/500'

import Navbar from '@sections/Navbar'
import ServerError from '@sections/ServerError'
import Footer from '@sections/Footer'

const Error500: Error500Page = () => {
    return (
        <>
            <NextSeo title="500" />
            <Navbar title="septum.io — :(" />
            <ServerError />
            <Footer />
        </>
    )
}

export default Error500
