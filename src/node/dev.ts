import { createServer } from "vite"

export async function createDevServer(root: string) {
  const server = await createServer({ root })
  // server.listen(3000)
  return server
}