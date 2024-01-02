import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <App />
    }

])

export default router