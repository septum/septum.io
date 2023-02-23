import setClassNames from 'clsx'

import { ListComponent } from '@typings/components/List'

import styles from './List.module.sass'

const List: ListComponent = (props) => {
    const listClassNames = setClassNames('list', props.className, styles.list)

    const itemClassNames = setClassNames(
        'item',
        props.itemProps?.className,
        styles.item,
    )

    return (
        <ul className={listClassNames}>
            {props.collection?.map((item) => {
                const { key, content } = props.transform(item)

                return (
                    <li key={key} className={itemClassNames}>
                        {content}
                    </li>
                )
            })}
        </ul>
    )
}

export default List
