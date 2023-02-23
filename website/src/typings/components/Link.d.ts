import { FunctionComponent } from 'react'

export type LinkComponentProps = {
    href: string
    external?: boolean
    className?: string
}

export type LinkComponent = FunctionComponent<LinkComponentProps>
