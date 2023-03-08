/* eslint typescript-sort-keys/interface: error */
import type { PageOpts } from '@cushily/nextra'
import type { ReactNode } from 'react'
import type { Components } from '@cushily/nextra/mdx'

export interface NextraBlogTheme {
  comments?: ReactNode
  components?: Components
  cusdis?: {
    appId: string
    host?: string
    lang: string
  }
  darkMode?: boolean
  footer?: ReactNode
  head?: ({
    meta,
    title
  }: {
    meta: Record<string, any>
    title: string
  }) => ReactNode
  navs?: {
    name: string
    url: string
  }[]
  postFooter?: string
  readMore?: string
  titleSuffix?: string
}

export type BlogPageOpts = PageOpts<BlogFrontMatter>

export type BlogFrontMatter = {
  author?: string
  back?: string
  date?: string
  description?: string
  tag?: string | string[]
  title?: string
  type?: 'post' | 'page' | 'posts' | 'tag'
}

export interface LayoutProps {
  config: NextraBlogTheme
  opts: BlogPageOpts
}
