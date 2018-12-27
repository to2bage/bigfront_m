import AC from "./components/async_load.js";
export default [
    {
        name: "Home",
        path: "/",
        exact: true,
        component: AC(() => import("./views/home/index.js"))
    }, {
        name: "Detail",
        path:"/detail",
        exact: true,
        component: AC(() => import("./views/movie/detail.js"))
    }
]