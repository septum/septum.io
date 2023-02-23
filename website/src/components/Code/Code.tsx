import setClassNames from 'clsx'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import a11yDark from 'react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark'

import { CodeComponent } from '@typings/components/Code'

import styles from './Code.module.sass'

const Code: CodeComponent = (props) => {
    const classNames = setClassNames('code', styles.code)
    const language = props.language ?? props.className?.replace('lang-', '')

    return (
        <div className={classNames}>
            <SyntaxHighlighter language={language} style={a11yDark}>
                {props.children}
            </SyntaxHighlighter>
        </div>
    )
}

export default Code
