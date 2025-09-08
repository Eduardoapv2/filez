import express from "express";
const app = express();
export default app;

import foldersRouter from "#api/folders";
import filesRouter from "#api/files";

app.use(express.json());

app.use("/files", filesRouter);
app.use("/folders", foldersRouter);

app.use((req, res, err, next)=>{
      if (err.code === "23505") {
    return res.status(400).send(err.detail);}
next(err);
});

app.use((req, res, err, next)=>{
    console.error(err);
    res.status(500).send("Something went wrong.");
});
