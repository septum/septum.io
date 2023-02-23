import { FunctionComponent } from 'react'

export type ContainerComponentProps = {
    size: 'large' | 'medium' | 'small'
    thin?: boolean
    className?: string
}

export type ContainerComponent = FunctionComponent<ContainerComponentProps>
