import { Post } from '@typings/data/Post'
import { Game } from '@typings/data/Game'

import PREVIEW from '@configuration/preview'

export type PreviewContent = Post | Game

export type PreviewContentKind = keyof typeof PREVIEW.contentKindToUrlsMap

export type PreviewHandlerQueryParams = {
    kind: PreviewContentKind
    slug: string
    secret: string
}
