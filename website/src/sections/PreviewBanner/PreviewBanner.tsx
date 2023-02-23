import { PreviewBannerSection } from '@typings/sections/PreviewBanner'

import Section from '@components/Section'
import Text from '@components/Text'
import Link from '@components/Link'

import styles from './PreviewBanner.module.sass'

const PreviewBanner: PreviewBannerSection = ({ preview }) => {
    return preview ? (
        <Section size="small" className={styles.previewBanner}>
            <Text className={styles.notice}>
                You are in Preview Mode{' — '}
                <Link href="/api/exit-preview">Exit Preview Mode &rarr;</Link>
            </Text>
        </Section>
    ) : null
}

export default PreviewBanner
