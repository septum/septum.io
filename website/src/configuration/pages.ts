import { parseIntSafely } from '@utils'

const PAGES = {
    revalidation: parseIntSafely(process.env.NEXT_PUBLIC_REVALIDATE_IN_SECONDS),
}

export default PAGES
