import { FunctionComponent } from 'react'

export type SectionComponentProps = {
    size: 'large' | 'medium' | 'small'
    className?: string
}

export type SectionComponent = FunctionComponent<SectionComponentProps>
