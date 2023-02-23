import { GamesListSection } from '@typings/sections/GamesList'

import Section from '@components/Section'
import Container from '@components/Container'
import Heading from '@components/Heading'
import Text from '@components/Text'
import List from '@components/List'
import Link from '@components/Link'

import { eitherAOrB } from '@utils'

const eitherListOrNoProjects = eitherAOrB<string>(
    `Here's a list of projects I've made or worked on:`,
    'No projects here yet.',
)

const GamesList: GamesListSection = (props) => {
    const gamesFound = props.games && props.games.length > 0

    return (
        <Section size="large">
            <Container size="large">
                <Heading size="medium">Games &amp; kinda games</Heading>
                <Text>{eitherListOrNoProjects(gamesFound)}</Text>
                <List
                    collection={props.games}
                    transform={(game) => ({
                        key: game.id,
                        content: (
                            <Link href={`/games/${game.slug}`}>
                                {game.title}
                            </Link>
                        ),
                    })}
                />
            </Container>
        </Section>
    )
}

export default GamesList
