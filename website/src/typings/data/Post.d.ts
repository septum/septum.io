import { Media } from '@typings/data/Media'

export type Post = {
    id: number
    title: string
    slug: string
    content: string
    cover: Media
    published_at: Date
    created_at: Date
    updated_at: Date
}
