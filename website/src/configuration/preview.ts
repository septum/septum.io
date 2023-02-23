const PREVIEW = {
    contentKindToUrlsMap: {
        post: { api: '/posts', page: '/blog' },
        game: { api: '/games', page: '/games' },
    },
    secretToken: `${process.env.PREVIEW_SECRET_TOKEN}`,
}

export default PREVIEW
