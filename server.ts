import express, { Application, Request, Response } from "express";
const app: Application = express();

// 1.GET http://localhost:3000/
app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});

const PORT: number = 3000;
app.listen(PORT, (): void => {
    console.log(`Server is running on http://localhost:${PORT}`);
});