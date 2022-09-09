import express from 'express';
import yaml from 'js-yaml';
import fs from 'fs/promises';
import path from 'path';
import { defaultCells } from '../default-cells';

interface Cell {
  id: string;
  content: string;
  type: 'text' | 'code';
}

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();
  router.use(express.json());

  const fullPath = path.join(dir, filename);

  router.get('/cells', async (req, res) => {
    try {
      const result = await fs.readFile(fullPath, { encoding: 'utf-8' });
      res.send(yaml.load(result));
    } catch (error: any) {
      if (error.code === 'ENOENT') {
        console.log(fullPath);
        res.send(yaml.load(defaultCells));

        console.log(error.code, error.message);
      } else {
        throw error;
      }
    }
  });

  router.post('/cells', async (req, res) => {
    const { cells }: { cells: Cell[] } = req.body;
    await fs.writeFile(fullPath, yaml.dump(cells), 'utf-8');
    res.send({ status: 'ok' });
  });

  return router;
};
