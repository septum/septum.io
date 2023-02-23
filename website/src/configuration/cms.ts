const CMS = {
    fetchOptions: {
        get: {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        },
    },
    previewParams: {
        _publicationState: 'preview',
        published_at_null: 'true',
    },
    tokenParams: {
        token: `${process.env.CMS_REQUEST_TOKEN}`,
    },
}

export default CMS
