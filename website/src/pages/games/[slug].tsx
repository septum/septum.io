import { GetStaticProps, GetStaticPaths } from 'next'
import { NextSeo } from 'next-seo'

import { GamePage } from '@typings/pages/Game'
import { Game } from '@typings/data/Game'

import PAGES from '@configuration/pages'

import Navbar from '@sections/Navbar'
import PreviewBanner from '@sections/PreviewBanner'
import GameContent from '@sections/GameContent'
import Footer from '@sections/Footer'

import { getAllGames, getOneGameBySlug } from '@lib/cms/games'

const Game: GamePage = ({ game, preview }) => {
    return (
        <>
            <NextSeo title={game.title.toLowerCase()} />
            <PreviewBanner preview={preview} />
            <Navbar title="septum.io — games" />
            <GameContent game={game} />
            <Footer />
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const games = await getAllGames()
    const paths = games.map(({ slug }) => ({ params: { slug } }))

    return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const preview = context.preview ?? false
    const slug = context.params?.slug as string

    const game: Game = await getOneGameBySlug(slug, { preview })

    return {
        notFound: !game,
        props: { game, preview },
        revalidate: PAGES.revalidation,
    }
}

export default Game
