import { Router } from "express";

const logsRouter = Router();
import { getlogs, postlogs, putlogs, deletelogs } from "../controllers/logs.js";
logsRouter.route("/").get(getlogs).post(postlogs);

logsRouter.route("/:id").put(putlogs).delete(deletelogs);

export { logsRouter };
