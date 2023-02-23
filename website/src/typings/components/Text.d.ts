import { FunctionComponent } from 'react'

export type TextComponentProps = {
    size?: 'large' | 'medium' | 'small'
    className?: string
}

export type TextComponent = FunctionComponent<TextComponentProps>
