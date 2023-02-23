import { FunctionComponent } from 'react'

export type HeadingComponentProps = {
    size: 'large' | 'medium' | 'small'
    className?: string
}

export type HeadingComponent = FunctionComponent<HeadingComponentProps>
