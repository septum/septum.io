import { NavbarSection } from '@typings/sections/Navbar'

import Section from '@components/Section'
import Container from '@components/Container'
import Heading from '@components/Heading'
import Link from '@components/Link'
import List from '@components/List'

import styles from './Navbar.module.sass'

const Navbar: NavbarSection = ({ title = 'septum.io' }) => {
    return (
        <Section size="medium" className={styles.navbar}>
            <Container size="large" className={styles.container}>
                <Heading size="large" className={styles.title}>
                    <Link href="/">{title}</Link>
                </Heading>
                <nav className={styles.navigation}>
                    <List
                        className={styles.list}
                        itemProps={{ className: styles.item }}
                        collection={['latest', 'games', 'devlog', 'blog']}
                        transform={(item) => ({
                            key: item,
                            content: (
                                <Link href={`/${item}`} className={styles.link}>
                                    {item}
                                </Link>
                            ),
                        })}
                    />
                </nav>
            </Container>
        </Section>
    )
}

export default Navbar
