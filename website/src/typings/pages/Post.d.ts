import { NextPage } from 'next'

import { Post } from '@typings/data/Post'

export type PostPageProps = {
    post: Post
    preview: boolean
}

export type PostPage = NextPage<PostPageProps>
