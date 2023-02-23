import { NextPage } from 'next'

import { Game } from '@typings/data/Game'

export type GamesPageProps = {
    games: Array<Game>
}

export type GamesPage = NextPage<GamesPageProps>
