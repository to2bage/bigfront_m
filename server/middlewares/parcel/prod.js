import serv from "koa-static";
import views from "koa-views";
import { resolve } from "path";



export const prod = async app => {
    app.use(serv(resolve(__dirname, "../../../dist")));
    app.use(views(resolve(__dirname, "../../../dist")), {
        extension: "html"
    });
    app.use(async (ctx, next) => {
        await ctx.render("index.html");
    });
};