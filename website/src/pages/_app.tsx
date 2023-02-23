import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import SEO from '@configuration/seo'

import 'tailwindcss/tailwind.css'
import '@styles/globals.css'

const NextApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </>
    )
}

export default NextApp
