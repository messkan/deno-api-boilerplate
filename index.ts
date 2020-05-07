import { Application } from "https://deno.land/x/oak/mod.ts";

import router from "./routing/index.ts";
import notFound from "./middlewares/notFound.ts";

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
app.use(notFound);
const hostname = "127.0.0.1";
const port = 4000;
console.log(`Listening on ${port}...`);
await app.listen({ hostname, port });
