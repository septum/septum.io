import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

import { BlogPage } from '@typings/pages/Blog'

import PAGES from '@configuration/pages'

import Navbar from '@sections/Navbar'
import BlogEntries from '@sections/BlogEntries'
import Footer from '@sections/Footer'

import { getAllPosts } from '@lib/cms/posts'

const Blog: BlogPage = ({ posts }) => {
    return (
        <>
            <NextSeo title="blog" />
            <Navbar title="septum.io — blog" />
            <BlogEntries posts={posts} />
            <Footer />
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getAllPosts()

    return {
        props: { posts },
        revalidate: PAGES.revalidation,
    }
}

export default Blog
