const Koa = require('koa');
const router = require('koa-route');

const app = new Koa();

const main = ctx => {
    ctx.response.body = `hello world`;
}

const welcome = (ctx, name) => {
    ctx.response.body = `hello ${name}`
}

app.use(router.get('/',main))
app.use(router.get('/:name',welcome));

app.listen(8000,() => {
    console.log(`app is listen on localhost:8000`)
})
