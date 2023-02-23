import { GetStaticProps, GetStaticPaths } from 'next'
import { NextSeo } from 'next-seo'

import { PostPage } from '@typings/pages/Post'
import { Post } from '@typings/data/Post'

import PAGES from '@configuration/pages'

import Navbar from '@sections/Navbar'
import PreviewBanner from '@sections/PreviewBanner'
import PostContent from '@sections/PostContent'
import Footer from '@sections/Footer'

import { getAllPosts, getOnePostBySlug } from '@lib/cms/posts'

const Post: PostPage = ({ post, preview }) => {
    return (
        <>
            <NextSeo title={post.title.toLowerCase()} />
            <PreviewBanner preview={preview} />
            <Navbar title="septum.io — blog" />
            <PostContent post={post} />
            <Footer />
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getAllPosts()
    const paths = posts.map(({ slug }) => ({ params: { slug } }))

    return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const preview = context.preview ?? false
    const slug = context.params?.slug as string

    const post: Post = await getOnePostBySlug(slug, { preview })

    return {
        notFound: !post,
        props: { post, preview },
        revalidate: PAGES.revalidation,
    }
}

export default Post
