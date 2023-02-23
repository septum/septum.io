import { FooterSection } from '@typings/sections/Footer'

import Section from '@components/Section'
import Container from '@components/Container'
import Text from '@components/Text'

const Footer: FooterSection = () => {
    return (
        <Section size="medium">
            <Container thin size="large">
                <Text size="small">
                    &copy;2022 septum.io — all rights reserved
                </Text>
            </Container>
        </Section>
    )
}

export default Footer
