import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

import PAGES from '@configuration/pages'

import { GamesPage } from '@typings/pages/Games'

import Navbar from '@sections/Navbar'
import GamesList from '@sections/GamesList'
import Footer from '@sections/Footer'

import { getAllGames } from '@lib/cms/games'

const Games: GamesPage = ({ games }) => {
    return (
        <>
            <NextSeo title="games" />
            <Navbar title="septum.io — games" />
            <GamesList games={games} />
            <Footer />
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const games = await getAllGames()

    return {
        props: { games },
        revalidate: PAGES.revalidation,
    }
}

export default Games
