export const buildStringURL = (base?: string) => (url: string) => {
    return new URL(url, base).toString()
}

export const buildStringURLWithParams =
    (base?: string) => (params: any) => (url: string) => {
        return new URL(url, base).toString() + '?' + new URLSearchParams(params)
    }

export const buildUrlWithParams =
    (base?: string) => (url: string) => (params: any) => {
        return new URL(url, base).toString() + '?' + new URLSearchParams(params)
    }

export const buildStringHostURL = buildStringURL(process.env.NEXT_PUBLIC_HOST)

export const buildStringPublicAssetsURL = buildStringURL(
    process.env.NEXT_PUBLIC_ASSETS_URL,
)

export const buildStringInternalCmsURLWithParams = buildStringURLWithParams(
    process.env.INTERNAL_CMS_URL,
)

export const buildCmsUrlWithParams = buildUrlWithParams(
    process.env.INTERNAL_CMS_URL,
)

export const buildStringInternalCmsURL = buildStringInternalCmsURLWithParams({
    token: `${process.env.CMS_REQUEST_TOKEN}`,
})

export const buildStringInternalCmsURLWithPreviewParams =
    buildStringInternalCmsURLWithParams({
        _publicationState: 'preview',
        published_at_null: 'true',
        token: `${process.env.CMS_REQUEST_TOKEN}`,
    })

export const buildShareURL = (sharer: string) => (urlSlug: string) => {
    const url = buildStringHostURL(urlSlug)
    const encodedUrl = encodeURIComponent(url)
    return `${sharer}${encodedUrl}`
}

export const truncateByWordsWithEllipsis =
    (maxLength: number) => (longString: string) =>
        longString.split(' ').slice(0, maxLength).join(' ').concat('...')

export const truncate22Words = truncateByWordsWithEllipsis(22)

export const generatePageSlug = (string: string) =>
    string
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-zA-Z0-9\s]/g, '')
        .replace(/\s/g, '-')
        .toLowerCase()

export const parseIntSafely = (maybeString?: string) =>
    Number.parseInt(`${maybeString}`, 10)

export const maybeObject =
    <T extends object>(object: T) =>
    (condition?: boolean) =>
        condition ? object : undefined

export const eitherAOrB =
    <T>(a: T, b: T) =>
    (condition: boolean) =>
        condition ? a : b
