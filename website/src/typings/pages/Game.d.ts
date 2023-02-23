import { NextPage } from 'next'

import { Game } from '@typings/data/Game'

export type GamePageProps = {
    game: Game
    preview: boolean
}

export type GamePage = NextPage<GamePageProps>
