import { createServer } from "vite"
import pluginReact from "@vitejs/plugin-react"
import { indexHtmlplugin } from "./plugin/indexHtml"

export async function createDevServer(root: string) {
  const server = await createServer({ 
    root,
    plugins: [indexHtmlplugin(), pluginReact()]
  })
  // server.listen(3000)
  return server
}