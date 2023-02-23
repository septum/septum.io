import { FunctionComponent } from 'react'

import { Game } from '@typings/data/Game'

export type GameContentSectionProps = {
    game: Game
}

export type GameContentSection = FunctionComponent<GameContentSectionProps>
