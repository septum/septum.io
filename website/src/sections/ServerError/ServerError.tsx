import { ServerErrorSection } from '@typings/sections/ServerError'

import Section from '@components/Section'
import Container from '@components/Container'
import Heading from '@components/Heading'
import Text from '@components/Text'
import Link from '@components/Link'

const ServerError: ServerErrorSection = () => {
    return (
        <Section size="large">
            <Container size="large">
                <Heading size="medium">500 — Server Error</Heading>
                <Text>
                    Oops, something went wrong.{'\n'}
                    <Link href="/">Return to the homepage</Link> or try to
                    refresh this page.{'\n'} I&apos;m going to look into this as
                    soon as posible, but if the problem persist,{'\n'}
                    I&apos;ll be thankful if you contact me in{' '}
                    <Link external href="https://twitter.com/septum___">
                        twitter
                    </Link>{' '}
                    about this.
                </Text>
            </Container>
        </Section>
    )
}

export default ServerError
