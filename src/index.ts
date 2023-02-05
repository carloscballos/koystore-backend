//cambiar tsconfig module

import app from "./app";
import { connection } from "./db";

async function main() {
    connection();
    await app.listen(app.get('port'));
    console.log('server on port',  app.get('port'));
}

main();