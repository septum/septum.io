import { NextSeo } from 'next-seo'

import { Error404Page } from '@typings/pages/404'

import Navbar from '@sections/Navbar'
import NotFound from '@sections/NotFound'
import Footer from '@sections/Footer'

const Error404: Error404Page = () => {
    return (
        <>
            <NextSeo title="404" />
            <Navbar title="septum.io — ?" />
            <NotFound />
            <Footer />
        </>
    )
}

export default Error404
