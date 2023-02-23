import { Game } from '@typings/data/Game'
import { GetOptions } from '@typings/lib/Cms'
import { GetPreviewParams } from '@typings/configuration/Cms'

import CMS from '@configuration/cms'
import { getResponse } from '@lib/cms'
import { maybeObject } from '@utils'

const maybePreviewParams = maybeObject<GetPreviewParams>(CMS.previewParams)
const getGamesResponse = getResponse('/games')

export const getAllGames = async (options?: GetOptions) => {
    const limit = options?.limit
    const params = limit ? { _limit: limit } : {}
    const allGamesResponse = await getGamesResponse(params)
    const allGames: Array<Game> = await allGamesResponse.json()

    return allGames
}

export const getOneGame = async (options?: GetOptions) => {
    const params = maybePreviewParams(options?.preview)
    const oneGameResponse = await getGamesResponse(params)

    const [oneGame]: Array<Game> = await oneGameResponse.json()

    return oneGame
}

export const getOneGameBySlug = async (slug: string, options?: GetOptions) => {
    const previewParams = maybePreviewParams(options?.preview)
    const params = { slug, ...previewParams }
    const oneGameBySlugResponse = await getGamesResponse(params)

    const [oneGameBySlug]: Array<Game> = await oneGameBySlugResponse.json()

    return oneGameBySlug
}
