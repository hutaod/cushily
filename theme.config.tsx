import type { DocsThemeConfig} from 'nextra-theme-docs';
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/hutaod'
  },
  docsRepositoryBase: 'https://github.com/hutaod/hutaod.github.io',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – 前端博客和笔记'
      }
    }
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  footer: {
    text: `MIT 2023 © Hutao.`
  }
}

export default config