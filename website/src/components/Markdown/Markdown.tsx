import { Fragment } from 'react'
import setClassNames from 'clsx'
import MarkdownToJSX from 'markdown-to-jsx'

import { MarkdownComponent } from '@typings/components/Markdown'

import Link from '@components/Link'
import Code from '@components/Code'

import styles from './Markdown.module.sass'

const Markdown: MarkdownComponent = (props) => {
    const classNames = setClassNames('markdown', styles.markdown)

    return (
        <div className={classNames}>
            <MarkdownToJSX
                options={{
                    wrapper: Fragment,
                    overrides: {
                        h2: { props: { className: styles.subtitle } },
                        p: { props: { className: styles.text } },
                        a: {
                            component: Link,
                            props: { className: styles.link },
                        },
                        ul: { props: { className: styles.list } },
                        li: { props: { className: styles.item } },
                        code: {
                            component: Code,
                        },
                    },
                }}
            >
                {props.content}
            </MarkdownToJSX>
        </div>
    )
}

export default Markdown
