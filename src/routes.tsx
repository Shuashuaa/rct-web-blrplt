import { createBrowserRouter } from "react-router";
import Layout from "./layouts/Layout"
import App from "./App"
import Countries, { countryLoader } from "./pages/Countries";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            { index: true, Component: App },
            { path: "arts", Component: Countries, loader: countryLoader },
        ]
    }
])

export default router;