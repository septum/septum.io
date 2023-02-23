import setClassNames from 'clsx'

import { SectionComponent } from '@typings/components/Section'

import styles from './Section.module.sass'

const Section: SectionComponent = (props) => {
    const classNames = setClassNames(
        'section',
        props.className,
        styles.section,
        styles[props.size],
    )

    return <section className={classNames}>{props.children}</section>
}

export default Section
