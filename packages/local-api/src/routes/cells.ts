import express from "express";
import yaml from "js-yaml";
import fs from "fs/promises";
import path from "path";

interface Cell {
  id: string;
  content: string;
  type: "text" | "code";
}

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();
  router.use(express.json());

  const fullPath = path.join(dir, filename);

  router.get("/cells", async (req, res) => {
    try {
      const result = await fs.readFile(fullPath, { encoding: "utf-8" });
      // res.send(JSON.parse(result));
      res.send(yaml.load(result));
    } catch (error: any) {
      if (error.code === "ENOENT") {
        await fs.writeFile(fullPath, "[]", "utf-8");
        res.send([]);
      } else {
        throw error;
      }
    }
  });

  router.post("/cells", async (req, res) => {
    const { cells }: { cells: Cell[] } = req.body;
    // await fs.writeFile(fullPath, JSON.stringify(cells), "utf-8");
    await fs.writeFile(fullPath, yaml.dump(cells), "utf-8");
    res.send({ status: "ok" });
  });

  return router;
};
