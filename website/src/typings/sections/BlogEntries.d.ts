import { FunctionComponent } from 'react'

import { Post } from '@typings/data/Post'

export type BlogEntriesSectionProps = {
    posts: Array<Post>
}

export type BlogEntriesSection = FunctionComponent<BlogEntriesSectionProps>
