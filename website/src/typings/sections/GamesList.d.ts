import { FunctionComponent } from 'react'

import { Game } from '@typings/data/Game'

export type GamesListSectionProps = {
    games: Array<Game>
}

export type GamesListSection = FunctionComponent<GamesListSectionProps>
