import setClassNames from 'clsx'

import NextLink from 'next/link'

import { LinkComponent } from '@typings/components/Link'

import styles from './Link.module.sass'

const Link: LinkComponent = (props) => {
    const classNames = setClassNames('link', props.className, styles.link, {
        [styles.external]: props.external,
    })

    const isHrefExternal = props.href.startsWith('http')

    if (props.external || isHrefExternal) {
        return (
            <a
                className={classNames}
                href={props.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
            >
                {props.children}
            </a>
        )
    } else {
        return (
            <NextLink href={props.href}>
                <a className={classNames}>{props.children}</a>
            </NextLink>
        )
    }
}

export default Link
