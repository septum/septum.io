import GetSlugParam from '@typings/configuration/Cms'

import { GetPreviewParams } from '@typings/configuration/Cms'

export type GetOptions = {
    preview?: boolean
    start?: number
    limit?: number
}

export type GetQueryParams = {
    slug: string
    _limit: number
}

export type GetParams = GetQueryParams & GetPreviewParams
