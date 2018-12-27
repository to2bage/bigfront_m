import Koa from "koa";
import {env_func} from "./middlewares/parcel/index.js";
import { dev } from "./middlewares/parcel/dev.js";
import { prod } from "./middlewares/parcel/prod.js";

(async () => {
    const app = new Koa();

    // console.log(env_func.dev);
    // console.log(process.env.NODE_ENV);
    // await env_func.dev(app);

    // console.log("dev=> ", dev);
    // console.log("prod=> ", prod);
    // process.env.NODE_ENV === "production" ? await prod(app) : await dev(app);

    console.log("funObj==> ", env_func);

    for (let key in  env_func) {
        console.log(key);
        env_func[key](app);
    }

    app.listen(8964, () => {
        console.log("Server is Running at 8964");
    });
})();
