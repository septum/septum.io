import Image from 'next/image'

import { GameContentSection } from '@typings/sections/GameContent'

import Section from '@components/Section'
import Container from '@components/Container'
import Heading from '@components/Heading'
import Markdown from '@components/Markdown'

import { buildStringPublicAssetsURL } from '@utils'

const GameContent: GameContentSection = ({ game }) => {
    return (
        <Section size="large">
            <Container size="small">
                <Heading size="medium">{game.title}</Heading>
                <Image
                    src={buildStringPublicAssetsURL(game.cover.url)}
                    alt={game.cover.alternativeText}
                    width={game.cover.width}
                    height={game.cover.height}
                />
                <Markdown content={game.content} />
            </Container>
        </Section>
    )
}

export default GameContent
