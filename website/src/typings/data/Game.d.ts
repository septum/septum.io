import { Media } from '@typings/data/Media'

export type Game = {
    id: number
    title: string
    slug: string
    description: string
    content: string
    cover: Media
    published_at: Date
    created_at: Date
    updated_at: Date
}
