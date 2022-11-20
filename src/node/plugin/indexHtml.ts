import { CLIENT_RENEG_PATH, DEFAULT_HTML_PATH } from './../constants';
import { Plugin } from "vite"
import { readFile } from "fs/promises"

export function indexHtmlplugin(): Plugin {
  return {
    name: "cushily:index-html",
    transformIndexHtml(html) {
      return {
        html,
        tags: [
          {
            tag: "script",
            attrs: {
              type: "module",
              src: `/@fs/${CLIENT_RENEG_PATH}`
            },
            injectTo: "body"
          }
        ]
      }
    },
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          let html = await readFile(DEFAULT_HTML_PATH, "utf-8")
          try {
            // 默认支持热重载，支持热更新还需要 @vitejs/plugin-react 插件支持
            html = await server.transformIndexHtml(req.url, html, req.originalUrl)
            res.statusCode = 200
            res.setHeader("Content-Type", "text/html")
            res.end(html)
          } catch (error) {
            return next(error)
          }
        })
      }
    }
  }
}