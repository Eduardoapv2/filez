import express from "express";
const router = express.Router();
export default router;

import { getFilesWithFolderName } from "#db/queries/files";

router.route("/").get(async (req, res) =>{
    const files = await getFilesWithFolderName();
    res.send(files);
});