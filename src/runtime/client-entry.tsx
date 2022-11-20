import { createRoot } from "react-dom/client"
import { App } from "./App"

function renderInBrowser() {
  const containerEl = document.getElementById("root");
  createRoot(containerEl).render(<App />)
}

renderInBrowser();