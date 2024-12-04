import swaggerUi from 'swagger-ui-express';
import { readFile } from "fs/promises";
const swaggerDocument = JSON.parse(await readFile(new URL("./swagger-output.json", import.meta.url)));


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));