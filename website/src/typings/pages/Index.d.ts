import { NextPage } from 'next'

import { Post } from '@typings/data/Post'

export type IndexPageProps = {
    posts?: Array<Post>
}

export type IndexPage = NextPage<IndexPageProps>
