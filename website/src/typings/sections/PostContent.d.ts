import { FunctionComponent } from 'react'

import { Post } from '@typings/data/Post'

export type PostContentSectionProps = {
    post: Post
}

export type PostContentSection = FunctionComponent<PostContentSectionProps>
