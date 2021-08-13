import { Component } from '@vue/runtime-dom'
import type {PageContextBuiltIn} from 'vite-plugin-ssr/types'
export type component = any
export type PageContext = PageContextBuiltIn & {
    Page: Component
    pageProps: Record<string, unknown>
    pageExports: {
        documentProps?: {
            title: string
        }
    }
    documentProps?: {
        title: string
    }

}
