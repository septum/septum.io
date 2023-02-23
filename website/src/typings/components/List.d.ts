import { FunctionComponent, ReactNode } from 'react'

export type ListComponentProps = {
    collection?: Array<any>
    transform: (item: any) => { key: string | number; content: ReactNode }
    className?: string
    itemProps?: { className?: string }
}

export type ListComponent = FunctionComponent<ListComponentProps>
