import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

import { IndexPage } from '@typings/pages/Index'

import PAGES from '@configuration/pages'

import Navbar from '@sections/Navbar'
import AboutMe from '@sections/AboutMe'
import LatestPosts from '@sections/LatestPosts'
import Footer from '@sections/Footer'

import { getAllPosts } from '@lib/cms/posts'

const Index: IndexPage = ({ posts }) => {
    return (
        <>
            <NextSeo title="home" />
            <Navbar />
            <AboutMe />
            <LatestPosts posts={posts} />
            <Footer />
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getAllPosts({ limit: 5 })

    return {
        props: { posts },
        revalidate: PAGES.revalidation,
    }
}

export default Index
