import { NotFoundSection } from '@typings/sections/NotFound'

import Section from '@components/Section'
import Container from '@components/Container'
import Heading from '@components/Heading'
import Text from '@components/Text'
import Link from '@components/Link'

const NotFound: NotFoundSection = () => {
    return (
        <Section size="large">
            <Container size="large">
                <Heading size="medium">404 — Not Found</Heading>
                <Text>
                    Sorry, this page doesn&apos;t exist.{'\n'}
                    <Link href="/">Return to the homepage</Link>.
                </Text>
            </Container>
        </Section>
    )
}

export default NotFound
