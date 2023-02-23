import { format as formatDate } from 'date-fns'

import { PostContentSection } from '@typings/sections/PostContent'

import Section from '@components/Section'
import Container from '@components/Container'
import Heading from '@components/Heading'
import Text from '@components/Text'
import Markdown from '@components/Markdown'

import styles from './PostContent.module.sass'

const PostContent: PostContentSection = ({ post }) => {
    return (
        <Section size="large">
            <Container size="small">
                <Heading size="large">{post.title}</Heading>
                <Text size="small" className={styles.publishedDate}>
                    {formatDate(new Date(post.published_at), `yyyy-MM-dd`)}
                </Text>
                <Markdown content={post.content} />
            </Container>
        </Section>
    )
}

export default PostContent
