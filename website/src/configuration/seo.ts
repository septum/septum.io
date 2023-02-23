import { DefaultSeoProps } from 'next-seo'

import { buildStringHostURL } from '@utils'

const SEO: DefaultSeoProps = {
    defaultTitle: 'septum.io',
    titleTemplate: 'septum.io — %s',
    description: 'I make games. Also, I enjoy web and infraestructure stuff.',
    openGraph: {
        title: 'septum.io',
        description:
            'I make games. Also, I enjoy web and infraestructure stuff.',
        type: 'website',
        locale: 'en_US',
        url: buildStringHostURL('/'),
        site_name: 'septum.io',
        images: [
            {
                url: buildStringHostURL('/images/open-graph/logo.png'),
                width: 512,
                height: 512,
                alt: 'septum.io',
            },
        ],
    },
    twitter: {
        handle: '@septum___',
        site: buildStringHostURL('/'),
        cardType: 'summary_large_image',
    },
}

export default SEO
