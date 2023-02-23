import { FunctionComponent } from 'react'

import { Post } from '@typings/data/Post'

export type LatestPostsSectionProps = {
    posts?: Array<Post>
}

export type LatestPostsSection = FunctionComponent<LatestPostsSectionProps>
