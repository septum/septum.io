import { AboutMeSection } from '@typings/sections/AboutMe'

import Section from '@components/Section'
import Container from '@components/Container'
import Heading from '@components/Heading'
import Text from '@components/Text'
import Link from '@components/Link'

const AboutMe: AboutMeSection = () => {
    return (
        <Section size="large">
            <Container size="large">
                <Heading size="medium">About me</Heading>
                <Text>
                    Hi, my name is Orlando Valverde and I make games.
                    {`\n`}
                    You can follow me on{' '}
                    <Link external href="https://twitter.com/septum___">
                        twitter
                    </Link>
                    {' and '}
                    <Link external href="https://github.com/septum">
                        github
                    </Link>
                    .
                </Text>
            </Container>
        </Section>
    )
}

export default AboutMe
