import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { ReactQueryProvider } from "./lib/react-query"
import { store } from "./store"
import "./index.css"
import App from "./App"
import { Toaster } from "./components/ui/sonner"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactQueryProvider>
        <BrowserRouter>
          <Toaster position="top-right" />
          <App />
        </BrowserRouter>
      </ReactQueryProvider>
    </Provider>
  </React.StrictMode>
)