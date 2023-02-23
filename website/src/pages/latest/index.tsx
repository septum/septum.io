import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

import { LatestPage } from '@typings/pages/Latest'

import PAGES from '@configuration/pages'

import Navbar from '@sections/Navbar'
import LatestPosts from '@sections/LatestPosts'
import Footer from '@sections/Footer'

import { getAllPosts } from '@lib/cms/posts'

const Latest: LatestPage = ({ posts }) => {
    return (
        <>
            <NextSeo title="latest" />
            <Navbar title="septum.io — latest" />
            <LatestPosts posts={posts} />
            <Footer />
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getAllPosts({ limit: 10 })

    return {
        props: { posts },
        revalidate: PAGES.revalidation,
    }
}

export default Latest
