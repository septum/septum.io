import { NextPage } from 'next'

import { Post } from '@typings/data/Post'

export type LatestPageProps = {
    posts?: Array<Post>
}

export type LatestPage = NextPage<LatestPageProps>
