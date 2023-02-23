import setClassNames from 'clsx'

import { HeadingComponent } from '@typings/components/Heading'

import styles from './Heading.module.sass'

const Heading: HeadingComponent = (props) => {
    const classNames = setClassNames(
        'heading',
        props.className,
        styles.heading,
        styles[props.size],
    )

    return <h1 className={classNames}>{props.children}</h1>
}

export default Heading
