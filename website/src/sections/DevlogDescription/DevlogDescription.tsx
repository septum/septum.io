import { DevlogDescriptionSection } from '@typings/sections/DevlogDescription'

import Section from '@components/Section'
import Container from '@components/Container'
import Text from '@components/Text'
import Link from '@components/Link'

const DevlogDescription: DevlogDescriptionSection = () => {
    return (
        <Section size="large">
            <Container size="large">
                <Text>
                    There&apos;s not much here ...yet.{` \n`}
                    Come back later or check out my{' '}
                    <Link href="https://twitter.com/septum___">
                        twitter
                    </Link>{' '}
                    for updates.
                </Text>
            </Container>
        </Section>
    )
}

export default DevlogDescription
