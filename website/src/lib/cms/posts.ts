import { Post } from '@typings/data/Post'
import { GetOptions } from '@typings/lib/Cms'
import { GetPreviewParams } from '@typings/configuration/Cms'

import CMS from '@configuration/cms'
import { getResponse } from '@lib/cms'
import { maybeObject } from '@utils'

const maybePreviewParams = maybeObject<GetPreviewParams>(CMS.previewParams)
const getPostsResponse = getResponse('/posts')

export const getAllPosts = async (options?: GetOptions) => {
    const limit = options?.limit
    const params = limit ? { _limit: limit } : {}
    const allPostsResponse = await getPostsResponse(params)
    const allPosts: Array<Post> = await allPostsResponse.json()

    return allPosts
}

export const getOnePost = async (options?: GetOptions) => {
    const params = maybePreviewParams(options?.preview)
    const onePostResponse = await getPostsResponse(params)

    const [onePost]: Array<Post> = await onePostResponse.json()

    return onePost
}

export const getOnePostBySlug = async (slug: string, options?: GetOptions) => {
    const previewParams = maybePreviewParams(options?.preview)
    const params = { slug, ...previewParams }
    const onePostBySlugResponse = await getPostsResponse(params)

    const [onePostBySlug]: Array<Post> = await onePostBySlugResponse.json()

    return onePostBySlug
}
