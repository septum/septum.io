import { GetParams } from '@typings/lib/Cms'

import CMS from '@configuration/cms'

import { buildCmsUrlWithParams } from '@utils'

export const getResponse =
    (url: string) =>
    (params?: Partial<GetParams>): Promise<Response> => {
        const urlParams = { ...CMS.tokenParams, ...params }
        const buildUrl = buildCmsUrlWithParams(url)
        const urlWithParams = buildUrl(urlParams)

        return fetch(urlWithParams, CMS.fetchOptions.get)
    }
