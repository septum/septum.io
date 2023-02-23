import { LatestPostsSection } from '@typings/sections/LatestPosts'

import Section from '@components/Section'
import Container from '@components/Container'
import Heading from '@components/Heading'
import Text from '@components/Text'
import List from '@components/List'
import Link from '@components/Link'

import { eitherAOrB } from '@utils'

const eitherListOrNoPosts = eitherAOrB<string>(
    `Here are some of my recent posts:`,
    'No posts here yet.',
)

const LatestPosts: LatestPostsSection = (props) => {
    const postsFound = (props.posts && props.posts.length > 0) || false

    return (
        <Section size="large">
            <Container size="large">
                <Heading size="medium">Latest Posts</Heading>
                <Text>{eitherListOrNoPosts(postsFound)}</Text>
                <List
                    collection={props.posts}
                    transform={(post) => ({
                        key: post.id,
                        content: (
                            <Link href={`/blog/${post.slug}`}>
                                {post.title}
                            </Link>
                        ),
                    })}
                />
            </Container>
        </Section>
    )
}

export default LatestPosts
