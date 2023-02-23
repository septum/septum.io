import { PreviewContent, PreviewContentKind } from '@typings/api/Preview'

import CMS from '@configuration/cms'
import PREVIEW from '@configuration/preview'

import { getResponse } from '@lib/cms'

export const getItemByKind = async (kind: PreviewContentKind) => {
    const { api } = PREVIEW.contentKindToUrlsMap[kind]

    const getItemByKindResponse = await getResponse(api)
    const itemByKindResponse = await getItemByKindResponse(CMS.previewParams)

    const [itemByKind]: Array<PreviewContent> = await itemByKindResponse.json()

    return itemByKind
}
