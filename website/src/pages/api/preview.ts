import { NextApiHandler } from 'next'

import { PreviewContent, PreviewHandlerQueryParams } from '@typings/api/Preview'

import PREVIEW from '@configuration/preview'

import { getItemByKind } from '@lib/cms/previewContent'

const handler: NextApiHandler = async (req, res) => {
    const { kind, secret, slug } = req.query as PreviewHandlerQueryParams

    if (secret !== PREVIEW.secretToken) {
        return res.status(401).json({ message: 'Invalid secret' })
    }

    const kindExists = Object.keys(PREVIEW.contentKindToUrlsMap).includes(kind)

    if (!slug || !kindExists) {
        return res.status(400).json({ message: 'Invalid request' })
    }

    const item: PreviewContent = await getItemByKind(kind)

    if (!item) {
        return res.status(400).json({ message: 'Invalid slug' })
    }

    const url = PREVIEW.contentKindToUrlsMap[kind].page + '/' + item.slug

    res.setPreviewData({})

    res.redirect(url)
}

export default handler
