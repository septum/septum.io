import { format as formatDate } from 'date-fns'

import { BlogEntriesSection } from '@typings/sections/BlogEntries'

import Section from '@components/Section'
import Container from '@components/Container'
import Heading from '@components/Heading'
import Text from '@components/Text'
import List from '@components/List'
import Link from '@components/Link'

import { eitherAOrB } from '@utils'

const eitherListOrNoPosts = eitherAOrB<string>(
    `Here's a list of posts per date:`,
    'No posts here yet.',
)

const BlogEntries: BlogEntriesSection = (props) => {
    const postsFound = props.posts && props.posts.length > 0

    return (
        <Section size="large">
            <Container size="large">
                <Heading size="medium">Less than a comment</Heading>
                <Text>{eitherListOrNoPosts(postsFound)}</Text>
                <List
                    collection={props.posts}
                    transform={(post) => ({
                        key: post.id,
                        content: (
                            <>
                                {formatDate(
                                    new Date(post.published_at),
                                    `yyyy-MM-dd`,
                                )}
                                {' — '}
                                <Link href={`/blog/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </>
                        ),
                    })}
                />
            </Container>
        </Section>
    )
}

export default BlogEntries
