export type MediaFormat = {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: string | null
    size: number
    width: number
    height: number
}

export type MediaSizes = 'large' | 'small' | 'medium' | 'thumbnail'

export type MediaFormatsDictionary = {
    [size in MediaSizes]: MediaFormat
}

export type Media = {
    id: number
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: MediaFormatsDictionary
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: string | null
    created_at: Date
    updated_at: Date
}
