//cambiar tsconfig module

import app from "./app";
import { connection } from "./db";

async function main() {
    await connection();
    app.listen(app.get('port'), () =>{
        console.log('server on port',  app.get('port'));
    });
}
main();