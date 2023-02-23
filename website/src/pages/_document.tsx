import Document, { Html, Head, Main, NextScript } from 'next/document'

import FaviconConfiguration from '@sections/FaviconConfiguration'

class NextDocument extends Document {
    render() {
        return (
            <Html prefix="og: https://ogp.me/ns#" lang="es-MX">
                <Head>
                    <FaviconConfiguration />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@400;500;700&family=Outfit:wght@400;500;700&display=swap"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default NextDocument
