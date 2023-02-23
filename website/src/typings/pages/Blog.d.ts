import { NextPage } from 'next'

import { Post } from '@typings/data/Post'

export type BlogPageProps = {
    posts: Array<Post>
}

export type BlogPage = NextPage<BlogPageProps>
