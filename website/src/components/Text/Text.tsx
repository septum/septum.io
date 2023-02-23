import setClassNames from 'clsx'

import { TextComponent } from '@typings/components/Text'

import styles from './Text.module.sass'

const Text: TextComponent = (props) => {
    const classNames = setClassNames(
        'text',
        props.className,
        styles.text,
        styles[props.size ?? 'medium'],
    )

    return <p className={classNames}>{props.children}</p>
}

export default Text
