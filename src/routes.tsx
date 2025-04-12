import { createBrowserRouter } from "react-router";
import Layout from "./layouts/Layout"
import App from "./App"

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            { index: true, Component: App },
        ]
    }
])

export default router;