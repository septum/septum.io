import setClassNames from 'clsx'

import { ContainerComponent } from '@typings/components/Container'

import styles from './Container.module.sass'

const Container: ContainerComponent = (props) => {
    const classNames = setClassNames(
        'container',
        props.className,
        styles.container,
        styles[props.size],
        {
            [styles.thin]: props.thin,
        },
    )

    return <div className={classNames}>{props.children}</div>
}

export default Container
